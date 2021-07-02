module.exports = (sequelize, DataTypes) => {
    const Author = sequelize.define('author', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,

        },
        completeName: DataTypes.STRING(100)
    },
    {
        freezeTableName: true,
        timestamps: false
    });

    Author.associate = (models) => {
        Author.hasMany(models.book);
    }   

    return Author;
}