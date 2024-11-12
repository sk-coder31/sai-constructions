const express = require('express')
const nodemailer = require('nodemailer')
const cors = require('cors')
const app = express()
app.use(cors())
const port = process.env.PORT || 5000


app.use(express.json()) 
const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: 'saiconstructionscustrelations@gmail.com', 
    pass: 'vawxyogxvrzwevtb', 
  },
  tls: {
    rejectUnauthorized: false, 
  },
})

app.post('/api/sendEmail', (req, res) => {
  const { name, email, contact, message } = req.body

  
  const mailOptions = {
    from: email, 
    to: 'saravanancc95@gmail.com', 
    subject: `New Message from ${name}`,
    text: `
      You have received a new message from ${name} (${contact}):

      ${message}
    `,
  }

 
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error)
      return res.status(500).send('Failed to send email')
    }
    res.status(200).send('Email sent successfully')
  })
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
