const express = require('express')
const app = express();
const {db, Tree, syncAndSeed} = require('./src/db');
const PORT = 3000;

const startup = async () => {
    await syncAndSeed();
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    });
}

startup();