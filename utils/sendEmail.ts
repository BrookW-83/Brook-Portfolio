import emailjs from "@emailjs/browser";
import "dotenv/config";
console.log(
  "on sedn email emailjs public key",
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
);
const messageBody = "";

export const sendEmail = (message: string) => {
  // Gather as much client info as possible
  const deviceInfo = {
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    language: navigator.language,
    vendor: navigator.vendor,
    product: navigator.product,
    hardwareConcurrency: navigator.hardwareConcurrency,
    cookieEnabled: navigator.cookieEnabled,
    deviceMemory: (navigator as any).deviceMemory, // Chrome-only
    screenWidth: window.screen.width,
    screenHeight: window.screen.height,
    colorDepth: window.screen.colorDepth,
    localTime: new Date().toLocaleString(),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    message: message,
  };

  const messageBody = `Portfolio Action!\n\nDevice Info:\n${JSON.stringify(
    deviceInfo,
    null,
    2
  )}`;

  emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!); // Initialize EmailJS with the public key
  emailjs
    .send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      {
        message: messageBody,
        to_name: "Your Name",
        to_email: process.env.NEXT_PUBLIC_EMAIL, // Replace with your email
      }
    )
    .then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
      },
      (err) => {
        console.log("FAILED...", err);
      }
    );
};
