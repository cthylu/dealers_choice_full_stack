const express = require('express')
const app = express();
const {db, Tree, syncAndSeed} = require('./src/db');
const PORT = process.env.PORT || 3000;
const path = require('path');

app.use('/dist', express.static(path.join(__dirname, 'dist')));

app.get('/', async(req, res, next) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const startup = async () => {
    await syncAndSeed();
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    });
}

startup();