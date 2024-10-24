module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
        ID: {
            type: DataTypes.INTEGER,
            autoIncrement: true
        },
        Name: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        Email: {
            type: DataTypes.STRING
        },
        Password: {
            type: DataTypes.STRING
        },
        IsAdmin: {
            type: DataTypes.BOOLEAN,
            defaultValue: 0
        },
        IsBlocked: {
            type: DataTypes.BOOLEAN,
            defaultValue: 0
        }
    });

    Users.associate = (models) => {
        Users.hasMany(models.Templates, { foreignKey: "AuthorName" });
        Users.hasMany(models.Comments, { foreignKey: "AuthorName" });
        Users.hasMany(models.Results, { foreignKey: "AuthorName" });
    }

    return Users;
}