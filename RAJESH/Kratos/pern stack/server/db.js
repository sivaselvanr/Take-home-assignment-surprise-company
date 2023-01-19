const Pool = require("pg").Pool

const pool = new Pool({
    user: "RKSS",
    password: "SivaRaj_009",
    host: "rkss.coafalvmzodt.ap-southeast-1.rds.amazonaws.com",
    port: 5432,
    database: "RKSS"
});

module.exports = pool;