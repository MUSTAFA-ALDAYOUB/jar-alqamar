const fs = require('fs');

const path = 'd:/jar-alqamar-website/jar-alqamar/data/catalog.ts';
let content = fs.readFileSync(path, 'utf8');

// Update the type
content = content.replace('price?: number;', 'price?: string | number;');

// Regex to find all objects in the products array and add price if it doesn't exist
// Matches { id: "something", ... }
content = content.replace(/(\{ id: "[^"]+", name: "[^"]+", category: "[^"]+",) (image:)/g, '$1 price: "السعر لاحقاً", $2');

// Update UI component to render the price property properly
const uiPath = 'd:/jar-alqamar-website/jar-alqamar/components/ProductListClient.tsx';
let uiContent = fs.readFileSync(uiPath, 'utf8');
uiContent = uiContent.replace(
  '{typeof p.price === "number" ? `${p.price} ل.س` : "السعر لاحقاً"}',
  '{p.price !== undefined ? `${p.price} $` : "السعر لاحقاً $"}'
);
fs.writeFileSync(uiPath, uiContent);
fs.writeFileSync(path, content);
console.log("Done");
