import express from 'express'
import 'dotenv/config'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import loginRouter from "./app/route/Login.js"
import productRoute from "./app/route/productRoute"

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(cors())
app.use(morgan('common'))
app.use(express.json()); // Middleware xử lý body dạng JSON
app.use(express.urlencoded({ extended: true }));// Middleware xử lý body dạng x-www-form-urlencoded


loginRouter(app)
productRoute(app)
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})