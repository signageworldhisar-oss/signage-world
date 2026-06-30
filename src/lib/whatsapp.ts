import { PHONE } from "@/lib/constants";

export interface QuoteFormData {
  name: string;
  phone: string;
  email?: string;
  serviceLabel: string;
  needsInstallation: boolean;
  message: string;
}

/**
 * Builds a pre-filled WhatsApp URL from quote form data.
 * Returns a wa.me deep-link ready to open in a new tab.
 */
export function getWhatsAppURL({
  name,
  phone,
  email,
  serviceLabel,
  needsInstallation,
  message,
}: QuoteFormData): string {
  const formattedText =
    `Hello Signage World! I would like to request a quote:\n\n` +
    `Name: ${name}\n` +
    `Phone: ${phone}\n` +
    `Email: ${email || "Not provided"}\n` +
    `Service Type: ${serviceLabel}\n` +
    `Installation Needed: ${needsInstallation ? "Yes" : "No"}\n` +
    `Project Details: ${message}`;

  return `https://wa.me/${PHONE}?text=${encodeURIComponent(formattedText)}`;
}
