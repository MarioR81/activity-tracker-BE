const db = require('../database/dbConfig');

module.exports = {
    find,
    findById,
    // update,
    // findSteps,
    // remove,
    // addStep,
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

// Adds a row to Kids table
function add(kid) {
    return db('kids')
        .insert(kid)
        .then(id => {
            return findById(id[0]);
        });
}