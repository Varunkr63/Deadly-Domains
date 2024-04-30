const { model, Schema, Types } = require('../connection');

const mySchema = new Schema({
    user: { type: Types.ObjectId, ref: 'user' },
    plan: { type: Types.ObjectId, ref: 'plan' },
    review: String,
    rating: Number,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = model('reviews', mySchema);