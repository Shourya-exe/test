# Redefining Architecture — Studio Website

A digital atelier and portfolio for **Redefining Architecture**, an architectural practice with studios in Kolkata and Bhubaneswar led by a registered architect with over twenty years of experience across India and the Gulf.

The site is built to the architectural discipline of [`DESIGN.md`](../DESIGN.md): a mineral-inspired palette (limestone, lime plaster, graphite soil, brushed patina brass), sharp right-angled geometry (zero border radii), hairline blueprint divisions, and classical monumentality paired with technical drafting typography (`Playfair Display` + `Hanken Grotesk`).

---

## Quick Start

### 1. Requirements
- Node.js 18.0 or newer
- npm 9.0 or newer

### 2. Install & Run
```bash
cd website
npm install
npm run dev
```

Visit `http://localhost:5173` in your browser.

### 3. Production Build & Preview
```bash
npm run build
npm start          # or: npm run preview
```
Runs the Vite production build and serves the generated static assets from `dist/` on `http://localhost:4173`.

### 4. Code Quality & Linting
```bash
npm run lint
```
Runs `oxlint` across all JavaScript, JSX, and configuration files.

---

## Pages & Structure

- **Home (`/`)**:
  - Full-bleed hero with blueprint grid backdrop and featured work showcase.
  - Interactive count-up metrics for practice experience and typologies.
  - Selected work showcase with fine-line editorial cards.
  - Horizontal scroll typologies gallery.
  - *Dialogue with Nature* architectural manifesto.
  - Comprehensive *11 Services Under One Roof* directory.
- **Projects (`/projects`)**:
  - 16 curated architectural commissions.
  - Filter by building typology with URL query synchronization (`?type=...`).
  - Planar grid layout with hover metadata wipes and responsive pagination.
- **Project Case Study (`/projects/:slug`)**:
  - High-resolution photography and drafted sheets.
  - Technical metadata schedule: typology, site parameters, housing unit mix, and amenities.
  - Full-screen architectural lightbox viewer with keyboard navigation (`Esc`, `←`, `→`).
  - Contextual "Worked for: developer / consultancy" disclosure lines per client requirements.
- **Practice (`/practice`)**:
  - Monograph hero with architectural metrics.
  - Dual exterior/interior study frames (*Built Manifest* & *Atelier Sanctuary*).
  - *Dialogue with Nature* 4-pillar environmental charter: *Read, Respect, Resolve, Remain*.
  - *Principals & Atelier Leadership* roster with credentials (NIT Calicut highlighted, general registration).
  - Multi-discipline team hierarchy and execution matrix.
  - *4-Phase Delivery & Sanction Rigor* schedule.
  - Regional studio hubs (Kolkata & Bhubaneswar) with map links.
  - Direct consultation inquiry form.
- **Inquire (`/inquire`)**:
  - Full project brief & DPR intake form connected to Google Sheets.
  - *03 / Statutory Competency Schedule*: 6-authority approvals matrix (KMC, NKDA, BMC & BDA, CDA, PCB / SEIAA, Fire & Civil Aviation).
  - Regional atelier contact cards and visiting hours.
- **404 Not Found (`*`)**:
  - Minimal architectural error screen maintaining the site aesthetic.

---

## Connecting the Inquiry Form to Google Sheets

The inquiry forms on **`/inquire`** and **`/practice`** send client inquiries directly into a private Google Spreadsheet and can optionally send email notifications to your inbox using **Google Apps Script** (completely free, no third-party database or server required).

### Current Status: Demo Mode
Until connected to a Google Sheet endpoint, the forms run safely in **Demo Mode**:
* They validate fields, simulate network latency, and display a realistic confirmation notice.
* Entries are logged to the browser developer console and **nothing is saved or leaked**.

---

### Step-by-Step Setup (Takes ~3 Minutes)

#### 1. Create a Google Sheet
* Go to [sheets.new](https://sheets.new) in your browser.
* Name the spreadsheet (e.g. `Redefining Architecture — Inquiries`).

#### 2. Open Google Apps Script
* In the top menu, click **Extensions** → **Apps Script**.
* Delete any default code in the editor (`function myFunction() { ... }`).

#### 3. Paste the Pre-written Script
* Open the local file [`google-apps-script/Code.gs`](google-apps-script/Code.gs).
* Copy its entire contents and paste it into the Apps Script editor.
* *(Optional)* To receive instant email alerts on every submission, update line 16:
  ```javascript
  const NOTIFY_EMAILS = 'your-email@example.com';
  ```
* Click the **Save** icon (diskette icon) or press `Ctrl + S`.

#### 4. Deploy as a Web App
* In the top-right corner, click **Deploy** → **New deployment**.
* Click the gear icon (**Select type**) next to "Select type" and choose **Web app**.
* Configure the settings exactly as follows:
  * **Description**: `RA Inquiry Form Handler`
  * **Execute as**: **`Me (<your-email>)`** *(Critical: must be "Me")*
  * **Who has access**: **`Anyone`** *(Critical: allows public form submissions without prompting visitors for a Google login)*
* Click **Deploy**.
* If Google prompts for permissions:
  1. Click **Authorize access** and select your Google account.
  2. Click **Advanced** at the bottom of the prompt.
  3. Click **Go to Untitled project (unsafe)**.
  4. Click **Allow**.
* Copy the generated **Web App URL** (the URL ending in `/exec`).

#### 5. Configure Environment Variable
* In the `website/` project root, create a file named `.env` (or copy `.env.example`):
  ```bash
  cp .env.example .env
  ```
* Paste your copied Web App URL:
  ```env
  VITE_GOOGLE_SHEETS_ENDPOINT=https://script.google.com/macros/s/AKfycb.../exec
  ```

#### 6. Restart & Test
* Start the development server (or rebuild and preview):
  ```bash
  npm run dev
  # or test production:
  npm run build
  npm start
  ```
* Open `/inquire` in your browser, fill in a test brief, and click **Submit project brief**.
* Check your Google Sheet: a new tab titled **`Inquiries`** will be generated automatically with styled headers, frozen rows, timestamps, and your submission data!

---

### Form Architecture, Security & Reliability
* **Anti-Spam Honeypot**: An invisible field traps automated bots without requiring intrusive CAPTCHAs.
* **Client-Side Deduplication**: Every submission generates a unique ID (`submissionId`). Retries or accidental double-clicks will never insert duplicate rows.
* **Formula Injection Sanitization**: Inputs beginning with formula triggers (`=`, `+`, `-`, `@`, tab) are automatically escaped to prevent CSV/spreadsheet formula exploits.
* **CORS Fallback**: If browser network restrictions prevent reading the Apps Script redirect response, the frontend transparently issues an opaque write verification so client inquiries are never lost.

---

## Client Content & Configuration Checklist

All site copy, credentials, contact details, and project attributes are centralized in two files:

### 1. Studio Information — `src/data/site.js`
- **Studio Email**: Currently set to `null` per client instructions. Once confirmed, edit:
  ```javascript
  export const brand = {
    // ...
    email: 'studio@redefiningarchitecture.com', // set to show across footer and contact sections
  }
  ```
- **Principal Architect Name**: Currently set to `null` so the site displays "Principal Architect". To show the principal's name:
  ```javascript
  export const principal = {
    role: 'Principal Architect',
    name: 'Ar. [Name]', // set to display name above credentials
    // ...
  }
  ```
- **Phone & Studio Coordinates**: Configured in `brand.phone` and `studios[]`.

### 2. Project Attribution — `src/data/projects.js`
Following the client's guidelines:
- No specific site locations or addresses are shown.
- NIT Calicut is highlighted with an editorial underline, not bold.
- "Registered architect" registration is kept general.
- Work undertaken while engaged with third-party firms carries clear credit:
  - `Worked for: Real estate developer`
  - `Worked for: Design consultancy`
  - `Worked for: Design-build contractor`

> **Note for Client Review**: The following 4 projects currently have no third-party credit assigned (defaulting to studio work). Please confirm if any of these should carry a "Worked for" disclosure:
> 1. `luxury-villa`
> 2. `hotel-interiors`
> 3. `residence-amenities`
> 4. `club-interiors`

---

## Image Processing Pipeline

Project renders and technical drawings are managed by `scripts/prepare_images.py`.

The script:
1. Crawls the project asset folders, decks, and PDFs.
2. Crops off presentation slide borders, title strips, and location metadata.
3. Compresses and generates responsive modern `.webp` images at 640px, 1280px, and 2000px widths.
4. Generates `src/data/images.generated.json` with exact pixel dimensions to eliminate Cumulative Layout Shift (CLS).

To re-run the image optimization pipeline:
```bash
python scripts/prepare_images.py
```

---

## Deployment

The build output is a pure static single-page application (SPA).

### Vercel
Configuration is pre-set in [`website/vercel.json`](vercel.json):
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```
Add `VITE_GOOGLE_SHEETS_ENDPOINT` to your Vercel Project Environment Variables.

### Netlify
Configuration is pre-set in [`website/public/_redirects`](public/_redirects):
```
/*    /index.html   200
```
Add `VITE_GOOGLE_SHEETS_ENDPOINT` to your Netlify Site Environment Variables.
