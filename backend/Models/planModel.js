const { model, Schema } = require('../connection');

const mySchema = new Schema({
    title: String,
    pricing: String,
    provider: String,
     
    backup: String,
    cloudhosting: String,
    managedhosting: String,
    customersupport: String,
    features: Array,
    ddosProtection: String,
    malwareScanner: String,
    freeCDN: String,
    unlimitedfreeSSL: String,
    GITaccess: String,
    
    uptimegurantee: String


});





module.exports = model('plan', mySchema);