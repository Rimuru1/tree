var mongoose = require('mongoose');

var Schema = mongoose.Schema
const FeedbackSchema = new Schema({
    //id: { type: String, required: true },
    fnames: { type: String, required: true },
    lname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
    

})

var FeedbackModel = mongoose.model('members', FeedbackSchema);
module.exports = FeedbackModel;
