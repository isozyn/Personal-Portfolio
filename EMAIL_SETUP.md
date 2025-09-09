# Email Setup Instructions for Contact Form

## Option 1: Formspree (Recommended - Free tier available)

1. **Sign up for Formspree**:
   - Go to https://formspree.io/
   - Create a free account
   - You can send up to 50 submissions per month on the free plan

2. **Create a new form**:
   - After signing up, click "New Form"
   - Enter your email address (where you want to receive messages)
   - Copy the form endpoint URL (looks like: `https://formspree.io/f/xpznvlqr`)

3. **Update the code**:
   - In `ContactSection.tsx`, replace `YOUR_FORM_ID` on line 33 with your actual form ID
   - Example: Change `https://formspree.io/f/YOUR_FORM_ID` to `https://formspree.io/f/xpznvlqr`

4. **Test the form**:
   - Deploy your site and test the contact form
   - You should receive emails at the address you specified

## Option 2: EmailJS (Alternative)

1. **Sign up for EmailJS**:
   - Go to https://www.emailjs.com/
   - Create a free account (200 emails/month limit)

2. **Set up email service**:
   - Add an email service (Gmail, Outlook, etc.)
   - Create an email template
   - Get your Service ID, Template ID, and Public Key

3. **Install EmailJS**:
   ```bash
   npm install @emailjs/browser
   ```

4. **Update the code** (if you choose EmailJS instead):
   ```typescript
   import emailjs from '@emailjs/browser';
   
   // In handleSubmit function:
   const response = await emailjs.send(
     'YOUR_SERVICE_ID',
     'YOUR_TEMPLATE_ID',
     {
       from_name: `${formData.firstName} ${formData.lastName}`,
       from_email: formData.email,
       company: formData.company,
       subject: formData.subject,
       message: formData.message,
     },
     'YOUR_PUBLIC_KEY'
   );
   ```

## Option 3: Netlify Forms (If hosting on Netlify)

1. **Add netlify attribute to form**:
   ```html
   <form netlify onSubmit={handleSubmit} className="space-y-6">
   ```

2. **Add hidden input**:
   ```html
   <input type="hidden" name="form-name" value="contact" />
   ```

## Recommendation

I recommend starting with **Formspree** as it's the easiest to set up and works with any hosting platform. Just follow these steps:

1. Sign up at https://formspree.io/
2. Create a form with your email
3. Replace `YOUR_FORM_ID` in the code with your actual form ID
4. Test the form

The form is already set up to handle:
- Name, email, company, subject, and message fields
- Form validation
- Loading states
- Success/error messages
- Email notifications to your inbox

Your contact form will be fully functional once you complete the Formspree setup!
