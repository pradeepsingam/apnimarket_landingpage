const fs = require('fs');

const files = ['index.html', 'contact.html', 'privacy.html'];

for (const file of files) {
    if (!fs.existsSync(file)) continue;
    let content = fs.readFileSync(file, 'utf8');

    // Handle multiline "Shop Online" in the header
    content = content.replace(/Shop\s+Online/g, 'Handle på nett');
    
    fs.writeFileSync(file, content, 'utf8');
}
console.log('Shop Online replaced with Handle på nett.');
