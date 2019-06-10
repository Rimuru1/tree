var mongoose = require('mongoose');

var Schema = mongoose.Schema
const FeedbackSchema = new Schema({
    //id: { type: String, required: true },
    productName: { type: String, required: true },
    type: { type: String, required: true },
    price: { type: String, required: true },
    sector: { type: String, required: true },
    province: { type: String, required: true }
    

})

var FeedbackModel = mongoose.model('productTree', FeedbackSchema);
module.exports = FeedbackModel;
