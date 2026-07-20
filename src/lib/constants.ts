/**
 * Business contact constants derived from environment variables.
 * All phone-related helpers are centralised here so changing
 * NEXT_PUBLIC_PHONE in .env.local is the only thing needed.
 */

/** Raw E.164-style phone number without the leading "+", e.g. "918295567765" */
export const PHONE = process.env.NEXT_PUBLIC_PHONE ?? "918295567765";

/** Display format shown to the user, e.g. "+91 82955 67765" */
export const PHONE_DISPLAY = `+91 ${PHONE.slice(2, 7)} ${PHONE.slice(7)}`;

/** tel: href, e.g. "tel:+918295567765" */
export const PHONE_TEL = `tel:+${PHONE}`;

/** WhatsApp deep-link base, e.g. "https://wa.me/918295567765" */
export const WHATSAPP_BASE = `https://wa.me/${PHONE}`;

/** Helper: build a pre-filled WhatsApp URL */
export const getWhatsAppLink = (message: string) =>
  `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;

/** Base production site URL */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.signageworldhisar.com";

