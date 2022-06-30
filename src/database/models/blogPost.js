const blogPostSchema = (sequelize, DataTypes) => {
  const blogPostTable = sequelize.define("BlogPost", {
    id: { 
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true 
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: { type: DataTypes.INTEGER, foreignKey: true }, 
    published: DataTypes.DATE,
    updated: DataTypes.DATE
  },
  { timestamps: false },
  )
  blogPostTable.associate = (models) => {
    blogPostTable.belongsTo(models.User, {as: 'user', foreignKey: 'userId'});
  }
  return blogPostTable;
}

module.exports = blogPostSchema;
