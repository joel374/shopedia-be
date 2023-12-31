const nodemailer = require("nodemailer")

const emailer = async ({ to, subject, text, html, attachments }) => {
  if (!to) {
    throw new Error("Emailer needs recipient email. `to` parameter is missing")
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAILER_EMAIL,
      pass: process.env.EMAILER_PASS,
    },
  })

  await transporter.sendMail({
    to,
    subject,
    text,
    html,
    attachments,
  })
}

module.exports = emailer
