const fs = require('fs');

let content = fs.readFileSync('privacy.html', 'utf8');

const replacements = [
    { target: />Home<\/a>/g, replacement: '>Hjem</a>' },
    { target: />About Us<\/a>/g, replacement: '>Om oss</a>' },
    { target: />Contact Us<\/a>/g, replacement: '>Kontakt oss</a>' },
    { target: />Contact Info<\/h3>/g, replacement: '>Kontaktinfo</h3>' },
    { target: />Follow Us<\/h3>/g, replacement: '>Følg oss</h3>' },
    { target: />Privacy Policy<\/a>/g, replacement: '>Personvernerklæring</a>' }
];

for (const r of replacements) {
    content = content.replace(r.target, r.replacement);
}

fs.writeFileSync('privacy.html', content, 'utf8');
console.log('privacy.html translated.');
