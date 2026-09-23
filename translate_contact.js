const fs = require('fs');

let content = fs.readFileSync('contact.html', 'utf8');

const replacements = [
    { target: />Home<\/a>/g, replacement: '>Hjem</a>' },
    { target: />About Us<\/a>/g, replacement: '>Om oss</a>' },
    { target: />Contact Us<\/a>/g, replacement: '>Kontakt oss</a>' },
    { target: />Contact Info<\/h3>/g, replacement: '>Kontaktinfo</h3>' },
    { target: />Contact Us <\/h2>/g, replacement: '>Kontakt oss </h2>' },
    { target: />Contact Us <\/a>/g, replacement: '>Kontakt oss </a>' },
    { target: />Visit Us<\/h4>/g, replacement: '>Besøk oss</h4>' },
    { target: />Call Us<\/h4>/g, replacement: '>Ring oss</h4>' },
    { target: />Email Us<\/h4>/g, replacement: '>Send oss e-post</h4>' },
    { target: />Send Us A Message<\/h2>/g, replacement: '>Send oss en melding</h2>' },
    { target: /placeholder="Your Name"/g, replacement: 'placeholder="Ditt navn"' },
    { target: /placeholder="Your Email"/g, replacement: 'placeholder="Din e-post"' },
    { target: /placeholder="Phone"/g, replacement: 'placeholder="Telefon"' },
    { target: /placeholder="Subject"/g, replacement: 'placeholder="Emne"' },
    { target: /placeholder="Write Message..."/g, replacement: 'placeholder="Skriv din melding..."' },
    { target: />Save the information's in this browser for next time use<\/label>/g, replacement: '>Lagre informasjonen i denne nettleseren for neste gang</label>' },
    { target: /> Submit Now <span>/g, replacement: '> Send inn <span>' },
    { target: />Looking for Something Specific\?<\/h2>/g, replacement: '>Leter du etter noe spesielt?</h2>' },
    { target: />Tell us what you need\. If you cannot find a product in our store, we'll\s*do our best to source it for you\.<\/p>/g, replacement: '>Fortell oss hva du trenger. Finner du ikke et produkt i butikken vår, vil vi gjøre vårt beste for å skaffe det til deg.</p>' },
    { target: />A busy kitchen needs more than ingredients\. It needs packaging for the next\s*takeaway, drinks for the fridge, and supplies for the work behind the scenes\. Apni Market\s*brings these essentials together\.<\/p>/g, replacement: '>Et travelt kjøkken trenger mer enn bare ingredienser. Det trenger emballasje for neste takeaway, drikke til kjøleskapet og utstyr til arbeidet i kulissene. Apni Market samler disse nødvendighetene.</p>' },
    { target: />Contact Information<\/h4>/g, replacement: '>Kontaktinformasjon</h4>' },
    { target: /All rights reserved\./g, replacement: 'Med enerett.' },
    { target: /Powered by/g, replacement: 'Levert av' },
    { target: />Follow Us<\/h3>/g, replacement: '>Følg oss</h3>' }
];

for (const r of replacements) {
    content = content.replace(r.target, r.replacement);
}

fs.writeFileSync('contact.html', content, 'utf8');
console.log('contact.html translated.');
