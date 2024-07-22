const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
// URL: http://localhost:3000/home
app.use('/home', express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`Micro project running on http://localhost:${port}`)
});