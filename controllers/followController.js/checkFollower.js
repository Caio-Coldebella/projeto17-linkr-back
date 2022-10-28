import { CheckFollowRepository } from "../../repositories/followsRepository.js";

async function GetCheckFollow(req, res) {
  const { userFollowerId } = req.params;
  const user = res.locals.user;
  try {
    if (userFollowerId === user[0].id) {
      return res.status(404).send("O usuário não pode seguir a si mesmo");
    }
    
    const follow = await CheckFollowRepository(user[0].id, userFollowerId);

    if (follow.rowCount > 0) {
        return res.send("Follow");
    }

    return res.send("Unfollow");
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export default GetCheckFollow;
