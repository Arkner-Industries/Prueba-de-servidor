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

const servidor =  express()
servidor.listen(process.env.port)

servidor.use(express.static(ruta))
servidor.use(express.json())
servidor.set("view engine", "hbs")
hbs.registerPartials(`${__dirname}/views/partials`)

servidor.use(router)

export{
    ruta,
    servidor,
    router
}