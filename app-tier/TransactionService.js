const dbcreds = require('./DbConfig');
const mysql = require('mysql2');

const con = mysql.createConnection({
    host: dbcreds.DB_HOST,
    user: dbcreds.DB_USER,
    password: dbcreds.DB_PWD,
    database: dbcreds.DB_DATABASE
});

con.connect((err) => {
    if (err) {
        console.error("❌ DB connection failed:", err);
        return;
    }
    console.log("✅ Connected to DB");
});

// ================= FUNCTIONS =================

function addTransaction(amount, desc, callback) {
    const query = "INSERT INTO transactions (amount, description) VALUES (?, ?)";

    con.query(query, [amount, desc], function (err, result) {
        if (err) {
            console.error("❌ Insert failed:", err);
            return callback(err, null);
        }

        console.log("✅ Transaction inserted");
        callback(null, result);
    });
}

function getAllTransactions(callback) {
    const query = "SELECT * FROM transactions";
    con.query(query, function (err, result) {
        if (err) throw err;
        callback(result);
    });
}

function findTransactionById(id, callback) {
    const query = `SELECT * FROM transactions WHERE id = ${id}`;
    con.query(query, function (err, result) {
        if (err) throw err;
        callback(result);
    });
}

function deleteAllTransactions(callback) {
    const query = "DELETE FROM transactions";
    con.query(query, function (err, result) {
        if (err) throw err;
        callback(result);
    });
}

function deleteTransactionById(id, callback) {
    const query = `DELETE FROM transactions WHERE id = ${id}`;
    con.query(query, function (err, result) {
        if (err) throw err;
        callback(result);
    });
}

// ✅ Export ONLY functions
module.exports = {
    addTransaction,
    getAllTransactions,
    deleteAllTransactions,
    findTransactionById,
    deleteTransactionById
};