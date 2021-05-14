const express = require('express')
const app = express()
const adminRoutes = require('./routes/admin')
const usersRoutes = require('./routes/user')
const cookieParser = require('cookie-parser')

app.use(express.static('public'))

app.use(express.json())
app.use(cookieParser())

app.use((req, res, next) => {

    console.log("Executando Middleware em nível de aplicação")
    return next()
})

app.get('/setcookie', (req, res) => { //gravando um cookie
    res.cookie('user', 'Jatto', { maxAge: 900000, httpOnly: true })
    return res.send('Cookie foi gravado com sucesso!')
})

app.get('/getcookie', (req, res) => {
    let user = req.cookies['user']
    if (user) {
        return res.send(user)
    }
})


app.get('/', (req, res) => { //primeira rota raiz
    res.send('Hello World!')
})

app.use('/admin', adminRoutes) //caso alguém chame o /admin, chama o adminRoutes
app.use('/user', usersRoutes)


app.get('*', (req, res, next) => { //induzindo ao erro
    setImmediate(() => {
        next(new Error('Temos um problema! :('))
    })
})

//funções de erros sempre vem por ultimo
app.use((err, req, res, next) => { //função de middleware para  tratamento de erros
    console.log(err.stack) //mostrando o erro
    res.status(500).json({ message: err.message })
})




app.listen(3000, () => {
    console.log(`Server Running: http://localhost:3000`)
})