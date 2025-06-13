const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Daviderusso20",
  db: "blog",
  port: "3306",
});
console.log(db.connected);

connection.connect((err) => {
  if (err) throw err;
  console.log("db.connected");
});
module.export = connection;
