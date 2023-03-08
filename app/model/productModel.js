require('dotenv').config()
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
    {
        productId: { type: String, required: true },
        quantity: { type: Number, required: true },
        operation: { type: String, required: true }
       
    },
    { timestamps: true });
module.exports = mongoose.model('Products', productSchema);