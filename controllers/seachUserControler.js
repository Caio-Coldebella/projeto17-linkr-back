import { seachNames } from "../repositories/seachUserRepository.js";

async function seachUser(req, res) {
  const { nameUser } = req.params;
  try {
    if (nameUser.length < 3) {
      return res.send([]);
    }
    const users = await seachNames(nameUser);
    
    return res.send(users.rows);
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
}

export default seachUser;
