const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse incoming JSON payloads
app.use(express.json());

// Basic GET route
app.get('/', (req, res) => {
    res.send('Hello from your minimal Express server!');
});

// Basic POST route 
app.post('/data', (req, res) => {
    const receivedData = req.body;
    res.json({
        message: 'Data successfully processed',
        data: receivedData
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running locally at http://localhost:3000`);
});
