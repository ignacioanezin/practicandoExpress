// We get the models
const db = require('../models')

const getBooks = async () => {
    const books = await db.book.findAll({include: db.author})
        .then(result => {
            return result;
        });
    
    return books;
};

const getAuthors = async () => {
    const authors = await db.author.findAll()
        .then(result => {
            return result;
        });
    
    return authors;
}

module.exports = {
    getAuthors,
    getBooks
}