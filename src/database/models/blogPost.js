const blogPostSchema = (sequelize, DataTypes) => {
  const blogPostTable = sequelize.define("BlogPost", {
    id: { 
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true 
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE
  })
  blogPostTable.associate = (models) => {
    blogPostTable.belongsTo(models.User, {as: 'user', foreignKey: 'userId'});
  }
  return blogPostTable;
}

module.exports = blogPostSchema;
