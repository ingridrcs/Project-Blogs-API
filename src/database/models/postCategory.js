const postCategorySchema = (sequelize, DataTypes) => {
  const postCategoryTable = sequelize.define("PostCategory", {
    postId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    }
  },
  { timestamps: false },
  )
  postCategoryTable.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      foreignKey: 'postId',
      through: postCategoryTable,
      otherKey: 'categoryId',
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'blogPosts',
      foreignKey: 'categoryId',
      through: postCategoryTable,
      otherKey: 'postId',
    });
  }
  return postCategoryTable;
}
module.exports = postCategorySchema;