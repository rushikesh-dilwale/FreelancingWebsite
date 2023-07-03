const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://rushidilwale19:rushidilwale@cluster0.uvrbq4x.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

// Define a schema for the contact form data
const contactSchema = new mongoose.Schema({
  name: String,
  mobileNo: String,
  email: String,
  subject: String,
  message: String,
});

// Create a model based on the schema
const Contact = mongoose.model('Contact', contactSchema);

// Define a POST route to handle form submissions
app.post('/api/contact', (req, res) => {
  const { name, mobileNo, email, subject, message } = req.body;

  // Create a new contact document
  const newContact = new Contact({
    name,
    mobileNo,
    email,
    subject,
    message,
  });

  // Save the contact document to the database
  newContact.save()
    .then(() => res.status(200).json({ message: 'Contact form submitted successfully' }))
    .catch((error) => res.status(500).json({ error: 'An error occurred while saving the contact form' }));
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
