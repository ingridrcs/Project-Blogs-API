const userSchema = (sequelize, DataTypes) => {
  const userTable = sequelize.define("User", {
    id: { 
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true 
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  },
  { timestamps: false },
  )
  
    userTable.associate = (models) => {
    userTable.hasMany(models.BlogPost, {as: 'blogposts', foreignKey: 'id'});
  }
  return userTable;
}

module.exports = userSchema;

