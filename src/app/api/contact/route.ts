import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, contact, service, message } = body;

    if (!name || !contact) {
      return NextResponse.json(
        { error: "Пожалуйста, укажите имя и контактные данные" },
        { status: 400 }
      );
    }

    const botToken =
      process.env.TELEGRAM_BOT_TOKEN || "8887483363:AAEvqaFkCxZY-bG6ea49VMtUDM6plNgQnJc";
    const chatId = process.env.TELEGRAM_CHAT_ID || "8805091735";

    const formattedText = `🔔 *НОВАЯ ЗАЯВКА С САЙТА* (jamsen.vercel.app)

👤 *Имя:* ${name}
📱 *Контакт:* ${contact}
💼 *Услуга:* ${service || "Не выбрана"}
📝 *Сообщение:*
${message || "Без комментария"}

📅 *Время:* ${new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" })} (МСК)`;

    // Try sending to Telegram Bot
    if (botToken && chatId) {
      try {
        const tgRes = await fetch(
          `https://api.telegram.org/bot${botToken}/sendMessage`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              chat_id: chatId,
              text: formattedText,
              parse_mode: "Markdown",
            }),
          }
        );

        if (!tgRes.ok) {
          console.error("Telegram API error:", await tgRes.text());
        }
      } catch (tgError) {
        console.error("Failed to send Telegram message:", tgError);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Заявка успешно принята",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Произошла ошибка при обработке заявки" },
      { status: 500 }
    );
  }
}
