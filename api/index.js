// We get the models
const db = require('../models')

const getBooks = async () => {
    const books = await db.book.findAll()
        .then(result => {
            return result;
        });
    
    return books;
}

module.exports = {
    getBooks
}