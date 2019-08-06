require("dotenv").config();

module.exports = {
  dialect: process.env.DB,
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
  operatorAliases: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
};
