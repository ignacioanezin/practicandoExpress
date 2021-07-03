// We get the models
// We bring the Op of sequelize which allows me to make more complex querys
const {Op} = require('sequelize')
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

// We recive the query of the search that the user is looking for on the form
const findBookByTitle = async (query) => {
    // [Op.substring] = to LIKE '%'
    const books = await db.book.findAll({
        where: {
            title: {
                [Op.substring]: query 
            }
        },
        include: db.author
    }).then(result => {
        return result;
    });
    return books;
}

module.exports = {
    getAuthors,
    getBooks,
    getBookById,
    findBookByTitle
}