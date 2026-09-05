// ============================================================================
// Enquiry + letter endpoint. The only on-demand-rendered route.
// Accepts JSON from the commissions form and the newsletter field, validates,
// appends to a local JSON store and logs to stdout (visible in Railway logs).
//
// There is no mail service wired in this build. To have enquiries emailed,
// set ENQUIRY_WEBHOOK to a URL (e.g. a Zapier/Make/Resend catch) and each
// submission will also be POSTed there.
// ============================================================================

import type { APIRoute } from 'astro';
import { promises as fs } from 'node:fs';
import path from 'node:path';

export const prerender = false;

const STORE_DIR = path.join(process.cwd(), 'data');
const STORE_FILE = path.join(STORE_DIR, 'enquiries.json');
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

async function append(entry: Record<string, unknown>) {
  try {
    await fs.mkdir(STORE_DIR, { recursive: true });
    let list: unknown[] = [];
    try {
      list = JSON.parse(await fs.readFile(STORE_FILE, 'utf-8'));
      if (!Array.isArray(list)) list = [];
    } catch { /* first write */ }
    list.push(entry);
    await fs.writeFile(STORE_FILE, JSON.stringify(list, null, 2), 'utf-8');
  } catch (err) {
    // Ephemeral filesystems may block writes; the log line below is the record of record.
    console.error('[enquiry] could not persist to disk:', err);
  }
}

export const POST: APIRoute = async ({ request }) => {
  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return json({ ok: false, error: 'Invalid request.' }, 400);
  }

  const kind = payload.kind === 'letter' ? 'letter' : 'enquiry';
  const email = String(payload.email ?? '').trim();

  if (!emailRe.test(email)) {
    return json({ ok: false, error: 'A valid email is required.' }, 422);
  }

  if (kind === 'enquiry') {
    const name = String(payload.name ?? '').trim();
    const message = String(payload.message ?? '').trim();
    if (!name || !message) {
      return json({ ok: false, error: 'Name and message are required.' }, 422);
    }
  }

  const entry = {
    kind,
    email,
    name: String(payload.name ?? '').trim() || null,
    location: String(payload.location ?? '').trim() || null,
    piece: String(payload.piece ?? '').trim() || null,
    pattern: String(payload.pattern ?? '').trim() || null,
    timing: String(payload.timing ?? '').trim() || null,
    message: String(payload.message ?? '').trim() || null,
    receivedAt: new Date().toISOString(),
  };

  console.log('[enquiry] received:', JSON.stringify(entry));
  await append(entry);

  const webhook = process.env.ENQUIRY_WEBHOOK;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(entry),
      });
    } catch (err) {
      console.error('[enquiry] webhook failed:', err);
    }
  }

  return json({ ok: true });
};

// Any non-POST is not allowed here.
export const ALL: APIRoute = () => json({ ok: false, error: 'Method not allowed.' }, 405);
