const fs = require('fs');

const files = ['index.html', 'privacy.html'];

const replacements = [
    { target: />Looking for Something Specific\?<\/h2>/g, replacement: '>Leter du etter noe spesielt?</h2>' },
    { target: />Tell us what you need\. If you cannot find a product in our store, we'll\s*do our best to source it for you\.<\/p>/g, replacement: '>Fortell oss hva du trenger. Finner du ikke et produkt i butikken vår, vil vi gjøre vårt beste for å skaffe det til deg.</p>' },
    { target: />A busy kitchen needs more than ingredients\. It needs packaging for the next\s*takeaway, drinks for the fridge, and supplies for the work behind the scenes\. Apni Market\s*brings these essentials together\.<\/p>/g, replacement: '>Et travelt kjøkken trenger mer enn bare ingredienser. Det trenger emballasje for neste takeaway, drikke til kjøleskapet og utstyr til arbeidet i kulissene. Apni Market samler disse nødvendighetene.</p>' },
    { target: />Contact Information<\/h4>/g, replacement: '>Kontaktinformasjon</h4>' },
    { target: /All rights reserved\./g, replacement: 'Med enerett.' },
    { target: /Powered by/g, replacement: 'Levert av' }
];

for (const file of files) {
    if (!fs.existsSync(file)) continue;
    let content = fs.readFileSync(file, 'utf8');
    
    for (const r of replacements) {
        content = content.replace(r.target, r.replacement);
    }
    
    fs.writeFileSync(file, content, 'utf8');
}

console.log('Footers translated in index.html and privacy.html.');
