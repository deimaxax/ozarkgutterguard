import { NextResponse } from 'next/server';

interface QuoteLead {
  address?: string;
  streetAddress?: string;
  city?: string;
  name?: string;
  phone?: string;
  homeType?: string;
  stories?: string;
  service?: string;
  serviceType?: string;
  estimatedCost?: string;
  estimatedCleanPrice?: string;
  footage?: string;
  treeThreat?: string;
  source?: string;
  estimatedLow?: number;
  estimatedHigh?: number;
}

export async function POST(request: Request) {
  try {
    const data: QuoteLead = await request.json();

    const phone = data.phone?.trim() || '';
    const address = data.address?.trim() || data.streetAddress?.trim() || '';

    if (!phone && !address) {
      return NextResponse.json(
        { error: 'At least a phone number or address is required.' },
        { status: 400 }
      );
    }

    const timestamp = new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' });
    const cleanPhone = phone.replace(/\D/g, '');

    const nameText = data.name && data.name.trim() ? data.name.trim() : 'Not provided';
    const addressText = address || 'Address not provided';
    const serviceText = data.serviceType || data.service || 'Satellite Estimate / Lead Inquiry';
    const priceText = data.estimatedCost || data.estimatedCleanPrice || (data.estimatedLow ? `$${data.estimatedLow} – $${data.estimatedHigh}` : 'Requesting Quote');
    const storiesText = data.homeType || data.stories || 'N/A';
    const footageText = data.footage ? `\n📏 *Footage:* ${data.footage}` : '';
    const treeText = data.treeThreat ? `\n🌲 *Tree Threat:* ${data.treeThreat}` : '';
    const sourceText = data.source || 'Website Form';

    // Formatted Telegram notification text
    const message = `🚨 *NEW NWA LEAD CAPTURED* 🚨\n\n` +
      `👤 *Name:* ${nameText}\n` +
      `📞 *Phone:* ${phone || 'Not provided'}\n` +
      `📍 *Address:* ${addressText}\n` +
      `🛠️ *Service:* ${serviceText}\n` +
      `💵 *Est. Price:* ${priceText}\n` +
      `🏠 *Stories:* ${storiesText}${footageText}${treeText}\n` +
      `🌐 *Source Page:* ${sourceText}\n` +
      `⏰ *Time (CST):* ${timestamp}\n\n` +
      `👉 [Tap to Call Customer](tel:+1${cleanPhone})`;

    // Server log
    console.log('[LEAD CAPTURED]', JSON.stringify(data, null, 2));

    // Telegram Bot Dispatch
    const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
    const telegramChatId = process.env.TELEGRAM_CHAT_ID;

    if (telegramToken && telegramChatId) {
      try {
        const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressText)}`;
        await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: telegramChatId,
            text: message,
            parse_mode: 'Markdown',
            disable_web_page_preview: true,
            reply_markup: {
              inline_keyboard: [
                [
                  { text: `📞 Call Customer`, url: `https://t.me/share/url?url=${encodeURIComponent(`tel:+1${cleanPhone}`)}` },
                  { text: `🗺️ Google Maps`, url: mapsUrl }
                ]
              ]
            }
          }),
        });
      } catch (err) {
        console.error('[TELEGRAM DISPATCH ERROR]', err);
      }
    }

    // Generic Webhook Dispatch (Zapier / Make / HighLevel)
    const genericWebhook = process.env.LEAD_WEBHOOK_URL;
    if (genericWebhook) {
      try {
        await fetch(genericWebhook, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...data,
            timestamp,
            cleanPhone,
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
        address: addressText,
        phone,
        name: nameText,
      }
    });
  } catch (error) {
    console.error('[QUOTE API ERROR]', error);
    return NextResponse.json(
      { error: 'Failed to process lead request.' },
      { status: 500 }
    );
  }
}
