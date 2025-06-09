# Timestamp Microservice

A full-stack JavaScript application that converts between Unix timestamps and natural language dates. This project is similar to the FreeCodeCamp Timestamp Microservice project.

## Features

- Convert dates to Unix timestamps
- Convert Unix timestamps to natural language dates
- Modern, responsive user interface
- RESTful API endpoints
- Error handling for invalid dates

## Installation

1. Clone this repository
2. Install dependencies:
```bash
npm install
```

## Usage

1. Start the server:
```bash
npm start
```

2. Open your browser and navigate to `http://localhost:3000`

## API Endpoints

- `GET /api/:date?` - Convert a date to Unix timestamp and UTC string
  - If no date is provided, returns the current time
  - Accepts both natural language dates (e.g., "2015-12-25") and Unix timestamps
  - Returns JSON in the format: `{ "unix": 1451001600000, "utc": "Fri, 25 Dec 2015 00:00:00 GMT" }`

## Example Usage

- `/api/2015-12-25` - Returns the Unix timestamp and UTC string for December 25, 2015
- `/api/1451001600000` - Returns the UTC string for the given Unix timestamp

## Technologies Used

- Node.js
- Express.js
- HTML5
- CSS3
- JavaScript (ES6+) 