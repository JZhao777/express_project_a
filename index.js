const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const data = require('./data/anime_data.json')
// URL: http://localhost:3000/home
app.use('/home', express.static(path.join(__dirname, 'public')));



app.get('/animedata', (req, res) => {
    res.json(data);
})


app.listen(port, () => {
    console.log(`Micro project running on http://localhost:${port}/home`)
});