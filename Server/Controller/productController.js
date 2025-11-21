const Product=require('../Model/ProductModel')
const {validationResult} =require('express-validator')


 const getProducts=async (req, res) => {
  try{
 const productList=await Product.find();
  res.status(200).json({status:'success',data:productList});
  }
  catch(error){
      res.status(400).json({status:'failed',error});
  }
 
}
 const getIndividualProduct=async (req, res) => {
  try{
    const name=req.params.name;
 const singleProduct=await Product.findOne({productName:name});
 console.log(name+" of the product is selected")
  res.status(200).json({status:'success',data:singleProduct});
  }
  catch(error){
      res.status(400).json({status:'failed',error});
  }
 
}


 const addProduct=async (req, res) => {
  try {
    const validateResult=validationResult(req);
    if(!validateResult.isEmpty()){
      console.log('Product is not added');
      return res.status(400).send({status:'failed',result:validateResult.array()})
    }

    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.status(201).json({ status: 'success', data: savedProduct });
    console.log('Product added successfully');
  } catch (error) {
     res.status(400).json({status:'failed',error});
  }
}

const removeProduct=async (req,res)=>{
    try{
      const name=req.params.name;
      const deletedProduct=await Product.findOneAndDelete({productName:name});
       if (!deletedProduct) {
      return res.status(404).json({ status: 'failed', message: 'Product not found' });
    }

    res.status(200).json({ status: 'success', message: 'Product deleted' });
    }catch(error){
 res.status(400).json({status:'failed',error});
    }
}

module.exports={getProducts,getIndividualProduct,addProduct,removeProduct}


