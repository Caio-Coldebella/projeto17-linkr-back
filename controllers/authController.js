import db from "../database/database.js";
import bcrypt from 'bcrypt';
import {v4 as uuid} from 'uuid';
import dotenv from 'dotenv';

dotenv.config();


async function signUp (req, res) {
    const { email, password, username, pictureUrl } = req.body;

    const passwordHash = bcrypt.hashSync(password, 10)

    try {
        const isValid = (await db.query(`SELECT * FROM users WHERE email = '${email}';`)).rows
        
        if ( isValid.length === 0) {
             db.query('INSERT INTO users (email, password, username, "pictureUrl") VALUES ($1, $2, $3, $4 );', [email, passwordHash, username, pictureUrl])
       
            res.status(201).send("ok")
        } else {
            res.status(409).send("Usuário já cadastrado!")
        }
    } catch (error) {
        res.status(422).send("Unprocessable Entity")
    }
}

async function signIn(req, res) {
    const {email, password} = req.body;
    
    try {

        const isValid = (await db.query(`SELECT * FROM users WHERE email = '${email}';`)).rows[0]

        const passwordIsValid = bcrypt.compareSync(password, isValid.password)

        if ( isValid && passwordIsValid ) {
            const token = uuid();

            let verify = (await db.query(`SELECT * FROM sessions WHERE "userId" = ${isValid.id};`)).rows;

            if (verify.length === 0) {
                await db.query(`INSERT INTO sessions ("userId", token) VALUES (${isValid.id}, '${token}');`)
            } else {
                await db.query(`DELETE FROM sessions WHERE "userId" = ${isValid.id}`)

                await db.query(`INSERT INTO sessions ("userId", token) VALUES (${isValid.id}, '${token}');`)
            }

            res.status(200).send(token)
        } else {
            res.status(401).send("E-mail ou senha incorretos!")
        }
    } catch (error) {
        
        res.status(422).send("Unprocessable Entity")
        
    }
}

export {signUp, signIn};