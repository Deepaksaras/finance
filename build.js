// Compiles Tailwind and inlines it into a single self-contained index.html
const { execSync } = require('child_process');
const fs = require('fs');
execSync('npx tailwindcss -c src/tailwind.config.js -i src/input.css -o src/out.css --minify', { stdio: 'inherit' });
const html = fs.readFileSync('src/index.src.html', 'utf8').replace('/*TAILWIND*/', () => fs.readFileSync('src/out.css', 'utf8'));
fs.writeFileSync('index.html', html);
console.log('Built index.html');
