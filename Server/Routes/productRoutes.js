const {Router}=require('express');
const { getProducts,getIndividualProduct, addProduct,removeProduct } = require('../Controller/productController');
const {checkSchema}=require('express-validator');
const { productValidationSchema } = require('../utils/productValidationSchema');
const route=Router();


route.get('/products', getProducts);
route.get('/product/:name', getIndividualProduct);

route.post('/product',checkSchema(productValidationSchema), addProduct);

route.delete('/product/:name',removeProduct);

module.exports=route