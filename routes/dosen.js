const express = require('express')
const router = express.Router()
const Dosen = require('../models/Dosen')

// create api for dosen
router.post('/', async(req, res) => {
    // tampung dulu input mahasiswa
    const dosenPost = new Dosen({
        nama: req.body.nama,
        alamat: req.body.alamat,
    })

    // simpan data dengan try catch
    try {
        // simpan datanya
        const dosen = await dosenPost.save()
        // beri response
        res.json(dosen)
    } catch(error) {
        res.json({message: error})
    }
})

// Read
router.get('/', async(req, res) => {
    try {
        const dosen = await Dosen.find()
        res.json(dosen)
    } catch (error) {
        res.json({message: error})
    }
})

router.put('/:dosenId', async(req, res) => {
    const data = {
        nama: req.body.nama,
        alamat: req.body.alamat
    }

    try {
        const dosen = await Dosen.updateOne({_id: req.params.dosenId}, data)
        res.json(dosen)
    } catch(error) {
        res.json({message: error})
    }
})

router.delete('/:dosenId', async(req, res) => {
    try {
        const dosen = await Dosen.deleteOne({_id: req.params.dosenId})
        res.json(dosen)
    } catch (error) {
        res.json({message: error})
    }
})

module.exports = router