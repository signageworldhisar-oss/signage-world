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

/** Company Name */
export const COMPANY_NAME = process.env.NEXT_PUBLIC_COMPANY_NAME ?? "Signage World";

/** Physical Address */
export const ADDRESS = process.env.NEXT_PUBLIC_ADDRESS ?? "Shop No. 1337, Police Choki, Mohalla Sainiyan, Hisar, Haryana — 125001";

/** Google Maps place details link for Signage World workshop location */
export const MAPS_URL = process.env.NEXT_PUBLIC_MAPS_URL ?? "https://www.google.com/maps/place/1337%2F18,+Sainian+Mohalla,+Mehta+Nagar,+Hisar,+Haryana+125001/@29.1559973,75.7295266,17z/data=!3m1!4b1!4m6!3m5!1s0x391233276cb8af6f:0xa8f17f4e64fc090b!8m2!3d29.1559973!4d75.7295266";

/** Google Maps Embed Iframe URL */
export const MAPS_EMBED_URL = process.env.NEXT_PUBLIC_MAPS_EMBED_URL ?? "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5389.610672643345!2d75.72952657947955!3d29.155997276608737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391233276cb8af6f%3A0xa8f17f4e64fc090b!2s1337%2F18%2C%20Sainian%20Mohalla%2C%20Mehta%20Nagar%2C%20Hisar%2C%20Haryana%20125001!5e1!3m2!1sen!2sin!4v1785935332597!5m2!1sen!2sin";

/** City and region */
export const CITY = process.env.NEXT_PUBLIC_CITY ?? "Hisar";
export const STATE = process.env.NEXT_PUBLIC_STATE ?? "Haryana";

/** Historical and credentials statistics */
export const FOUNDED_YEAR = process.env.NEXT_PUBLIC_FOUNDED_YEAR ?? "2017";
export const EXPERIENCE_YEARS = process.env.NEXT_PUBLIC_EXPERIENCE_YEARS ?? "10";
export const GST_STATUS = process.env.NEXT_PUBLIC_GST_REGISTERED === "false" ? "Locally rooted" : "GST registered";

