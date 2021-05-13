const express = require('express')
const router = express.Router()

router.get('/', (req, res) => { //segunda rota
    res.send('Entrando na administração!')
})

router.get('/:id', (req, res) => { //passar parâmetro no admin (utilizando o :id)
    res.send('Entrando na administração com o id:' + req.params.id) //capturar o id com o request
})

router.post('/', (req, res) => { //acessando via post
    const corpo = `Login: ${req.body.login}\n Senha: ${req.body.senha}`
    res.send('Entrando na administração via POST!\n' + corpo)
})

router.patch('/:id', (req, res) => {
    res.send('Entrando na administração via PATCH!')
})

router.put('/:id', (req, res) => {
    res.send('Entrando na administração via PUT!')
})

router.delete('/:id', (req, res) => {
    res.send('Entrando na administração via DELETE!')
})

module.exports = router