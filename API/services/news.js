const db = require('./db');

//afficher toutes les news
async function getMultiple() {
    return  await db.query(
        `SELECT id, image, titre, description, lien from news ORDER BY id DESC`
    );
}

module.exports = {
    getMultiple
}
