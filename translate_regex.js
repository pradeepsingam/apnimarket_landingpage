const fs = require('fs');

let content = fs.readFileSync('index.html', 'utf8');

const replacements = {
    "APNI MARKET — FOOD & BUSINESS ESSENTIALS": "APNI MARKET — MAT & NÆRINGSMIDLER",
    "Stock Your Kitchen. Keep Business Moving.": "Fyll opp kjøkkenet. Hold bedriften i gang.",
    "Shop food, drinks, packaging, and everyday supplies for your restaurant,<br> takeaway, or commercial kitchen—all in one place.": "Kjøp mat, drikke, emballasje og dagligvarer til din restaurant,<br> takeaway eller storkjøkken—alt på ett sted.",
    "Shop Now": "Kjøp nå",
    "FROM PREPARATION TO TAKEAWAY": "FRA FORBEREDELSE TIL TAKEAWAY",
    "Great Food Starts With the Right Supplies.": "God mat starter med de riktige råvarene.",
    "From kitchen ingredients to takeaway packaging, find the essentials<br> you need to prepare, serve, and send out every order.": "Fra ingredienser til takeaway-emballasje, finn det du trenger<br> for å forberede, servere og sende ut hver bestilling.",
    "Browse Products": "Se produkter",
    "MAKE YOUR NEXT STOCK-UP COUNT": "GJØR DITT NESTE INNKJØP LØNNSOMT",
    "Everyday Essentials. More Value for Your Business.": "Hverdagslige nødvendigheter. Mer verdi for din bedrift.",
    "Explore current offers and discover products for your next order.<br> Keep your shelves stocked and your menu ready.": "Utforsk aktuelle tilbud og oppdag produkter for din neste bestilling.<br> Hold hyllene fylt og menyen klar.",
    "Explore Offers": "Utforsk tilbud",
    "Shop All Products": "Kjøp alle produkter",
    "Your Kitchen Has a Lot to Do. <br> Make Shopping Simpler.": "Kjøkkenet ditt har mye å gjøre. <br> Gjør innkjøpene enklere.",
    "A busy kitchen needs more than ingredients. It needs packaging for the next<br> takeaway, drinks for the fridge, and supplies for the work behind the scenes.<br> Apni Market brings these essentials together, helping you organise your purchasing around the way your business works.": "Et travelt kjøkken trenger mer enn ingredienser. Det trenger emballasje til neste<br> takeaway, drikke i kjøleskapet og utstyr til arbeidet bak kulissene.<br> Apni Market samler disse nødvendighetene, og hjelper deg å organisere innkjøpene etter hvordan bedriften din fungerer.",
    "Tell us what you need. If you cannot find a product in our store, we'll do our best to source it for you.": "Fortell oss hva du trenger. Finner du ikke et produkt i butikken vår, vil vi gjøre vårt beste for å skaffe det for deg.",
    "Your Business. Our Everyday Essentials.": "Din bedrift. Våre hverdagslige nødvendigheter.",
    "From restaurants and fast-food outlets to hotels and canteens, Apni Market brings together food, drinks, packaging, and everyday supplies to keep your business running.": "Fra restauranter og gatekjøkken til hoteller og kantiner; Apni Market samler mat, drikke, emballasje og dagligvarer for å holde bedriften din i gang.",
    "From kitchen preparation to the final plate, find ingredients, drinks, and everyday essentials for your restaurant. Bring your purchasing together so your team can focus on preparing great food and looking after guests.": "Fra forberedelse på kjøkkenet til den ferdige tallerkenen, finn ingredienser, drikke og daglige nødvendigheter til restauranten din. Samle innkjøpene dine slik at teamet kan fokusere på å lage god mat og ta vare på gjestene.",
    "Keep your kitchen ready for the next order with ingredients, sauces, drinks, and takeaway packaging. Find the everyday supplies you need to prepare, pack, and serve throughout a busy service.": "Hold kjøkkenet klart for neste bestilling med ingredienser, sauser, drikke og takeaway-emballasje. Finn utstyret du trenger for å forberede, pakke og servere gjennom en travel arbeidsdag.",
    "Support breakfast service, restaurant dining, and daily hospitality needs with food, beverages, and practical supplies. Bring essentials together in one place to simplify purchasing for your team.": "Støtt frokostservering, restaurantmiddager og daglige gjestebehov med mat, drikke og praktiske forsyninger. Samle alt på ett sted for å forenkle innkjøp for teamet ditt.",
    "Prepare for daily meal service with cooking ingredients, drinks, and serving essentials. Stock your workplace or institutional kitchen with supplies that help your team plan, prepare, and serve meals efficiently.": "Forbered deg på daglig måltidsservering med ingredienser, drikke og serveringsutstyr. Fyll opp din kantine eller storkjøkken med utstyr som hjelper teamet å planlegge, forberede og servere måltider effektivt.",
    "What's on Your Next Order?": "Hva står på din neste bestilling?",
    "Start with the products that suit your menu and build your basket<br>around your kitchen's needs.": "Start med produktene som passer til menyen din og bygg opp handlekurven<br>rundt kjøkkenets behov.",
    "Find your essentials and put together an order that works<br> for your business.": "Finn det du trenger og sett sammen en bestilling som fungerer<br> for din bedrift.",
    "01 — Browse the Range": "01 — Bla gjennom utvalget",
    "Explore categories or search for<br>a specific product.": "Utforsk kategorier eller søk etter<br>et spesifikt produkt.",
    "02 — Choose Your Products": "02 — Velg dine produkter",
    "Check pack sizes and product<br>details, then select your quantities.": "Sjekk pakkestørrelser og produktdetaljer,<br>velg deretter antall.",
    "03 — Review Your Basket": "03 — Se over handlekurven",
    "Check your items and make any<br>final changes before checkout.": "Kontroller varene dine og gjør eventuelle<br>siste endringer før kassen.",
    "04 — Place Your Order": "04 — Fullfør bestilling",
    "Follow the checkout steps to<br>complete your purchase.": "Følg stegene i kassen for å<br>fullføre kjøpet ditt.",
    "Can't Find What You Need?": "Finner du ikke det du trenger?",
    "Looking for a particular ingredient, pack size, or business supply?<br>Send us the details so we can look into it.": "Leter du etter en bestemt ingrediens, pakkestørrelse eller utstyr?<br>Send oss detaljene så vi kan se på det.",
    "Ask about an item before adding it<br> to your order. We're happy to help<br> with any product questions you<br> might have.": "Spør om en vare før du legger den<br> til i bestillingen. Vi hjelper deg gjerne<br> med spørsmål om produkter du<br> måtte ha.",
    "Tell us about a product you would<br> like us to source. We will do our<br> best to find it and add it<br> to our range.": "Fortell oss om et produkt du vil<br> at vi skal skaffe. Vi vil gjøre vårt<br> beste for å finne det og legge det til<br> i sortimentet vårt.",
    "Get in touch with a question about<br> your purchase. We are here to<br> help resolve any issues<br> quickly.": "Ta kontakt med spørsmål om<br> kjøpet ditt. Vi er her for å<br> hjelpe deg med å løse eventuelle problemer<br> raskt.",
    "Read about how our tailored solutions have helped businesses achieve.": "Les om hvordan våre skreddersydde løsninger har hjulpet bedrifter med å lykkes.",
    "Our clients' satisfaction is our top priority,<br> and their feedback speaks volumes about our dedication to excellence. We take immense <br> pride in the positive experiences shared by businesses across various industries who rely <br> on our transport and logistics expertise.": "Våre kunders tilfredshet er vår høyeste prioritet,<br> og deres tilbakemeldinger sier mye om vår dedikasjon til fortreffelighet. Vi er enormt <br> stolte over de positive opplevelsene som deles av bedrifter på tvers av ulike bransjer som stoler <br> på vår ekspertise."
};

for (const [oldText, newText] of Object.entries(replacements)) {
    // Escape special regex chars in oldText
    let regexStr = oldText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    // Replace spaces and <br> with a regex that matches any whitespace and <br> tags, including newlines
    regexStr = regexStr.replace(/(?:<br>\s*|\s+)/g, '(?:\\s*<br>\\s*|\\s+)');
    
    // We want to preserve the original whitespace when replacing, but it's hard with regex to dynamically inject it,
    // so we'll just replace with newText, possibly re-introducing newlines where they might look good, 
    // but standard HTML doesn't care about spaces/newlines.
    // However, if there was a <br>, newText should have it too.
    
    const regex = new RegExp(regexStr, 'gi');
    content = content.replace(regex, newText);
}

fs.writeFileSync('index.html', content, 'utf8');
console.log('Translation via regex complete');
