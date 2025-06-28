# EmailJS Setup Guide for Portfolio Contact Form

## Overview

Your portfolio now includes a fully functional contact form using EmailJS. This allows employers and clients to send you emails directly from your website without exposing your email address.

## Setup Steps

### 1. Create EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)
3. Verify your email address

### 2. Add Email Service

1. Go to "Email Services" in your EmailJS dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, Yahoo, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID** (e.g., 'service_abc123')

### 3. Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

**Subject:** New Contact from {{from_name}} - Portfolio Website

**Content:**

```
Hello {{to_name}},

You have received a new message from your portfolio website:

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save the template and note down your **Template ID** (e.g., 'template_xyz789')

### 4. Get Public Key

1. Go to "Account" → "General"
2. Find your **Public Key** (e.g., 'user_AbCdEfGhIjKlMnOp')

### 5. Update Your Code

1. Open `src/App.jsx`
2. Find the EmailJS configuration section (around line 50-60)
3. Replace the placeholder values:

```javascript
// Replace these with your actual EmailJS values
const serviceID = "YOUR_SERVICE_ID"; // Replace with your Service ID
const templateID = "YOUR_TEMPLATE_ID"; // Replace with your Template ID
const publicKey = "YOUR_PUBLIC_KEY"; // Replace with your Public Key
```

**Example:**

```javascript
const serviceID = "service_abc123";
const templateID = "template_xyz789";
const publicKey = "user_AbCdEfGhIjKlMnOp";
```

### 6. Test Your Contact Form

1. Run your portfolio: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check your email for the message
5. Verify the form shows success/error messages

## Features Included

✅ **Form Validation**: Name, email format, and message length validation
✅ **Loading States**: Shows spinner while sending
✅ **Success/Error Messages**: Clear feedback to users
✅ **Field Error Messages**: Individual field validation
✅ **Auto-clear**: Success/error messages disappear after 5 seconds
✅ **Form Reset**: Clears form after successful submission

## Troubleshooting

### Common Issues:

1. **"Failed to send message"**: Check your Service ID, Template ID, and Public Key
2. **"Invalid template"**: Ensure your template variables match: `{{from_name}}`, `{{from_email}}`, `{{message}}`, `{{to_name}}`
3. **No email received**: Check spam folder and verify email service setup

### Debug Mode:

To see detailed error messages, open browser console (F12) when testing the form.

## Security Notes

- Your EmailJS Public Key is safe to expose in frontend code
- EmailJS handles rate limiting automatically
- Consider upgrading to a paid plan for higher email limits if needed

## Optional Enhancements

- Add auto-reply functionality via EmailJS
- Set up email notifications to multiple addresses
- Customize email templates with HTML formatting
- Add honeypot field for spam protection

Your contact form is now ready to receive messages from potential employers and clients!
