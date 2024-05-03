const {model, Schema} = require('../connection');

const mySchema = new Schema({
    name : String,
    password: String,
    email : String,
    avatar : {type : String, default : 'avatar_placeholder.png'},
    createddAt : {type : Date, default : Date.now}
});

module.exports = model('user', mySchema);