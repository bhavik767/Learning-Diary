module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "1258",
    DB: "learning_diary",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };