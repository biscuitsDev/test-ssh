module.exports = (sequelize, DataTypes) => {
    const ToDo = sequelize.define('Todos', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        body: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return ToDo
}