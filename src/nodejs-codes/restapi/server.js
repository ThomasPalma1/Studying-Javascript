require('dotenv').config()
const express = require("express")
const app = express()
const mongoose = require("mongoose")

mongoose.connect(process.env.DATABASE_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('Banco de dados conectado!'))

app.use(express.json())


const subsRouter = require('./routes/subs')
app.use('/subs', subsRouter)

app.listen(3000, () => console.log('Servidor Rodando!'))