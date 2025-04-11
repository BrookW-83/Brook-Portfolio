export const giveinfo = async (message: string) => {
  try {
    const info = [
      `Vendor: ${navigator.vendor}`,
      `Product: ${navigator.product}`,
      `Device_Memory: ${(navigator as any).deviceMemory}`,
      `Screen_Width: ${window.screen.width}`,
      `Screen_Height: ${window.screen.height}`,
      `Color_Depth: ${window.screen.colorDepth}`,
      `Local_Time: ${new Date().toLocaleString()}`,
    ].join("\n");

    const response = await fetch("/api/givetelx", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, info }),
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.error || "Failed to send Telegram message");
    }
  } catch (error) {}
};
