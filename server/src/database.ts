import keys from './keys';
import mysql from 'mysql2/promise';

//creo la conexion
const pool = mysql.createPool({
    host: keys.database.host,
    user: keys.database.user,
    password: keys.database.password,
    database: keys.database.database,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

export default pool
