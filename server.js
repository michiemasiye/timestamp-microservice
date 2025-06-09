const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Helper function to check if a string is a valid date
function isValidDate(dateString) {
  const date = new Date(dateString);
  return date instanceof Date && !isNaN(date);
}

// API endpoint for timestamp conversion
app.get('/api/:date?', (req, res) => {
  let date = req.params.date;
  let response = {};

  // If no date is provided, use current date
  if (!date) {
    date = new Date();
  } else {
    // Check if the input is a Unix timestamp
    if (/^\d+$/.test(date)) {
      date = new Date(parseInt(date));
    } else {
      date = new Date(date);
    }
  }

  // Validate the date
  if (!isValidDate(date)) {
    return res.json({ error: "Invalid Date" });
  }

  // Create response object
  response = {
    unix: date.getTime(),
    utc: date.toUTCString()
  };

  res.json(response);
});

// Serve the main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 