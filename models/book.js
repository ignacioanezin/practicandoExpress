module.exports = (sequelize, DataTypes) => {
    const Book = sequelize.define('book', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,

        },
        title: DataTypes.STRING(200),
        price: DataTypes.INTEGER,
        cover: DataTypes.STRING(150)
        
    },
    {
        freezeTableName: true,
        timestamps: false
    });

    Book.associate = (models) => {
        Book.belongsTo(models.author)
    }

    return Book;
}