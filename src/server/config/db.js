const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    user: "austin-blogger1",
    password: "password123",
    database: "blogPostsTutorial"
})

module.exports = db
