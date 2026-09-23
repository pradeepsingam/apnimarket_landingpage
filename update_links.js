const fs = require('fs');
const files = ['index.html', 'contact.html', 'index_en.html', 'privacy.html'];

for (const file of files) {
    if (!fs.existsSync(file)) continue;
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace the specific footer link for Norwegian
    content = content.replace('<li><a href="#">Personvernerklæring</a></li>', '<li><a href="privacy.html">Personvernerklæring</a></li>');
    
    // Replace the specific footer link for English
    content = content.replace('<li><a href="#">Privacy Policy</a></li>', '<li><a href="privacy.html">Privacy Policy</a></li>');
    
    fs.writeFileSync(file, content, 'utf8');
}
console.log('Footer links updated.');
