// Express makes routes to databases
const express = require('express');

// mysql creates a connection and allows you to query the database
const mysql = require('mysql');

// allows localhost:3000 to connect to localhost:5000
const cors = require('cors');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());

// For the database field - it's actually schema in MySQL Workbench
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'my-test-schema'
})

connection.connect((err) => {
    (err) ? console.log(err) : console.log(connection);
})

require('./routes/html-route')(app, connection);

// Start the server
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
});