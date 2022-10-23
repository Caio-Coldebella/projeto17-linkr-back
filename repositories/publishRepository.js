import db from "../database/database.js";
import { TABLES_NAMES } from '../enums/tableNames.Enum.js'

async function postPublishPostByUserId(userId, link, content) {
  return db.query(
    `INSERT INTO ${TABLES_NAMES.POSTS} ("userId", content, link) VALUES ($1, $2, $3)`,
    [userId, content, link]
  );
}

async function getPublish(){
  return db.query(`SELECT ${TABLES_NAMES.POSTS}.id, ${TABLES_NAMES.POSTS}."userId",${TABLES_NAMES.POSTS}.content, ${TABLES_NAMES.POSTS}.link, ${TABLES_NAMES.USERS}.username,${TABLES_NAMES.USERS}."pictureUrl" FROM ${TABLES_NAMES.POSTS} JOIN ${TABLES_NAMES.USERS} ON ${TABLES_NAMES.POSTS}."userId"=${TABLES_NAMES.USERS}.id ORDER BY ${TABLES_NAMES.POSTS}.id DESC LIMIT 20`);
}

async function getPublishById(id){
  return db.query(`SELECT ${TABLES_NAMES.POSTS}."userId",${TABLES_NAMES.POSTS}.content, ${TABLES_NAMES.POSTS}.link, ${TABLES_NAMES.USERS}.username,${TABLES_NAMES.USERS}."pictureUrl" FROM ${TABLES_NAMES.POSTS} JOIN ${TABLES_NAMES.USERS} ON ${TABLES_NAMES.POSTS}."userId"=${TABLES_NAMES.USERS}.id WHERE ${TABLES_NAMES.POSTS}."userId"=$1 ORDER BY ${TABLES_NAMES.POSTS}.id DESC LIMIT 20`,[id]);
}

const publishRepository = { postPublishPostByUserId, getPublish, getPublishById} ;
export default publishRepository;
