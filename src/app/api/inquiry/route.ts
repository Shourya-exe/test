import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { google } from "googleapis";

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
    const rowData = [
      timestamp,
      name,
      email,
      phone || "N/A",
      projectType || "General Architecture",
      location || "N/A",
      message,
    ];

    let sheetAppended = false;

    // 1. Check for Google Apps Script Webhook URL (Most straightforward integration)
    const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        const response = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            timestamp,
            name,
            email,
            phone: phone || "",
            projectType: projectType || "",
            location: location || "",
            message,
          }),
        });

        if (response.ok) {
          sheetAppended = true;
          console.log("Inquiry appended via Google Apps Script Webhook");
        }
      } catch (webhookErr) {
        console.error("Google Sheets Webhook error:", webhookErr);
      }
    }

    // 2. Check for Google Cloud Service Account credentials (Official Google Sheets API v4)
    const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY;
    const sheetId = process.env.GOOGLE_SHEET_ID;

    if (!sheetAppended && serviceAccountEmail && privateKey && sheetId) {
      try {
        const auth = new google.auth.JWT({
          email: serviceAccountEmail,
          key: privateKey.replace(/\\n/g, "\n"),
          scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        });

        const sheets = google.sheets({ version: "v4", auth });
        await sheets.spreadsheets.values.append({
          spreadsheetId: sheetId,
          range: "Sheet1!A:G",
          valueInputOption: "USER_ENTERED",
          requestBody: {
            values: [rowData],
          },
        });

        sheetAppended = true;
        console.log("Inquiry appended via Google Sheets API v4");
      } catch (sheetsApiErr) {
        console.error("Google Sheets API error:", sheetsApiErr);
      }
    }

    // 3. Fallback: Local persistent storage (ensures zero inquiry loss)
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
        id: `INQ-${Date.now()}`,
        timestamp,
        name,
        email,
        phone,
        projectType,
        location,
        message,
        googleSheetSynced: sheetAppended,
      };

      currentInquiries.unshift(newEntry);
      fs.writeFileSync(filePath, JSON.stringify(currentInquiries, null, 2), "utf-8");
    } catch (fsErr) {
      console.error("Local storage error:", fsErr);
    }

    return NextResponse.json({
      success: true,
      message: "Inquiry successfully recorded and synced.",
      googleSheetSynced: sheetAppended,
    });
  } catch (error: any) {
    console.error("Error processing inquiry:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to process inquiry." },
      { status: 500 }
    );
  }
}
