module.exports = (sequelize, DataTypes) => {
    const TopicDefinitions = sequelize.define("TopicDefinitions", {
        ID: {
            type: DataTypes.INTEGER,
            autoIncrement: true
        },
        Name: {
            type: DataTypes.STRING,
            primaryKey: true
        }
    });

    TopicDefinitions.associate = (models) => {
        TopicDefinitions.hasMany(models.Templates, { foreignKey: "TopicName" });
    }

    return TopicDefinitions;
}