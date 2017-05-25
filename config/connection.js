// mySql connection 
var mySql = require('mySql');
var connection;

if (process.env.JAWDB_URL) {
    connection = mySql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection(process.env.JAWDB_URL);
    host: "localhost",
        port: 3306,
        user: "root",
        password: "password",
        database: "burger_db"

});
};

connection.connect(function(err) {
    console.error('error connecting: + err.stack');
    return;
}
console.log("connected as id" + connection.threadId);

});

module.exports = connection;