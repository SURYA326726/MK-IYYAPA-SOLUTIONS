const fs = require('fs');
const path = require('path');

const productsDir = path.join(__dirname, 'public', 'PRODUCTS');
const outputDir = path.join(__dirname, 'src', 'assets');
const outputFile = path.join(outputDir, 'products.json');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function getProducts() {
  const products = [];
  
  if (!fs.existsSync(productsDir)) {
    console.error(`Folder not found: ${productsDir}`);
    return [];
  }

  const categories = fs.readdirSync(productsDir, { withFileTypes: true });

  categories.forEach(category => {
    if (category.isDirectory()) {
      const categoryPath = path.join(productsDir, category.name);
      const files = fs.readdirSync(categoryPath);

      files.forEach(file => {
        const ext = path.extname(file).toLowerCase();
        if (['.png', '.jpg', '.jpeg', '.webp', '.svg'].includes(ext)) {
          // Construct product object based on file name and folder
          // Using file name (without extension) as product name for now
          const productName = path.parse(file).name;
          
          products.push({
            productName: productName,
            productImage: `${category.name}/${file}`, // Relative path for <img src="PRODUCTS/...">
            productPrice: '0', // Default or could be parsed if encoded in filename
            productDescription: `${productName}.`,
            productService: category.name // Using folder name as category/service
          });
        }
      });
    }
  });

  return products;
}

const productList = getProducts();
const jsonContent = JSON.stringify(productList, null, 2);

fs.writeFileSync(outputFile, jsonContent);

console.log(`Successfully generated ${productList.length} products to ${outputFile}`);
