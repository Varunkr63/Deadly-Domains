const {model, Schema} = require('../connection');

const mySchema = new Schema({
   
    name : String,
    password: String,
    createddAt : Date,
    email : String,
   
});

module.exports = model('user', mySchema);