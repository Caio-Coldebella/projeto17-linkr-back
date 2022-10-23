import Sqlstrng from 'sqlstring';
import db from '../database/database.js';

async function findHashtag() {
    const find = db.query(`SELECT * FROM topicsPosts;`); 
    return find;
}

async function findHashtagId(){
    return db.query(`SELECT *from topicsPosts WHERE id ${Sqlstrng.escape(id)}`);
}

export { findHashtag, findHashtagId };

