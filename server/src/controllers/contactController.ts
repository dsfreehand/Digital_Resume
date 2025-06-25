import { Request, Response, RequestHandler } from 'express';
import nodemailer from 'nodemailer';

export const handleContactForm: RequestHandler = async (req, res) => {
  const { name, email, message } = req.body;

const verifyRecaptcha = async (token: string) => {
  const secret = process.env.RECAPTCHA_SECRET;
  const recaptchaRes = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `secret=${secret}&response=${token}`
  });

  const data = await recaptchaRes.json();
  return data.success;
};



  if (!name || !email || !message) {
    res.status(400).json({ error: 'All fields are required.' });
    return;
  }

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.office365.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_RECEIVER,
      subject: 'New Contact Form Submission',
      text: message
    });

    res.status(200).json({ message: 'Message sent successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to send message.' });
  }
};
