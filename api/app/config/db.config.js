module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "SaraAdmin1",
    DB: "ukrainelodgeservice",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};