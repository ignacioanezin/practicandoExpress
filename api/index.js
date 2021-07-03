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

const getBookById = async (id) => {
    // SELECT * FROM book WHERE id = id
    // findByPk = find by primary key
    const book = await db.book.findByPk(id, {include: db.author})
        .then(result => {
            return result
        });
    return book;
}

module.exports = {
    getAuthors,
    getBooks,
    getBookById
}