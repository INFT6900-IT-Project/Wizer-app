const Pool = require("pg").Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: '',
    password: 'password_kamu',
    port: 5432
});


