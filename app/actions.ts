"use server";

export async function sendEmailToTelegram(email: string) {
  const token = "8749755157:AAGePFzvLAOEog5MzURG3wzakDTteVKRCSM";
  const chatId = -5226409806;

  if (!token || !chatId) {
    console.error("Telegram credentials are not set in environment variables.");
    return { success: false, error: "Server configuration error" };
  }

  const message = `Wishlist request for Coming Soon: ${email}`;
  const url = `https://api.telegram.org/bot${token}/sendMessage`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      }),
    });

    const data = await response.json();

    if (data.ok) {
      return { success: true };
    } else {
      console.error("Telegram API error:", data);
      return { success: false, error: data.description || "Failed to send message" };
    }
  } catch (error) {
    console.error("Error sending message to Telegram:", error);
    return { success: false, error: "Internal server error" };
  }
}
