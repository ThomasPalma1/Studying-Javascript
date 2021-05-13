const express = require('express')
const app = express()
const adminRoutes = require ('./routes/admin')
const usersRoutes = require ('./routes/user')

app.use(express.json())
app.get('/', (req, res) => { //primeira rota raiz
    res.send('Hello World!')
})

app.use('/admin', adminRoutes) //caso alguém chame o /admin, chama o adminRoutes
app.use('/user', usersRoutes) 
app.listen(3000, () => {
    console.log(`Server Running: http://localhost:3000`)
})