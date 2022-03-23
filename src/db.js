const Sequelize = require('sequelize');
const db = new Sequelize("postgres://localhost/dealers_choice_full_stack", {logging: false});

const Tree = db.define("tree", {
    name: {
        type: Sequelize.STRING(30),
        allowNull: false
    },
    species: {
        type: Sequelize.STRING(30),
        allowNull: false
    }
})

const syncAndSeed = async () => {
    await db.sync({force: true});
    await Promise.all([
        Tree.create({name: "Parlor Palm", species: "Chamaedorea elegans"}),
        Tree.create({name: "Red Japanese Maple", species: "Acer palmatum"}),
        Tree.create({name: "Corkscrew Willow Tree", species: "Salix matsudana"}),
        Tree.create({name: "Ginkgo Tree", species: "Ginkgo biloba"}),
        Tree.create({name: "Thundercloud Plum Tree", species: "Prunus cerasifera"}),
        Tree.create({name: "Mimosa Tree", species: "Albizia julibrissin Durazz"}),
    ]);
    console.log("Seeded!");
}

module.exports = {db, Tree, syncAndSeed}