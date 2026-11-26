# 📱 Land Survey Records Portal (NEW & OLD RECORDS)

A modern, mobile-responsive web portal built with **HTML5, CSS3, and JavaScript** to view, search, and download land survey records on any smartphone, tablet, or desktop.

---

## 🌟 Key Features

1. **Direct Home Screen Choice**:
   - 🟢 **NEW RECORD Button**: Instantly access latest certified records (Survey #635, 636, 909, 910, 911, 912, 914).
   - 🟠 **OLD RECORD Button**: Instantly access historical survey archives.
2. **Instant Survey Number Search**:
   - Type any survey number (e.g. `910`, `635`) or click quick chips to filter instantly.
3. **In-App PDF Viewer**:
   - Touch-friendly full-screen modal preview to read PDFs directly without leaving the app.
   - Includes fallback open link for mobile browsers that restrict inline iframe rendering.
4. **Single & Bulk Download**:
   - **One-by-one Download**: Instant download with clean filenames.
   - **Download All (ZIP)**: Client-side ZIP packing powered by JSZip with live progress tracking (zero backend server required).
5. **Mobile-First & 24/7 Accessible**:
   - Fully optimized for iPhones, Android phones, and desktops.
   - Pre-configured for free static hosting on **Vercel**.

---

## 📁 Project Structure

```
LAND DOC/
├── index.html              # Main web portal
├── style.css               # Modern mobile-app styling & theme
├── app.js                  # Dynamic data catalog, search, preview & zip download
├── vercel.json             # Vercel deployment headers & caching config
├── assets/
│   └── js/
│       └── jszip.min.js    # Client-side zip compression library
├── NEW RECORD/             # 7 Latest Survey Records (PDF)
│   ├── 635.pdf
│   ├── 636.pdf
│   ├── 909.pdf
│   ├── 910.pdf
│   ├── 911.pdf
│   ├── 912.pdf
│   └── 914.pdf
└── OLD RECORD/             # 7 Historical Survey Records (PDF)
    ├── 635 OLD RECORD.pdf
    ├── 636 OLD RECORD.pdf
    ├── 909 OLD RECORD.pdf
    ├── 910 OLD RECORD.pdf
    ├── 911 OLD RECORD.pdf
    ├── 912 OLD RECORD.pdf
    └── 914 OLD RECORD.pdf
```

---

## 🚀 How to Run Locally

To test the application locally on your computer:

### Option A: Using Python (Recommended)
Open PowerShell inside this folder and run:
```bash
python -m http.server 3000
```
Then open your browser at:
`http://localhost:3000`

### Option B: Using Node.js / npx
```bash
npx serve .
```

---

## 🌐 How to Host on Vercel (Free 24/7 Access)

You can host this project on Vercel in 2 simple ways:

### Method 1: Using GitHub (Easiest & Automatic)
1. Initialize git and push this folder to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Land Survey Records Portal"
   # Push to your GitHub repo
   ```
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New..."** -> **"Project"**.
4. Select your GitHub repository.
5. Keep Framework Preset as **"Other"** (Root Directory `./`).
6. Click **Deploy**.
7. In ~30 seconds, your site will be live at `https://your-project-name.vercel.app`!

### Method 2: Using Vercel CLI (Direct from Terminal)
1. Install Vercel CLI if you haven't:
   ```bash
   npm i -g vercel
   ```
2. In this folder (`d:\Projects\Hannan\LAND DOC`), run:
   ```bash
   vercel
   ```
3. Follow the quick prompts in terminal (select default settings).
4. Run `vercel --prod` to deploy to live production.

---

## 📱 Mobile Tip: Add to Home Screen (PWA Style)
Once deployed on Vercel:
- **On iPhone (Safari)**: Open the link, tap the **Share** button, and tap **"Add to Home Screen"**.
- **On Android (Chrome)**: Open the link, tap the **Three Dots (⋮)** menu, and tap **"Install App"** or **"Add to Home screen"**.

It will now open just like a native mobile app anytime!
