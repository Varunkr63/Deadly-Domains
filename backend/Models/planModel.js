const { model, Schema } = require('../connection');

const mySchema = new Schema({
    title: String,
    pricing: String,
    numberOfWebsites: Number,
    storage: Number,
    resources: String,
    domain: String,
    email: String,
    storageType: String,
    hostingType: String,
    firewall: String,
    offer: String,
    provider: String,
    backup: String,
    customersupport: String,
    features: Array,
    ddosProtection: String,
    malwareScanner: String,
    cdn: String,
    sslCertificate: String,
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