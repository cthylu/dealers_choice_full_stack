const express = require('express')
const app = express();
const {db, Tree, syncAndSeed} = require('./src/db');
const PORT = process.env.PORT || 3333;
const path = require('path');

app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/api/trees', async(req, res, next) => {
    try {
        res.send(await Tree.findAll());
    } catch(err) {
        next(err);
    }
})

app.get('/', async(req, res, next) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

/* app.post('/api/new-tree', async(req, res, next) => {
    try{
      const tree = await Tree.create({ name: req.body.name, species: req.body.species });
      res.status(201).send(tree);
    }
    catch(err){
      next(err);
    }
}); */

const startup = async () => {
    await syncAndSeed();
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    });
}

startup();