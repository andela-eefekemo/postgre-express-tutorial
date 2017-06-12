module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define(
    'Todo',
    {
      title: DataTypes.STRING,
    },
    {
      classMethods: {
        associate: (models) => {
          // associations can be defined here
          Todo.hasMany(models.TodoItem, {
            foreignKey: 'todoId',
            as: 'todoItems',
          });
        },
      },
    });
  return Todo;
};
