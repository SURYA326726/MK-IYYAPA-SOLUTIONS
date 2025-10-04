const express = require('express');
const app = express();

app.use(express.json());

const mongo = require('mongoose');
const DBconnection = require('./DBconnection/DBconfig');
DBconnection();

const productSchema = new mongo.Schema({
  ProductImage: String,
  productName: String,
  productDescription: String,
  productService: String,
});

const Product = mongo.model('Product', productSchema);

app.post('/products', async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.status(201).send({ status: 'success', data: savedProduct });
    console.log('Product added successfully');
  } catch (error) {
    console.log('product not added');
  }
});

app.get('/Products',async (req, res) => {
    res.status(200).json(await Product.find());
});

app.listen(3000, () => {
  console.log('Server is running');
});
