import mysql from "mysql2/promise"
import express from "express"
import hbs from "hbs"
import { fileURLToPath } from "url"
import { dirname } from "path"
import { config } from "dotenv"

config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const ruta = `${__dirname}/views`
const router = express.Router()


const servidor = express()
servidor.listen(4000)

servidor.use(express.static(ruta))
servidor.use(express.json())
servidor.set("view engine", "hbs")
hbs.registerPartials(`${__dirname}/views/partials`)



try{
    const connection = await mysql.createConnection(
        `mysql://${process.env.usuario}:${process.env.contra}@localhost:3306/${process.env.db}`
    );
    await connection.end();

}catch (err){
    console.log(err);
}

servidor.use(router)

export{
    servidor,
    ruta,
    router
}

