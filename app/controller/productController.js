
const Product = require('../model/productModel')

function productController() {
    return {
        // ************************ data Get************************************//
        user(req, resp) {
            resp.render('home')
        },

        // ****************************  Product Create ******************************//

        async create(req, resp) {

            const { productId,quantity,operation } = req.body;
        console.log( productId,quantity,operation)
            let document;
            try {
                document = await Product.create({
                    productId,
                    quantity,
                    operation

                });
                resp.status(201).json({ 'data': { product: document } });
                document.save();
            } catch (err) {
                resp.status(500).json(err);
            }



        },

    }
}
module.exports = productController

