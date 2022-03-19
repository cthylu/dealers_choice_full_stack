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
    await Tree.create({name: "Parlor Palm", species: "Chamaedorea elegans"});
    await Tree.create({name: "Red Japanese Maple", species: "Acer palmatum"});
    console.log("Seeded!");
}

module.exports = {db, Tree, syncAndSeed}