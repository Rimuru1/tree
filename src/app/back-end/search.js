var mongoose = require('mongoose');

var Schema = mongoose.Schema
const FeedbackSchema =  new Schema({
    //id: { type: String, required: true },
    price: { type: String},

})

var FeedbackModel = mongoose.modelNames('productTree', FeedbackSchema);
 module.exports = FeedbackModel;

