const fs = require('fs');
const files = ['index.html', 'contact.html', 'index_en.html', 'privacy.html'];

for (const file of files) {
    if (!fs.existsSync(file)) continue;
    let content = fs.readFileSync(file, 'utf8');
    
    const startIndex = content.indexOf('<div class="ca-cta-area p-relative z-index-1">');
    const endIndex = content.indexOf('<div class="ca-footer-area">');
    
    if (startIndex !== -1 && endIndex !== -1) {
        content = content.substring(0, startIndex) + content.substring(endIndex);
        fs.writeFileSync(file, content, 'utf8');
        console.log('Removed from ' + file);
    }
}
