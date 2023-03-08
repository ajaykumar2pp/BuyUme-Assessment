const productController = require("../app/controller/productController")
function initRoutes(app) {
    
    app.get('/', productController().user);

    //  POST  http://localhost:4000/create
    app.post('/create', productController().create);

}
module.exports = initRoutes

