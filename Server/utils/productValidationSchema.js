export const productValidationSchema={
    productName:{
        notEmpty:{
            errorMessage:"Product name not be empty"
        }
    },
     productPrice:{
        notEmpty:{
            errorMessage:"Product price not be empty"
        }
    },
     productDescription:{
        notEmpty:{
            errorMessage:"Product describtion not be empty"
        }
    },
     productService:{
        notEmpty:{
            errorMessage:"Product service not be empty"
        }
    }
   
}