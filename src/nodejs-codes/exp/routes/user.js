const express = require('express')
const router = express.Router()

function logReq(req, res, next) {
    console.log("Executando Middleware para a rota usuários")
    return next()
}

router.get('/',logReq, (req, res) => {
    res.send('Listando os usuários')
})

router.get('/:id', (req, res) => {
    res.send('Listando usuário com o id:' + req.params.id)
})

module.exports = router