import { AddFollowerRepository } from "../../repositories/followsRepository.js";

async function AddFollower(req, res) {
  const { userFollowerId } = req.params;
  const user = res.locals.user;
  try {
    if (!userFollowerId) {
      return res.status(404).send("Usuário não existente!");
    }
    
    const follow = await AddFollowerRepository(user[0].id, userFollowerId);

    if (follow.rowCount > 0) {
      return res.send("Follow");
    }

    return res.sendStatus(404);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

export default AddFollower;
