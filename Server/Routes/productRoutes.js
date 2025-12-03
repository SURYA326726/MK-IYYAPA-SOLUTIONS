const {Router}=require('express');
const { getProducts,getIndividualProduct, addProduct,removeProduct } = require('../Controller/productController');
const upload=require('../Middleware/FileHandler')
const {checkSchema}=require('express-validator');

const { productValidationSchema } = require('../utils/productValidationSchema');
const route=Router();


route.get('/products', getProducts);
route.get('/newQuote/:name', getIndividualProduct);

route.post('/product',upload.single("productImage"),checkSchema(productValidationSchema), addProduct);

route.delete('/product/:name',removeProduct);

module.exports=route