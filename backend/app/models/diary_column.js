module.exports = (sequelize, Sequelize) => {
    const DiaryColumn = sequelize.define("diary_column", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      }
    });
  
    return DiaryColumn;
  };