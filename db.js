const Pool = require('pg').Pool

const pool = new Pool({
    connectionString: "postgres://me:6FO06vxhMV0A29twRdz0ctw5gqYGjmEp@dpg-clr8cejh3k0c73agpkcg-a.oregon-postgres.render.com/orientation",
    // user: "me",
    // password: "6FO06vxhMV0A29twRdz0ctw5gqYGjmEp",
    // host: "dpg-clr8cejh3k0c73agpkcg-a",
    port: 5432,
    // database: "orientation",
    ssl: {
        rejectUnauthorized: false
    }
})

module.exports = pool