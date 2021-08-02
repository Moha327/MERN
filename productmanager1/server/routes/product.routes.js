const productController = require('../controllers/product.controller');
module.exports = function(app){
    app.get('/api', productController.index);
    app.get('/api/products', productController.getAllProducts);
    app.get('/api/products/:id', productController.getProduct);
    app.post('/api/createProduct', productController.createproduct);
    app.put('/api/updateproduct/:id', productController.updateProduct);
    app.delete('/api/deleteproduct/:id', productController.deleteProduct);
}