const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
var fs = require('fs');
const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    },
    ssl: { ca: fs.readFileSync("C:/Users/Sara/Downloads/DigiCertGlobalRootCA.crt.pem") },
    dialectOptions: {
        ssl: { ca: fs.readFileSync("C:/Users/Sara/Downloads/DigiCertGlobalRootCA.crt.pem") }
    }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.lodges = require("./lodge.model.js")(sequelize, Sequelize);
db.people = require("./people.model.js")(sequelize, Sequelize);
module.exports = db;