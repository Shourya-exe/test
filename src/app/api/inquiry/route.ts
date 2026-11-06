import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";

const DEFAULT_RECIPIENT = "info@redefinedesignstudio.in";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, projectType, location, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const timestamp = new Date().toISOString().replace("T", " ").substring(0, 19);
    const inquiryId = `INQ-${Date.now()}`;
    const recipientEmail = process.env.CONTACT_RECEIVER_EMAIL || DEFAULT_RECIPIENT;

    // Build Email Subject and Contents
    const subject = `New Inquiry: ${name} — ${projectType || "Architecture"} (${location || "Location not specified"})`;

    const textContent = `
========================================
NEW PROJECT INQUIRY — REDEFINING ARCHITECTURE
========================================

Reference ID: ${inquiryId}
Received At : ${timestamp} (UTC)

CLIENT DETAILS:
- Name        : ${name}
- Email       : ${email}
- Phone       : ${phone || "Not provided"}
- Project Type: ${projectType || "General Architecture"}
- Location    : ${location || "Not specified"}

PROJECT SCOPE & MESSAGE:
${message}

----------------------------------------
To reply directly to the client, reply to this email or write to: ${email}
========================================
`.trim();

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${subject}</title>
</head>
<body style="margin: 0; padding: 32px 16px; background-color: #0D0C0B; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #ECE9E1;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #141311; border: 1px solid #262420; padding: 32px;">
    
    <!-- Header -->
    <div style="border-bottom: 1px solid #262420; padding-bottom: 20px; margin-bottom: 24px;">
      <div style="font-size: 10px; font-family: monospace; letter-spacing: 0.25em; text-transform: uppercase; color: #C5A85C; margin-bottom: 8px;">
        Redefining Architecture · Client Inquiry
      </div>
      <h1 style="font-size: 22px; font-weight: normal; margin: 0; color: #F7F5F0;">
        New Project Consultation Request
      </h1>
      <div style="font-size: 11px; font-family: monospace; color: #858178; margin-top: 8px;">
        Ref: ${inquiryId} · ${timestamp}
      </div>
    </div>

    <!-- Client Info Table -->
    <div style="margin-bottom: 24px;">
      <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
        <tr>
          <td style="padding: 8px 0; color: #858178; width: 140px; font-family: monospace; text-transform: uppercase; font-size: 11px;">Client Name</td>
          <td style="padding: 8px 0; color: #F7F5F0; font-weight: 600;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #858178; font-family: monospace; text-transform: uppercase; font-size: 11px;">Email</td>
          <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #C5A85C; text-decoration: none;">${email}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #858178; font-family: monospace; text-transform: uppercase; font-size: 11px;">Phone</td>
          <td style="padding: 8px 0;"><a href="tel:${phone || ""}" style="color: #ECE9E1; text-decoration: none;">${phone || "Not provided"}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #858178; font-family: monospace; text-transform: uppercase; font-size: 11px;">Discipline / Service</td>
          <td style="padding: 8px 0; color: #ECE9E1;">${projectType || "General Architecture"}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #858178; font-family: monospace; text-transform: uppercase; font-size: 11px;">Site / Location</td>
          <td style="padding: 8px 0; color: #ECE9E1;">${location || "Not specified"}</td>
        </tr>
      </table>
    </div>

    <!-- Message Section -->
    <div style="margin-bottom: 28px; background-color: #0D0C0B; border: 1px solid #262420; padding: 20px;">
      <div style="font-size: 10px; font-family: monospace; text-transform: uppercase; letter-spacing: 0.15em; color: #C5A85C; margin-bottom: 12px;">
        Project Brief & Site Requirements
      </div>
      <div style="font-size: 13px; line-height: 1.7; color: #ECE9E1; white-space: pre-wrap;">${message}</div>
    </div>

    <!-- Action Button -->
    <div style="text-align: center; padding-top: 12px; border-top: 1px solid #262420;">
      <a href="mailto:${email}?subject=${encodeURIComponent("Re: Inquiry regarding " + (projectType || "Architecture project") + " — Redefining Architecture")}"
         style="display: inline-block; background-color: #C5A85C; color: #0D0C0B; padding: 12px 24px; font-size: 11px; font-family: monospace; font-weight: bold; text-decoration: none; text-transform: uppercase; letter-spacing: 0.15em;">
        Reply to Client Directly
      </a>
    </div>

    <!-- Footer Note -->
    <div style="margin-top: 24px; font-size: 11px; color: #6E6A62; text-align: center;">
      This email was generated from the inquiry form on <a href="https://redefinedesignstudio.in" style="color: #858178; text-decoration: none;">redefinedesignstudio.in</a> and delivered to ${recipientEmail}.
    </div>

  </div>
</body>
</html>
`.trim();

    let emailSent = false;
    let emailServiceUsed = "none";

    // 1. Send via Resend REST API if configured
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!emailSent && resendApiKey) {
      try {
        const fromAddress = process.env.EMAIL_FROM || "Redefining Architecture <onboarding@resend.dev>";
        const resendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: fromAddress,
            to: [recipientEmail],
            reply_to: email,
            subject,
            text: textContent,
            html: htmlContent,
          }),
        });

        if (resendRes.ok) {
          emailSent = true;
          emailServiceUsed = "Resend API";
          console.log(`[Inquiry] Successfully sent email to ${recipientEmail} via Resend API`);
        } else {
          const errData = await resendRes.text();
          console.error("[Inquiry] Resend API error:", errData);
        }
      } catch (resendErr) {
        console.error("[Inquiry] Resend dispatch error:", resendErr);
      }
    }

    // 2. Send via SMTP (Nodemailer) if SMTP environment variables are configured
    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS || process.env.SMTP_PASSWORD;

    if (!emailSent && smtpHost && smtpUser && smtpPass) {
      try {
        const port = Number(process.env.SMTP_PORT) || 465;
        const secure = process.env.SMTP_SECURE === "true" || port === 465;
        const from = process.env.SMTP_FROM || `"Redefining Architecture" <${smtpUser}>`;

        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port,
          secure,
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        await transporter.sendMail({
          from,
          to: recipientEmail,
          replyTo: email,
          subject,
          text: textContent,
          html: htmlContent,
        });

        emailSent = true;
        emailServiceUsed = `SMTP (${smtpHost})`;
        console.log(`[Inquiry] Successfully sent email to ${recipientEmail} via SMTP`);
      } catch (smtpErr) {
        console.error("[Inquiry] SMTP dispatch error:", smtpErr);
      }
    }

    // 3. Optional: Send via custom Email Webhook URL if provided
    const webhookUrl = process.env.EMAIL_WEBHOOK_URL;
    if (!emailSent && webhookUrl) {
      try {
        const webhookRes = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            to: recipientEmail,
            replyTo: email,
            subject,
            name,
            email,
            phone,
            projectType,
            location,
            message,
            timestamp,
          }),
        });

        if (webhookRes.ok) {
          emailSent = true;
          emailServiceUsed = "Email Webhook";
          console.log(`[Inquiry] Successfully forwarded email via Webhook to ${recipientEmail}`);
        }
      } catch (webhookErr) {
        console.error("[Inquiry] Webhook dispatch error:", webhookErr);
      }
    }

    // 4. Fallback / Dev mode log if no email provider is configured yet
    if (!emailSent) {
      console.warn(
        `[Inquiry] Email dispatch skipped (no SMTP or Resend credentials provided). ` +
        `Target recipient: ${recipientEmail}. Detailed payload logged to inquiries.json.`
      );
    }

    // 5. Persistent local backup storage (ensures no lead is ever lost)
    try {
      const dataDir = path.join(process.cwd(), "data");
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }

      const filePath = path.join(dataDir, "inquiries.json");
      let currentInquiries: any[] = [];
      if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, "utf-8");
        try {
          currentInquiries = JSON.parse(fileContent);
        } catch {
          currentInquiries = [];
        }
      }

      const newEntry = {
        id: inquiryId,
        timestamp,
        name,
        email,
        phone: phone || "",
        projectType: projectType || "General Architecture",
        location: location || "",
        message,
        recipientEmail,
        emailSent,
        emailServiceUsed,
      };

      currentInquiries.unshift(newEntry);
      fs.writeFileSync(filePath, JSON.stringify(currentInquiries, null, 2), "utf-8");
    } catch (fsErr) {
      console.error("[Inquiry] Local backup storage error:", fsErr);
    }

    return NextResponse.json({
      success: true,
      message: "Your inquiry has been received and routed to our team.",
      emailSent,
      recipient: recipientEmail,
    });
  } catch (error: any) {
    console.error("Error processing inquiry:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to process inquiry." },
      { status: 500 }
    );
  }
}
