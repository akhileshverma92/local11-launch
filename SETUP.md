# LOCAL11 Coming Soon Page - Setup Guide

This is a premium coming soon page for LOCAL11, a next-generation gaming platform. The page is fully functional and ready to deploy.

## Features

- **Hero Section** with animated glow background and gradient text
- **Email Signup Form** with validation and status feedback
- **Animated Stats Counter** showing 327+ players ready
- **Feature Cards** highlighting key value propositions
- **Responsive Design** that works on mobile, tablet, and desktop
- **Smooth Animations** using Framer Motion

## Email Storage Setup (Google Sheets)

To enable email collection to Google Sheets, follow these steps:

### 1. Create a Google Apps Script

1. Go to [script.google.com](https://script.google.com)
2. Create a new project
3. Replace the default code with this script:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  
  // Check if email already exists
  const range = sheet.getDataRange();
  const values = range.getValues();
  
  for (let i = 0; i < values.length; i++) {
    if (values[i][0] === data.email) {
      return ContentService.createTextOutput(
        JSON.stringify({ success: false, message: 'Email already registered' })
      ).setMimeType(ContentService.MimeType.JSON);
    }
  }
  
  // Add new email
  sheet.appendRow([data.email, data.timestamp]);
  
  return ContentService.createTextOutput(
    JSON.stringify({ success: true, message: 'Email saved' })
  ).setMimeType(ContentService.MimeType.JSON);
}
```

### 2. Deploy as Web App

1. Click "Deploy" → "New deployment"
2. Choose "Web app" as the deployment type
3. Set "Execute as" to your Google account
4. Set "Who has access" to "Anyone"
5. Click "Deploy"
6. Copy the deployment URL (you'll need this next)

### 3. Set Environment Variable

1. Go to your Vercel project settings
2. Add an environment variable: `NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK`
3. Set the value to your Apps Script deployment URL
4. Redeploy your application

## Environment Variables

Add this to your `.env.local` file for local development:

```
NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK=https://script.google.com/macros/d/YOUR_DEPLOYMENT_ID/usercontent
```

## API Route

The email submission is handled by `/app/api/email/route.ts` which:
- Validates the email format
- Sends it to your Google Apps Script webhook
- Returns success/error messages to the client
- Includes error handling and user feedback

## Customization

### Colors
Update the color scheme in `app/globals.css`:
- Primary orange: `oklch(0.65 0.22 29.2)` (OKLch color space)
- Modify `--background`, `--foreground`, `--accent` variables for light and dark modes

### Copy
- Update text in the component files (Hero, Stats, Features, Footer)
- Modify the number of players in `components/stats.tsx` (currently 327)

### Animations
- Adjust animation speeds in Framer Motion `transition` props
- Customize the glow background in `components/hero.tsx`

## Deployment

### Deploy to Vercel

```bash
# Push to GitHub
git push origin main

# Or deploy directly
vercel deploy
```

The app will automatically:
- Optimize images and assets
- Enable Turbopack for fast builds
- Deploy globally with edge caching

### Production Checklist

- [ ] Google Sheets webhook URL configured
- [ ] Environment variables set in Vercel
- [ ] Metadata (title, description) updated
- [ ] All links point to correct destinations
- [ ] Test email submission on production
- [ ] Verify animations work smoothly on target devices

## Technical Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4 + custom design tokens
- **Animations**: Framer Motion
- **Email Integration**: Google Apps Script webhook
- **Hosting**: Vercel Edge Network

## Browser Support

Works on all modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

---

Built with v0 - The AI-powered UI builder by Vercel
