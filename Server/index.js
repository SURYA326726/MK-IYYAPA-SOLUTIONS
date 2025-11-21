const express = require('express');
const cors=require('cors');
const app = express();
const DBconnection=require('./DBconnection/DBconfig')
const productRouter=require('./Routes/productRoutes')

app.use(cors());
app.use(express.json());
app.use(productRouter)


app.listen(3000, () => {
  console.log('Server is running');
});
require('./DBconnection/DBconfig');
DBconnection();


