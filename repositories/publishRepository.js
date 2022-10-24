import db from "../database/database.js";
import { TABLES_NAMES } from '../enums/tableNames.Enum.js'

async function postPublishPostByUserId(userId, link, content) {
  return db.query(
    `INSERT INTO ${TABLES_NAMES.POSTS} ("userId", content, link) VALUES ($1, $2, $3)`,
    [userId, content, link]
  );
}

async function getPublish() {
  return db.query(`SELECT ${TABLES_NAMES.POSTS}.content, ${TABLES_NAMES.POSTS}.link, ${TABLES_NAMES.USERS}.username,${TABLES_NAMES.USERS}."pictureUrl" FROM ${TABLES_NAMES.POSTS} JOIN ${TABLES_NAMES.USERS} ON ${TABLES_NAMES.POSTS}."userId"=${TABLES_NAMES.USERS}.id`);
}

const publishRepository = { postPublishPostByUserId, getPublish };
export default publishRepository;
