import db from "../database/database.js";

async function seachNames(nameUser) {
  return db.query(
    `SELECT u.username, u."pictureUrl" FROM users u WHERE username LIKE '${nameUser}%'`
  );
}

export { seachNames };