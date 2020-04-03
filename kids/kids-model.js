const db = require('../database/dbConfig');

module.exports = {
    find,
    findById,
    update,
    remove,
    add,
}

// returns whole table for "Kids"
function find() {
    return db('kids');
}

function findById(id) {
    return db("kids")
    .where({ id })
    .first();
}

function update(changes, id) {
    return db("kids")
    .where({ id })
    .update(changes)
    .then(() => {
        return findById(id);
    })
}

function remove(id) {
    return db("kids")
        .where("id", id)
        .del();
}

function add(kid) {
    return db('kids')
        .insert(kid)
        .then(id => {
            return findById(id[0]);
        });
}