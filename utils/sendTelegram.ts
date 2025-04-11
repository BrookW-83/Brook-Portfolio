const TELEGRAM_BOT_TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN!;
const CHAT_ID = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID!;

export const sendTelegramMessage = (message: string) => {
  const userInfo = [
    `User Agent: ${navigator.userAgent}`,
    `Platform: ${navigator.platform}`,
    `Language: ${navigator.language}`,
    `Vendor: ${navigator.vendor}`,
    `Product: ${navigator.product}`,
    `Hardware Concurrency: ${navigator.hardwareConcurrency}`,
    `Cookie Enabled: ${navigator.cookieEnabled}`,
    `Device Memory: ${(navigator as any).deviceMemory}`,
    `Screen Width: ${window.screen.width}`,
    `Screen Height: ${window.screen.height}`,
    `Color Depth: ${window.screen.colorDepth}`,
    `Local Time: ${new Date().toLocaleString()}`,
    `Timezone: ${Intl.DateTimeFormat().resolvedOptions().timeZone}`,
    `Message: ${message}`,
  ].join("\n");

  const text = `Portfolio Action!\n\nMessage:\n${message}\n\n---\n${userInfo}`;

  fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: CHAT_ID, text }),
  })
    .then((res) => {
      if (!res.ok) throw new Error(`Error sending message: ${res.statusText}`);
      return res.json();
    })
    .catch(() => {});
};
