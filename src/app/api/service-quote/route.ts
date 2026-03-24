import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, serviceType, tableSize, city, message } = body;

    await sendEmail({
      subject: `New service quote request from ${name}`,
      html: `
        <h2>New Service Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Service Type:</strong> ${serviceType}</p>
        <p><strong>Table Size:</strong> ${tableSize || 'Not specified'}</p>
        <p><strong>City/Zip:</strong> ${city || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
      replyTo: email,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
