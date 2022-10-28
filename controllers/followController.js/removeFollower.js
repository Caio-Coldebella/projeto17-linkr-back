import { RemoveFollowerRepository } from "../../repositories/followsRepository.js";

async function RemoveFollower(req, res) {
  const { userFollowerId } = req.params;
  const user = res.locals.user;
  try {
    if (!userFollowerId) {
      return res.status(404).send("Usuário não existente!");
    }

    const unfollow = await RemoveFollowerRepository(user[0].id, userFollowerId);

    if (unfollow.rowCount > 0) {
      return res.send("Unfollow");
    }

    return res.sendStatus(404);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

export default RemoveFollower;
