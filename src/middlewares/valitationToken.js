import db from "../database/database.js";

async function valitationToken(req, res, next) {
  const token = req.headers.authorization?.replace("Bearer ", "");

  try {
    if (!token) {
      return res.status(401).send("Token not found!");
    }

    const sessions = await db.query(
      `SELECT * FROM sessions WHERE token = $1;`,
      [token]
    );

    if (sessions.rowCount === 0) {
      return res.status(404).send("User not found!");
    }

    const { userId } = sessions.rows[0];
    const user = await db.query(`SELECT * FROM users WHERE id = $1;`, [userId]);
    if (user.rowCount === 0) {
      return res.status(401).send("User not found!");
    }

    res.locals.user = user.rows;
    next();
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
}

export default valitationToken;