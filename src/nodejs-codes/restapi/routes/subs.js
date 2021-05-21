const express = require('express')
const inscrito = require('../models/inscrito')
const router = express.Router()
const Inscrito = require('../models/inscrito')

router.get('/', async(req, res) => {
     try {
         const inscritos = await Inscrito.find()
         res.json(inscritos)
     } catch (error) {
         res.status(500).json({message: error.message})
     } 
})

router.get('/:id', getSubs, (req, res) => {
    res.json(res.inscritoss)
})

router.post('/', async (req, res) => {
    const inscrito = new Inscrito({
        userName: req.body.userName,
        userChannel: req.body.userChannel
    })
    try {
        const novoInscrito = await inscrito.save()
        res.status(201).json(novoInscrito)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

router.patch('/:id', getSubs, (req, res) => {

})

router.delete('/:id', getSubs, async (req, res) => {
    try {
        await res.inscritoss.remove()
        res.json({message: 'Inscrito deletado!'})
    } catch (error) {
        res.status (500).json({message: error.message})
    }

})

async function getSubs (req, res, next){
    try {
        inscritoss = await Inscrito.findById(req.params.id)
        if(inscritoss == null){
            return res.status(404).json({message: 'Não conseguimos encontrar!'})
        }
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
    res.inscritoss = inscritoss
    next()
}


module.exports = router