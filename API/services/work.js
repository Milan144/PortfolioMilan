const db = require('./db');

//afficher tout les projets
async function getMultiple() {
    return  await db.query(
        `SELECT id, image, titre, description, lien from work ORDER BY id DESC`
    );
}

module.exports = {
    getMultiple
}