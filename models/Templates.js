const Users = require("./Users");
const TopicDefinitions = require("./TopicDefinitions");
const Results = require("./Results");
const Comments = require("./Comments");

module.exports = (sequelize, DataTypes) => {
    const Templates = sequelize.define("Templates", {
        ID: {
            type: DataTypes.INTEGER,
            autoIncrement: true
        },
        UUID: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        Name: { type: DataTypes.STRING },
        AuthorName: { type: DataTypes.STRING },
        TopicName: { type: DataTypes.STRING },
        TagName: { type: DataTypes.STRING },
        QuestionShortText1: {type: DataTypes.STRING, defaultValue: null},
        QuestionShortText2: {type: DataTypes.STRING, defaultValue: null},
        QuestionShortText3: {type: DataTypes.STRING, defaultValue: null},
        QuestionShortText4: {type: DataTypes.STRING, defaultValue: null},
        QuestionLongText1: {type: DataTypes.STRING, defaultValue: null},
        QuestionLongText2: {type: DataTypes.STRING, defaultValue: null},
        QuestionLongText3: {type: DataTypes.STRING, defaultValue: null},
        QuestionLongText4: {type: DataTypes.STRING, defaultValue: null},
        QuestionInteger1: {type: DataTypes.STRING, defaultValue: null},
        QuestionInteger2: {type: DataTypes.STRING, defaultValue: null},
        QuestionInteger3: {type: DataTypes.STRING, defaultValue: null},
        QuestionInteger4: {type: DataTypes.STRING, defaultValue: null},
        QuestionBoolean1: {type: DataTypes.STRING, defaultValue: null},
        QuestionBoolean2: {type: DataTypes.STRING, defaultValue: null},
        QuestionBoolean3: {type: DataTypes.STRING, defaultValue: null},
        QuestionBoolean4: {type: DataTypes.STRING, defaultValue: null}
    });

    Templates.associate = (models) => {
        Templates.belongsTo(models.Users);
        Templates.belongsTo(models.TopicDefinitions);
        Templates.hasMany(models.Results, { foreignKey: "TemplateUUID" });
        Templates.hasMany(models.Comments, { foreignKey: "TemplateUUID" });
    }

    return Templates;
}