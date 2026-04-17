const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'scraper', 'data', 'tables'); // Adjust this if you have multiple category folders
const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');
const BASE_URL = 'https://thinkfurniture.co.uk';
const currentDate = new Date().toISOString().split('T')[0];

console.log('Generating dynamic Sitemap for all products...');

let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${BASE_URL}/</loc>
    <lastmod>${currentDate}</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${BASE_URL}/about-us</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${BASE_URL}/contact-us</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${BASE_URL}/categories/seating/task-seating</loc>
    <priority>0.9</priority>
  </url>
`;

// Read all JSON files
try {
  // We'll scan the multiple data category sub-folders if they exist.
  // For simplicity, let's scan all JSON files inside scraper/data/ (shallow and deep search)
  const getAllJsonFiles = (dirPath, arrayOfFiles) => {
    files = fs.readdirSync(dirPath)
    arrayOfFiles = arrayOfFiles || []

    files.forEach(function(file) {
      if (fs.statSync(dirPath + "/" + file).isDirectory()) {
        arrayOfFiles = getAllJsonFiles(dirPath + "/" + file, arrayOfFiles)
      } else {
        if(file.endsWith('.json')) {
            arrayOfFiles.push(path.join(dirPath, "/", file))
        }
      }
    })
    return arrayOfFiles
  }

  const allFiles = getAllJsonFiles(path.join(__dirname, 'scraper', 'data'), []);
  let productCount = 0;

  allFiles.forEach(file => {
    const rawdata = fs.readFileSync(file);
    const products = JSON.parse(rawdata);
    
    // Attempt to guess the 'category' / 'subcategory' from the filename
    const parts = file.split(path.sep);
    const parentFolder = parts[parts.length - 2]; 
    const fileName = parts[parts.length - 1].replace('_data.json', '');

    if (Array.isArray(products)) {
      products.forEach(product => {
        if (product.productId) {
          sitemapContent += `
  <url>
    <loc>${BASE_URL}/categories/${parentFolder}/${fileName}/${product.productId}</loc>
    <lastmod>${currentDate}</lastmod>
    <priority>0.7</priority>
  </url>`;
          productCount++;
        }
      });
    }
  });

  sitemapContent += `\n</urlset>`;

  fs.writeFileSync(sitemapPath, sitemapContent);
  console.log(`✅ Sitemap successfully generated! Added ${productCount} products.`);
  console.log(`Saved to: ${sitemapPath}`);

} catch (error) {
  console.error('Error generating sitemap:', error);
}
