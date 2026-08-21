import { NextResponse } from 'next/server';

interface QuoteLead {
  address: string;
  name: string;
  phone: string;
  stories?: string;
  estimatedLow?: number;
  estimatedHigh?: number;
  source?: string;
  city?: string;
}

export async function POST(request: Request) {
  try {
    const data: QuoteLead = await request.json();

    if (!data.address || !data.phone) {
      return NextResponse.json(
        { error: 'Address and phone number are required.' },
        { status: 400 }
      );
    }

    const timestamp = new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' });
    const cleanPhone = data.phone.replace(/\D/g, '');

    // Formatted notification text for Telegram Bot or SMS Webhook
    const message = `🚨 *NEW NWA SATELLITE LEAD* 🚨\n\n` +
      `📍 *Address:* ${data.address}\n` +
      `👤 *Name:* ${data.name || 'Not provided'}\n` +
      `📞 *Phone:* ${data.phone}\n` +
      `🏠 *Stories:* ${data.stories || '1-story'}\n` +
      `💵 *Est. Price:* $${data.estimatedLow || 1250} – $${data.estimatedHigh || 1650}\n` +
      `🌐 *Source Page:* ${data.source || '/'}\n` +
      `⏰ *Time (CST):* ${timestamp}\n\n` +
      `👉 [Click to Call Lead](tel:+1${cleanPhone})`;

    // Log the lead server-side
    console.log('[LEAD CAPTURED]', JSON.stringify(data, null, 2));

    // Optional Telegram Bot Webhook (triggered if env variables set)
    const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
    const telegramChatId = process.env.TELEGRAM_CHAT_ID;

    if (telegramToken && telegramChatId) {
      try {
        await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: telegramChatId,
            text: message,
            parse_mode: 'Markdown',
          }),
        });
      } catch (err) {
        console.error('[TELEGRAM DISPATCH ERROR]', err);
      }
    }

    // Optional Generic Webhook (Zapier, Make, HighLevel, Twilio)
    const genericWebhook = process.env.LEAD_WEBHOOK_URL;
    if (genericWebhook) {
      try {
        await fetch(genericWebhook, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...data,
            timestamp,
            callUrl: `tel:+1${cleanPhone}`,
          }),
        });
      } catch (err) {
        console.error('[WEBHOOK DISPATCH ERROR]', err);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Lead captured and dispatched successfully.',
      timestamp,
      lead: {
        address: data.address,
        estimatedLow: data.estimatedLow || 1250,
        estimatedHigh: data.estimatedHigh || 1650,
      }
    });
  } catch (error) {
    console.error('[QUOTE API ERROR]', error);
    return NextResponse.json(
      { error: 'Failed to process satellite estimate request.' },
      { status: 500 }
    );
  }
}
