const {model, Schema} = require('../connection');

const mySchema = new Schema({
   
    firstname: String,
    lastname: String,
    createddAt : Date,
    email : String,
    number: Number,
    details: String
   
});

module.exports = model('contact', mySchema);