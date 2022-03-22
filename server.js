const express = require('express')
const app = express();
const {db, Tree, syncAndSeed} = require('./src/db');
const PORT = process.env.PORT || 3333;
const path = require('path');

app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/api/trees', async(req, res, next) => {
    res.send(await Tree.findAll());
})

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