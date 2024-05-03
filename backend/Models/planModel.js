const { model, Schema } = require('../connection');

const mySchema = new Schema({
    title: String,
    pricing: String,
    numberOfWebsites: Number,
    storage: Number,
    storageType: String,
    wordpressAvailable: Boolean,
    firewall: String,
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
    uptimegurantee: String,
    description: String,
    image: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = model('plan', mySchema);