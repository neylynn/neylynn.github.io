import emailjs from "@emailjs/browser";
import { emailConfig } from "../config/email";

export const sendContactEmail = (form) => {
  return emailjs.sendForm(
    emailConfig.serviceId,
    emailConfig.templateId,
    form,
    emailConfig.publicKey
  );
};