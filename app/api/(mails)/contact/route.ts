import nodemailer from "nodemailer";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const requestBody = await req.json();
  const { name, email, message, phone } = requestBody as {
    name: string;
    email: string;
    message: string;
    phone: string;
  };

  try {
    // const transporter = nodemailer.createTransport({
    //   service: process.env.MAIL_SERVICE,
    //   auth: {
    //     user: process.env.USER_EMAIL,
    //     pass: process.env.USER_PASSWORD,
    //   },
    // });

    const transporter = nodemailer.createTransport({
      host: "shared16.arvixe.com",
      port: 465,
      secure: true, // MUST be true for port 465
      auth: {
        user: process.env.SMTP_USER, // your Arvixe email
        pass: process.env.SMTP_PASS, // email password
      },
    });

    await transporter.verify();
    console.log("Arvixe SMTP connected successfully");

    const adminHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; padding: 24px;">
        <h2 style="color: #1f2937; margin-bottom: 16px;">
          New Website Inquiry – Lucid Infosystems
        </h2>

        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Name:</td>
            <td style="padding: 8px 0;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Email:</td>
            <td style="padding: 8px 0;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Phone:</td>
            <td style="padding: 8px 0;">${phone}</td>
          </tr>
        </table>

        <div style="margin-top: 20px; padding: 16px; background-color: #f9fafb; border-left: 4px solid #2563eb;">
          <p style="margin: 0; color: #374151;">
            <strong>Message:</strong><br />
            ${message}
          </p>
        </div>

        <p style="margin-top: 24px; font-size: 14px; color: #6b7280;">
          This inquiry was submitted via the Lucid Infosystems website contact form.
        </p>
      </div>
    `;

    // await transporter.sendMail({
    //   to: process.env.USER_EMAIL,
    //   subject: `New Website Inquiry from ${name}`,
    //   html: adminHtml,
    // });

    await transporter.sendMail({
      from: `"Lucid Infosystems" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: `New Website Inquiry from ${name}`,
      html: adminHtml,
    });

    const customerHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb;">
        <div style="background-color: #0f172a; padding: 24px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0;">Lucid Infosystems</h1>
          <p style="color: #c7d2fe; margin-top: 8px;">
            Smart Solutions. Real Results.
          </p>
        </div>

        <div style="padding: 32px; background-color: #ffffff;">
          <p style="font-size: 16px; color: #111827;">
            Hi ${name},
          </p>

          <p style="font-size: 16px; color: #374151; line-height: 1.6;">
            Thank you for contacting <strong>Lucid Infosystems</strong>.  
            We’ve received your inquiry and our team will review your requirements shortly.
          </p>

          <p style="font-size: 16px; color: #374151; line-height: 1.6;">
            Our experts specialize in cloud solutions, Salesforce platforms, custom applications,
            and enterprise IT services designed to help organizations scale efficiently.
          </p>

          <div style="margin: 24px 0; padding: 16px; background-color: #f9fafb; border-radius: 6px;">
            <p style="margin: 0; font-size: 14px; color: #4b5563;">
              <strong>Your Message:</strong><br />
              ${message}
            </p>
          </div>

          <p style="font-size: 14px; color: #6b7280;">
            If you need immediate assistance, feel free to reach us at:
          </p>

          <p style="font-size: 14px; color: #111827;">
            <strong>Phone:</strong> +1 (408) 689 2590<br />
            <strong>Email:</strong> info@lucidinfosystems.com
          </p>

          <p style="margin-top: 32px; font-size: 14px; color: #374151;">
            Best regards,<br />
            <strong>Lucid Infosystems Team</strong>
          </p>
        </div>

        <div style="background-color: #f3f4f6; padding: 16px; text-align: center; font-size: 12px; color: #6b7280;">
          © ${new Date().getFullYear()} Lucid Infosystems. All rights reserved.
        </div>
      </div>
    `;

    // await transporter.sendMail({
    //   from: `"Lucid Infosystems" <${process.env.SMTP_USER}>`,
    //   to: email,
    //   subject: "Thank you for contacting Lucid Infosystems",
    //   html: customerHtml,
    // });

    await transporter.sendMail({
      from: `"Lucid Infosystems" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Thank you for contacting Lucid Infosystems",
      html: customerHtml,
    });

    return NextResponse.json({
      message: "Query submitted successfully",
    });
  } catch (error: any) {
    console.error("Email send error:", error);
    return NextResponse.json(
      {
        error: "Failed to send email",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
