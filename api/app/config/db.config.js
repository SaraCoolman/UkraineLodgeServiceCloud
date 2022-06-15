module.exports = {
    HOST: "ukrainelodgeservice.mysql.database.azure.com",
    USER: "root",
    PASSWORD: "Admin123456",
    DB: "ukrainelodgeservice",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};