import db from "../database/database.js";

async function CheckFollowRepository(userId, userFollowerId) {
  return db.query(
    `SELECT * FROM follows WHERE "userId" = $1 AND "followerId" = $2`,
    [userId, userFollowerId]
  );
}

async function RemoveFollowerRepository(userId, userFollowerId) {
  return db.query(
    `DELETE FROM follows WHERE "userId" = $1 AND "followerId" = $2`,
    [userId, userFollowerId]
  );
}

async function AddFollowerRepository(userId, userFollowerId) {
  return db.query(
    `INSERT INTO follows("userId", "followerId" ) VALUES ( $1, $2 )`,
    [userId, userFollowerId]
  );
}

export {
  CheckFollowRepository,
  RemoveFollowerRepository,
  AddFollowerRepository,
};
