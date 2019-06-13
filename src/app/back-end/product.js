var mongoose = require('mongoose');
var multer = require('./multer')

var Schema = mongoose.Schema
const FeedbackSchema = new Schema({
    //id: { type: String, required: true },
    productName: { type: String },
    type: { type: String},
    price: { type: String},
    image: { type: String},

})

var FeedbackModel = mongoose.model('productTree', FeedbackSchema);
module.exports = FeedbackModel;
