const {model, Schema} = require('../connection');

const mySchema = new Schema({
   
    fullname: String,
    email : String,
    Comment: String,
   
});

module.exports = model('feedback', mySchema);