const express = require("express");
//variable app to run express
const app = express();
//importing cors | specify server location
const cors = require("cors");

//calling db.js into index.js to gather DB information
const pool = require("./db");

//middleware function (HTTP request and respond | routes)
app.use(cors());
// request data in json format
app.use(express.json()); //req.body (request from the client side | form)

//value fetch form table
app.get("/list", async(req, res) => {
    try {
        const allList = await pool.query("SELECT * FROM user_contact");
        res.json(allList.rows);
    } catch(err) {
        console.error(err.message);
    }
})

//starting Database server
app.listen(5000, () =>{
    console.log("Database Server running.... on port: 5000 ");
});