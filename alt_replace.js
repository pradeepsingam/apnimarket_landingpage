const fs = require('fs');

let content = fs.readFileSync('index.html', 'utf8');

const replacements = [
    { target: '<img src="assets/img/slider/hero1.webp" alt="">', replacement: '<img src="assets/img/slider/hero1.webp" alt="Storkjøkken med ferske råvarer">' },
    { target: '<img src="assets/img/slider/hero2.webp" alt="">', replacement: '<img src="assets/img/slider/hero2.webp" alt="Mat og produkter for tilberedning">' },
    { target: '<img src="assets/img/slider/hero3.webp" alt="">', replacement: '<img src="assets/img/slider/hero3.webp" alt="Drikke og kjølevarer i storkjøkken">' },
    { target: '<img class="w-100 lar-img-1" src="assets/img/about/about-1.jpg" alt="">', replacement: '<img class="w-100 lar-img-1" src="assets/img/about/about-1.jpg" alt="Mat og produkter for tilberedning">' },
    { target: '<img class="w-100 sm-img-1" src="assets/img/about/about-2.jpg" alt="">', replacement: '<img class="w-100 sm-img-1" src="assets/img/about/about-2.jpg" alt="Emballasje og serveringsutstyr">' },
    { target: '<img class="w-100 sm-img-2" src="assets/img/about/about-3.jpg" alt="">', replacement: '<img class="w-100 sm-img-2" src="assets/img/about/about-3.jpg" alt="Drikke og kjølevarer">' },
    { target: '<img class="w-100 lar-img-2" src="assets/img/about/about-4.png" alt="">', replacement: '<img class="w-100 lar-img-2" src="assets/img/about/about-4.png" alt="Praktisk netthandel">' },
    { target: '<img class="expand-slide-img" src="assets/img/service/gallery1.webp" alt="">', replacement: '<img class="expand-slide-img" src="assets/img/service/gallery1.webp" alt="Matlaging i restaurant">' },
    { target: '<img class="expand-slide-img" src="assets/img/service/gallery2.webp" alt="">', replacement: '<img class="expand-slide-img" src="assets/img/service/gallery2.webp" alt="Gatekjøkken og hurtigmat">' },
    { target: '<img class="expand-slide-img" src="assets/img/service/gallery3.webp" alt="">', replacement: '<img class="expand-slide-img" src="assets/img/service/gallery3.webp" alt="Hoteller og overnatting">' },
    { target: '<img class="expand-slide-img" src="assets/img/service/gallery4.webp" alt="">', replacement: '<img class="expand-slide-img" src="assets/img/service/gallery4.webp" alt="Kantiner og storkjøkken">' }
];

for (const r of replacements) {
    content = content.replace(r.target, r.replacement);
}

fs.writeFileSync('index.html', content, 'utf8');
console.log('Alt replacements complete.');
