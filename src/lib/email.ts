import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 'placeholder');

interface SendEmailParams {
  subject: string;
  html: string;
  replyTo?: string;
}

export async function sendEmail({ subject, html, replyTo }: SendEmailParams) {
  const { data, error } = await resend.emails.send({
    from: 'Regal Billiards <noreply@regalbilliards.com>',
    to: 'regalbilliards@gmail.com',
    subject,
    html,
    replyTo,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
