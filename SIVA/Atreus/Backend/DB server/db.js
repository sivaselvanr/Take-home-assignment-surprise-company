// Connecting db with server
// importing pool (for query) | pg library
const Pool = require("pg").Pool;

//Linking to AWS-RDS PSQL database to read and write data
const poll = new Pool({

    //DB Master Credentials
    user: "RKSS",
    password: "SivaRaj_009",

    //RDS DB Endpoint
    host: "rkss.coafalvmzodt.ap-southeast-1.rds.amazonaws.com",
    
    //AWS-RDS PSQL DB server running on port 5432 
    port: "5432",

    //DB Name in PQSL
    database: "RKSS-ATREUS"
});
module.exports = poll;