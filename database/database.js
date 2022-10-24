import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const { Pool } = pg;

const connectDatabase = {
  connectionString: process.env.DATABASE_URL,
 
};

//O MODE é PROD para apenas quando fizer o deploy no heroku, enquanto o projeto estiver em produção o MODE é DEV
if (process.env.MODE === "PROD") {
    connectDatabase.ssl = {
    rejectUnauthorized: false,
  };
}

const db = new Pool(connectDatabase);
export default db;
