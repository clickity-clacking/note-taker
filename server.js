const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/api/notes', (req, res) => {
    res.send('Hello!');
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});