# Hostinger Deployment Guide for Next.js

This guide explains how to deploy this Next.js 15 studio website to **Hostinger**.

Depending on the Hostinger plan you purchased, select the matching method below:

---

## Method 1: Hostinger Cloud / Business Hosting (Managed Node.js via hPanel) — Recommended

If you have a Hostinger **Cloud Hosting** or **Business Web Hosting** plan with built-in Node.js support:

### Step 1: Connect Your GitHub Repository
1. Log in to **[Hostinger hPanel](https://hpanel.hostinger.com/)**.
2. Select your website/domain and locate **Advanced** → **Node.js** (or search for **Node.js** in hPanel).
3. Click **Create Application** (or **Connect Git**).
4. Connect your GitHub account and select repository:
   - **Repository**: `Shourya-exe/web-dev`
   - **Branch**: `main`

### Step 2: Configure the Node.js Application Settings
Configure the parameters as follows:
- **Node.js version**: `20.x` (or `18.x`)
- **Application root**: `/` (root directory)
- **Application Startup File**: `node_modules/next/dist/bin/next` or select `server.js` (from standalone build)
- **Environment**: `production`

### Step 3: Add Environment Variables
In the hPanel Node.js settings, add your email delivery credentials under **Environment Variables**:
```env
CONTACT_RECEIVER_EMAIL=info@redefinedesignstudio.in
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=info@redefinedesignstudio.in
SMTP_PASS=YourHostingerEmailPassword
SMTP_FROM="Redefining Architecture <info@redefinedesignstudio.in>"
```
*(Tip: If your email is created directly in Hostinger under Emails → Email Accounts, Hostinger's SMTP host is `smtp.hostinger.com` on port `465`)*.

### Step 4: Run Build and Start
1. In hPanel, click **NPM Install** (or run `npm install`).
2. Run build: `npm run build`.
3. Click **Start Application** (or **Restart**).
4. Verify your site is live with HTTPS enabled via Hostinger's free SSL!

---

## Method 2: Hostinger KVM VPS (Ubuntu + PM2 + Nginx) — Full Control & Highest Performance

If you purchased a **Hostinger VPS**:

### Step 1: SSH into your VPS
```bash
ssh root@YOUR_SERVER_IP
```

### Step 2: Install Node.js 20, Git, and PM2
```bash
# Update packages
sudo apt update && sudo apt upgrade -y

# Install Node.js 20 LTS
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs git nginx

# Install PM2 globally
npm install -g pm2
```

### Step 3: Clone Repository and Build
```bash
# Clone to /var/www
sudo mkdir -p /var/www
cd /var/www
git clone https://github.com/Shourya-exe/web-dev.git studio-web
cd studio-web

# Install and build
npm install
npm run build
```

### Step 4: Configure Environment Variables
Create `.env.production` inside `/var/www/studio-web`:
```bash
nano .env.production
```
Paste your settings:
```env
PORT=3000
NODE_ENV=production
CONTACT_RECEIVER_EMAIL=info@redefinedesignstudio.in
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=info@redefinedesignstudio.in
SMTP_PASS=YourEmailPassword
SMTP_FROM="Redefining Architecture <info@redefinedesignstudio.in>"
```
Press `Ctrl + O`, `Enter` to save, and `Ctrl + X` to exit.

### Step 5: Start the App with PM2
```bash
pm2 start npm --name "studio-web" -- start
pm2 startup
pm2 save
```

### Step 6: Configure Nginx Reverse Proxy
Create a new Nginx block:
```bash
sudo nano /etc/nginx/sites-available/studio-web
```
Paste:
```nginx
server {
    listen 80;
    server_name redefinedesignstudio.in www.redefinedesignstudio.in;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```
Enable the configuration and reload Nginx:
```bash
sudo ln -s /etc/nginx/sites-available/studio-web /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### Step 7: Enable Free SSL (Let's Encrypt)
```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d redefinedesignstudio.in -d www.redefinedesignstudio.in
```

---

## Method 3: Hostinger Standard Shared Hosting (Static Export)

If you have Hostinger's entry-level **Single / Premium Shared Hosting** (which does not provide a Node.js process manager):

1. Change `next.config.mjs` output to static export:
   ```js
   output: 'export',
   images: { unoptimized: true }
   ```
2. Run `npm run build` locally.
3. Upload the generated files inside the **`out`** folder directly into Hostinger's **`public_html`** directory via the hPanel File Manager or FTP.
