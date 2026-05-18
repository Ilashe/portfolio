import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const { name, email, subject, message } = await req.json();

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: "All fields are required" }, { status: 400 });
  }

  // Use Resend if API key is configured; otherwise fall back to a simple success
  const apiKey = process.env.RESEND_API_KEY;

  if (apiKey) {
    try {
      const resend = new Resend(apiKey);
      await resend.emails.send({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: "bengilashe@gmail.com",
        replyTo: email,
        subject: `[Portfolio] ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #C9A84C;">New Portfolio Message</h2>
            <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <hr style="border-color: #C9A84C; opacity: 0.3;" />
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        `,
      });
    } catch (err) {
      console.error("Email send error:", err);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }
  }

  return NextResponse.json({ success: true });
}
