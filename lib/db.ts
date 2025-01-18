// lib/db.ts
import mysql from 'mysql2/promise';

const dataConnection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Rupp2357!',
  database: 'school_management', // Adjust the name to match your DB
});

export default dataConnection; // Exports the pool instead of creating individual connections
