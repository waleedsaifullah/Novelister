const asyncHandler = require('express-async-handler')

const Novel = require('../models/novelModel')

const getNovels = asyncHandler(async(req, res) => {
    const novels = await Novel.find()

    res.status(200).json(novels)
})

const setNovel = asyncHandler(async (req, res) => {
    if(!req.body.name){
        res.status(400)
        throw new Error('Please add name')
    }

    const novel = await Novel.create({
        name: req.body.name,
        author: req.body.author,
        price: req.body.price,
        quantity: req.body.quantity,
        cover: req.body.cover,
    })

    res.status(200).json(novel)
})

module.exports = {
    getNovels,
    setNovel
}