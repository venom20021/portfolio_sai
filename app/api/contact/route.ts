import { NextResponse } from 'next/server';
import { getResend } from '@/lib/resend';

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 },
      );
    }

    const { data, error } = await getResend().emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'prabhatsai047@gmail.com',
      subject: `Portfolio Contact: Message from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a1a2e;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 8px 12px; font-weight: 600; color: #555; width: 100px;">Name</td>                      <td style="padding: 8px 12px;">${escapeHtml(name)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: 600; color: #555;">Email</td>
              <td style="padding: 8px 12px;">
                <a href="mailto:${escapeHtml(email)}" style="color: #2563eb;">${escapeHtml(email)}</a>
              </td>
            </tr>
            ${company ? `
            <tr>
              <td style="padding: 8px 12px; font-weight: 600; color: #555;">Company</td>
              <td style="padding: 8px 12px;">${escapeHtml(company)}</td>
            </tr>
            ` : ''}
          </table>
          <div style="margin-top: 24px; padding: 16px; background: #f5f5f5; border-radius: 8px;">
            <h3 style="margin: 0 0 8px; color: #333;">Message</h3>
            <p style="margin: 0; color: #555; white-space: pre-wrap;">${escapeHtml(message)}</p>
          </div>
        </div>
      `,
      replyTo: email,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { message: 'Email sent successfully', id: data?.id },
      { status: 200 },
    );
  } catch (error) {
    console.error('Failed to send email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 },
    );
  }
}
