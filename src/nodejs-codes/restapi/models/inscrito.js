const mongoose = require('mongoose')

const inscritoSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    userChannel: {
        type: String,
        required: true
    },
    userDate: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('inscrito', inscritoSchema)