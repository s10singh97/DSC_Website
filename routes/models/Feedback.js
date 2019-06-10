let mongoose = require('mongoose')
let Schema = mongoose.Schema

let FeedbackSchema = new Schema({
    name: String,
    email: String,
    message: String,
    date: {
        type: Date,
        default: Date.now(),
    },
})

module.exports = mongoose.model('Feedback', FeedbackSchema)