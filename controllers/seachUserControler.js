import { seachNames } from "../repositories/seachUserRepository.js";

async function seachUser(req, res) {
  const { nameUser } = req.params;

  if (nameUser.length < 3) {
    return res.status(404).send("Digite pelo menos 3 letras.");
  }
  try {
    const users = await seachNames(nameUser);

    if(users.rowCount === 0){
        return res.status(404).send("Nenhum usuário encontrado!");
    }
    
    return res.send(users.rows);
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
}

export default seachUser;
