import emailjs from '@emailjs/browser';
const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export function sendEmail(formRef) {
  if (!formRef?.current) {
    return Promise.reject(new Error('form reference is not set'));
  }
  return emailjs.sendForm(serviceID, templateID, formRef.current, { publicKey });
}