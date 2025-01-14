// Import Express
const express = require('express');
const app = express();

// Set the port
const PORT = process.env.PORT || 3000;

// Define a start route
app.get('/', (req, res) => {
res.send("Hello World");
});

// Start the server
app.listen(PORT, () => {
console.log(`Server listening on port ${PORT}`);
});