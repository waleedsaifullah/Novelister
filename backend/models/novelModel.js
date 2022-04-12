const mongoose = require('mongoose')

const novelSchema = mongoose.Schema(
    {
        name: { type: String, required: [true, 'Please add novel name'] },
        author: { type: String, required: [true, 'Please add author name'] },
        price: { type: Number, required: [true, 'Please add price name'] },
        quantity: { type: Number, required: [true, 'Please add quantity name'] },
        cover: { type: String, required: [true, 'Please add cover'] },
    },
    {
        timestamps:true
    }
)

module.exports = mongoose.model('Novel', novelSchema)