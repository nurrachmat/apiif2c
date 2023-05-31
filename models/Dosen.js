// (4) buat schema Dosen
const mongoose = require('mongoose')

const DosenSchema = mongoose.Schema({
    nama: {
        type: String,
        required: true
    },
    alamat: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Dosen', DosenSchema)