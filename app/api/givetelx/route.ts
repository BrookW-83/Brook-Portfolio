import { NextResponse } from "next/server";

const TELEGRAM_BOT_TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN!;
const CHAT_ID = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID!;

export async function POST(req: Request) {
  try {
    const { message, info } = await req.json();

    const userAgent = req.headers.get("user-agent") || "Unknown User Agent";
    const platform =
      req.headers.get("sec-ch-ua-platform") || "Unknown Platform";
    const language = req.headers.get("accept-language") || "Unknown Language";
    const timezone =
      Intl.DateTimeFormat().resolvedOptions().timeZone || "Unknown Timezone";

    // Additional device info
    const deviceMemory =
      req.headers.get("device-memory") || "Unknown Device Memory";
    const viewportWidth =
      req.headers.get("viewport-width") || "Unknown Viewport Width";
    const mobile =
      req.headers.get("sec-ch-ua-mobile") || "Unknown Mobile Indicator";
    const browserInfo = req.headers.get("sec-ch-ua") || "Unknown Browser Info";

    const userInfo = [
      `User Agent: ${userAgent}`,
      `Platform: ${platform}`,
      `Language: ${language}`,
      `Timezone: ${timezone}`,
      `Browser Info: ${browserInfo}`,
      `Mobile: ${mobile}`,
      `${info}`,
      `Message: ${message}`,
    ].join("\n");

    const text = `Portfolio Action!\n\nMessage:\n${message}\n\n---\n${userInfo}`;

    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: CHAT_ID, text }),
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to send Telegram message: ${response.statusText}`
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending Telegram message:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send message" },
      { status: 500 }
    );
  }
}
