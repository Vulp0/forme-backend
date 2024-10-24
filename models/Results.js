const TopicDefinitions = require("./TopicDefinitions");
const Templates = require("./Templates");

module.exports = (sequelize, DataTypes) => {
    const Results = sequelize.define("Results", {
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        AuthorName: {
            type: DataTypes.STRING
        },
        TemplateUUID: {
            type: DataTypes.STRING
        },
        AnswerShortText1: {type: DataTypes.STRING, defaultValue: null},
        AnswerShortText2: {type: DataTypes.STRING, defaultValue: null},
        AnswerShortText3: {type: DataTypes.STRING, defaultValue: null},
        AnswerShortText4: {type: DataTypes.STRING, defaultValue: null},
        AnswerLongText1: {type: DataTypes.STRING, defaultValue: null},
        AnswerLongText2: {type: DataTypes.STRING, defaultValue: null},
        AnswerLongText3: {type: DataTypes.STRING, defaultValue: null},
        AnswerLongText4: {type: DataTypes.STRING, defaultValue: null},
        AnswerInteger1: {type: DataTypes.INTEGER, defaultValue: null},
        AnswerInteger2: {type: DataTypes.INTEGER, defaultValue: null},
        AnswerInteger3: {type: DataTypes.INTEGER, defaultValue: null},
        AnswerInteger4: {type: DataTypes.INTEGER, defaultValue: null},
        AnswerBoolean1: {type: DataTypes.BOOLEAN, defaultValue: null},
        AnswerBoolean2: {type: DataTypes.BOOLEAN, defaultValue: null},
        AnswerBoolean3: {type: DataTypes.BOOLEAN, defaultValue: null},
        AnswerBoolean4: {type: DataTypes.BOOLEAN, defaultValue: null}
    });

    Results.associate = (models) => {
        Results.belongsTo(models.TopicDefinitions);
        Results.belongsTo(models.Templates);
    }

    return Results;
}