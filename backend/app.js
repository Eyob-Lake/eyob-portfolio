const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected')).catch(err => console.log(err));

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Contact Schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});
const Contact = mongoose.model('Contact', contactSchema);

// Sample Projects Data
const projects = [
  { id: 1, title: 'Project 1', description: 'Description of project 1...', link: 'https://github.com/eyob/project1' },
  { id: 2, title: 'Project 2', description: 'Description of project 2...', link: 'https://github.com/eyob/project2' },
];

// Simple GET route
app.get('/', (req, res) => {
  res.send('Welcome to Eyob\'s Portfolio Backend  it is best of best !');
});

// GET route for projects
app.get('/projects', (req, res) => {
  res.json(projects);
});

// Rate limiting middleware
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests, please try again later.',
});

// POST route for contact form submissions
app.post('/contact', contactLimiter, (req, res) => {
  const { name, email, message } = req.body;

  const newContact = new Contact({ name, email, message });
  newContact.save()
    .then(() => {
      // Nodemailer setup
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: `New message from ${name}`,
        text: message,
      };

      transporter.sendMail(mailOptions, (error) => {
        if (error) {
          return res.status(500).json({ message: 'Error sending email', error: error });
        }
        res.status(200).json({ message: 'Message sent successfully!' });
      });
    })
    .catch(err => res.status(500).json({ message: 'Error saving message', error: err }));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
