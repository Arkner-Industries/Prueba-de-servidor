import mysql from "mysql2/promise"
import express from "express"
import { fileURLToPath } from "url"
import { dirname } from "path"
import hbs from "hbs"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
import { config } from "dotenv"
const ruta = `${__filename}/view`

const servidor = express
servidor.listen(4000)

servidor.use(express.static(ruta))
servidor.use(express.json())
servidor.set("view engine","hbs")
const router = express.Router()
hbs.registerPartials(`${__dirname}/views/partials`)

config()
try{
    const connection = await mysql.createConnection(
        `mysql://${procces.env.usuario}:${process.env.contra}@localhost:3306/${process.env.db}`
    );
    await connection.end();
}catch (err){
    console.log(err);
}

servidor.use(router)

export{
    router,
    ruta,
    servidor
}



