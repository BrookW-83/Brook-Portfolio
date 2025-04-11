import { NextResponse } from "next/server";

const TELEGRAM_BOT_TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN!;
const CHAT_ID = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID!; // Your chat ID or channel username

async function sendTelegramMessage(message: string) {
  const text = `
    Message: ${message}
  `;

  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
  const body = {
    chat_id: CHAT_ID,
    text: text,
    parse_mode: "Markdown", // Optional: use Markdown formatting
  };

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`Error sending message: ${response.statusText}`);
  }

  return response.json();
}

export async function POST(req: Request) {
  const { message } = await req.json();

  try {
    await sendTelegramMessage(message);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Telegram error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send message" },
      { status: 500 }
    );
  }
}
