
const mongoose = require("mongoose");
const { Schema } = mongoose;

const wordSchema = new Schema({
    term: {
        type: String,
        required: true,
        unique: true
    }
},
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    });

module.exports = mongoose.model('Word', wordSchema);