const mongoose = require('mongoose')

const NewsSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    subTitle: {
        type: String,
        require: true
    },
    writer: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model("News", NewsSchema)