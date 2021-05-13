const express = require('express')
const router = express.Router()

router.get('/', (req, res) => { 
    res.send('Listando os usuários')
})

router.get('/:id', (req, res) => { 
    res.send('Listando usuário com o id:' + req.params.id)
})

module.exports = router