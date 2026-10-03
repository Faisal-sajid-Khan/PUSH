import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import nodemailer from 'nodemailer';

const app = express();
const { PORT = 5000, CLIENT_ORIGIN = 'http://localhost:5173', SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_TO } = process.env;

app.use(helmet());
app.use(cors({ origin: CLIENT_ORIGIN }));
app.use(express.json({ limit: '20kb' }));

const transporter = SMTP_HOST
  ? nodemailer.createTransport({ host: SMTP_HOST, port: Number(SMTP_PORT), auth: { user: SMTP_USER, pass: SMTP_PASS } })
  : null;

const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 5, standardHeaders: true, legacyHeaders: false,
  message: { ok: false, error: 'Too many messages. Try again in 15 minutes.' } });

const clean = (v = '') => String(v).trim().replace(/[<>]/g, '');
const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

app.get('/api/health', (_req, res) => res.json({ ok: true }));

app.post('/api/contact', limiter, async (req, res) => {
  const { name, email, company, message, website } = req.body || {};
  if (website) return res.json({ ok: true }); // honeypot
  const data = { name: clean(name), email: clean(email), company: clean(company), message: clean(message) };
  if (data.name.length < 2) return res.status(400).json({ ok: false, error: 'Enter your name.' });
  if (!emailOk(data.email)) return res.status(400).json({ ok: false, error: 'Enter a valid email address.' });
  if (data.message.length < 10) return res.status(400).json({ ok: false, error: 'Tell us a little more (10+ characters).' });

  try {
    if (transporter) {
      await transporter.sendMail({
        from: `"PUSH website" <${SMTP_USER}>`, to: MAIL_TO, replyTo: data.email,
        subject: `New enquiry from ${data.name}`,
        text: `Name: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company || '-'}\n\n${data.message}`,
      });
    } else console.log('[contact]', data);
    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false, error: 'Could not send. Email us directly instead.' });
  }
});

app.listen(PORT, () => console.log(`PUSH API on :${PORT}`));
