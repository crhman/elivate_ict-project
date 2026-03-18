import express from 'express'
import dotenv from 'dotenv'
import { Resend } from 'resend'

dotenv.config()

const app = express()
const port = process.env.PORT || 8787

app.use(express.json())

const resend = new Resend(process.env.RESEND_API_KEY)

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' })
})

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, phone, message } = req.body || {}

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Name, email, and message are required.' })
  }

  try {
    const result = await resend.emails.send({
      from: process.env.RESEND_FROM || 'Elivate ICT <onboarding@resend.dev>',
      to: [process.env.HR_EMAIL || 'hr@elivateict.com'],
      reply_to: email,
      subject: `[Contact] ${subject || 'New message'} - ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nSubject: ${subject || 'General Inquiry'}\n\n${message}`,
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#0f172a">
          <h2>New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
          <p><strong>Subject:</strong> ${subject || 'General Inquiry'}</p>
          <p><strong>Message:</strong></p>
          <p>${String(message).replace(/\n/g, '<br/>')}</p>
        </div>
      `,
    })

    console.log('Resend sent', result?.id || result)
    return res.json({ message: 'Message sent successfully.' })
  } catch (error) {
    console.error('Resend error', error)
    return res.status(500).json({ message: error?.message || 'Failed to send message.' })
  }
})

app.listen(port, () => {
  console.log(`Contact API running on port ${port}`)
})
