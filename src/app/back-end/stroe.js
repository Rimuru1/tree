var mongoose = require('mongoose');

var Schema = mongoose.Schema
const FeedbackSchema = new Schema({
    //id: { type: String, required: true },
    marketName: { type: String, required: true },
    address: { type: String, required: true }
    
    

})

var FeedbackModel = mongoose.model('stroe', FeedbackSchema);
module.exports = FeedbackModel;
