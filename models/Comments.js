module.exports = (sequelize, DataTypes) => {
    const Comments = sequelize.define("Comments", {
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
        CommentText: {
            type: DataTypes.STRING
        }
    });

    Comments.associate = (models) => {
        Comments.belongsTo(models.Templates);
        Comments.belongsTo(models.Users);
    }

    return Comments;
}