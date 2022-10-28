import db from '../database/database.js';

export async function findHashtag() {
    const { rows: topicResults } = await db.query(`
    SELECT topics.*, COUNT("topicsPosts"."topicId") as "existingPosts" FROM 
    "topicsPosts" JOIN topics ON "topicsPosts"."topicId"=topics.id GROUP BY
     ("topics"."id") ORDER BY "existingPosts" DESC LIMIT 10;    
    `);

    return topicResults
}

export async function findHashtagByName(topicName) {
    const { rows: topicResults } = await db.query(`
    SELECT "topics"."name" FROM "topics" WHERE "topics"."id" = $1;
    `, [topicName]);
    return topicResults
}


export async function findPostWithHashtag(topicId) {
    const { rows: postsResults } = await db.query(`
    SELECT posts.* FROM "topicsPosts" INNER JOIN "posts" ON "posts"."id" = "topicsPosts"."postId" WHERE "topicsPosts"."topicId" = $1;
   
    `, [topicId]);
    return postsResults
}

export async function createPostWithaHashtag(postId, topicId) {
    const { rows: newPost } = await db.query(`
    INSERT INTO "topicsPosts" ("postId", "topicId")
    VALUES ($1, $2)
    `, [postId, topicId]);
    return newPost
}

export async function createNewHashtag(topicName) {
    const { rows: newHashtag } = await db.query(`
    INSERT INTO topics (name)
    VALUES ($1) RETURNING id`, [topicName]);
    return newHashtag;
}