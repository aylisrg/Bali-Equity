export const WHATSAPP_NUMBER = "6281325815600";

export const whatsappUrl = (message) => `https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;