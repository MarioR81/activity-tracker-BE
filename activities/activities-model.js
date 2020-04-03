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
    return db('activites');
}

function findById(id) {
    return db("activites")
    .where({ id })
    .first();
}

function update(changes, id) {
    return db("activites")
    .where({ id })
    .update(changes)
    .then(() => {
        return findById(id);
    })
}

function remove(id) {
    return db("activites")
        .where("id", id)
        .del();
}

function add(kid) {
    return db('activites')
        .insert(kid)
        .then(id => {
            return findById(id[0]);
        });
}