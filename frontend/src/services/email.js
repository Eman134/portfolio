import emailjs from '@emailjs/browser';
const serviceID = 'YOUR_SERVICE_ID';
const templateID = 'YOUR_TEMPLATE_ID';
const publicKey = 'YOUR_PUBLIC_KEY';

export function sendEmail(formRef) {
  if (!formRef?.current) {
    return Promise.reject(new Error('form reference is not set'));
  }
  return emailjs.sendForm(serviceID, templateID, formRef.current, { publicKey });
}