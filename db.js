const Pool = require('pg').Pool

const pool = new Pool({
    user: "postgres",
    password: "maximumemotionaldamage",
    host: "localhost",
    port: 5432,
    database: "orientation"
})

module.exports = pool