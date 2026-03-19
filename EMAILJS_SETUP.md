# EmailJS Setup Guide 📧

This guide will help you set up EmailJS for the contact form in your portfolio.

## Why EmailJS?

EmailJS allows you to send emails directly from your client-side JavaScript code without needing a backend server. It's perfect for static websites and portfolios.

## Step-by-Step Setup

### 1. Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### 2. Add an Email Service

1. After logging in, click on **"Email Services"** in the left sidebar
2. Click **"Add New Service"**
3. Choose your email provider:
   - **Gmail** (most common)
   - Outlook
   - Yahoo
   - Custom SMTP
4. Follow the prompts to connect your email account
5. **Copy your Service ID** (e.g., `service_abc123`)

### 3. Create an Email Template

1. Click on **"Email Templates"** in the left sidebar
2. Click **"Create New Template"**
3. Set up your template:

**Template Name:** `contact_form` (or any name you prefer)

**Email Template:**
```
Subject: New Contact Form Submission from {{from_name}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

**Important Variables to use:**
- `{{from_name}}` - Visitor's name
- `{{from_email}}` - Visitor's email
- `{{message}}` - Visitor's message
- `{{to_name}}` - Your name (will be set to "Kumar V S" in code)

4. **Copy your Template ID** (e.g., `template_xyz789`)
5. Save the template

### 4. Get Your Public Key

1. Click on **"Account"** in the left sidebar
2. Go to **"API Keys"** tab
3. **Copy your Public Key** (User ID) (e.g., `user_123abc456def`)

### 5. Update Your Portfolio Code

Open `src/components/Contact.jsx` and find these lines (around line 58-61):

```javascript
const serviceID = 'service_xxxxxxx' // Replace with your Service ID
const templateID = 'template_xxxxxxx' // Replace with your Template ID
const userID = 'your_user_id' // Replace with your Public Key
```

Replace with your actual credentials:

```javascript
const serviceID = 'service_abc123' // Your Service ID from step 2
const templateID = 'template_xyz789' // Your Template ID from step 3
const userID = 'user_123abc456def' // Your Public Key from step 4
```

### 6. Configure Email Delivery

In EmailJS dashboard:

1. Go to **"Email Services"** → Your Service
2. Set your **"To Email"** address (where you want to receive messages)
3. Optionally set:
   - Reply-To address
   - CC/BCC addresses
   - Auto-reply settings

### 7. Test the Contact Form

1. Run your portfolio: `npm run dev`
2. Navigate to the Contact section
3. Fill out the form with test data
4. Submit the form
5. Check your email inbox (and spam folder)
6. You should receive an email with the test message!

## Email Template Examples

### Simple Template
```
New message from {{from_name}}

Email: {{from_email}}

{{message}}
```

### Professional Template
```
Subject: 📬 New Contact from Portfolio - {{from_name}}

Hello Kumar,

You have received a new message through your portfolio website:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 From: {{from_name}}
📧 Email: {{from_email}}
📅 Date: {{sent_at}}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

MESSAGE:
{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Reply to this person at: {{from_email}}

Best regards,
Your Portfolio Contact System
```

## Testing Without EmailJS

If you haven't set up EmailJS yet, the contact form will still work in **demo mode**:
- Form validation will work
- You'll see a success toast notification
- The form will reset after submission
- No actual email will be sent

Once you configure EmailJS, it will automatically send real emails!

## Troubleshooting

### Issue: "Failed to send email"

**Solutions:**
1. Check that all IDs are correct (Service ID, Template ID, User ID)
2. Verify your email service is properly connected
3. Check EmailJS dashboard for error logs
4. Make sure you're not exceeding the free tier limit (200 emails/month)

### Issue: Emails going to spam

**Solutions:**
1. In EmailJS, verify your email address
2. Add `noreply@emailjs.com` to your contacts
3. Set up custom domain (EmailJS paid plan)
4. Use a professional email service (Gmail, Outlook)

### Issue: Template variables not working

**Solutions:**
1. Make sure variable names in template match exactly: `{{from_name}}`, `{{from_email}}`, `{{message}}`
2. Check that you're passing the correct data in Contact.jsx
3. Use double curly braces: `{{variable}}` not single `{variable}`

## Free Tier Limits

EmailJS free tier includes:
- ✅ 200 emails per month
- ✅ 2 email services
- ✅ 2 email templates
- ✅ Basic support

For a portfolio, this is usually more than enough!

## Security Best Practices

1. ✅ **Never commit your User ID to public repos** - Consider using environment variables for production
2. ✅ **Enable CAPTCHA** in EmailJS dashboard to prevent spam
3. ✅ **Set rate limiting** to prevent abuse
4. ✅ **Regularly monitor** your EmailJS usage dashboard

## Alternative: Using Environment Variables (Advanced)

For better security in production:

1. Create `.env` file in project root:
```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_USER_ID=user_123abc456def
```

2. Update Contact.jsx:
```javascript
const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const userID = import.meta.env.VITE_EMAILJS_USER_ID
```

3. Add `.env` to `.gitignore`

## Need Help?

- 📚 [EmailJS Documentation](https://www.emailjs.com/docs/)
- 💬 [EmailJS Support](https://www.emailjs.com/support/)
- 📧 Contact: kumarvsofficial@gmail.com

---

**Setup Status:** 🔴 Not Configured (Demo Mode)

After setup: ✅ Configured (Live)

*Last Updated: February 2026*
