const fs = require('fs');

let contactHtml = fs.readFileSync('contact.html', 'utf8');

// Find the <main> and </main> tags
const mainStart = contactHtml.indexOf('<main>');
const mainEnd = contactHtml.indexOf('</main>') + '</main>'.length;

const headerPart = contactHtml.slice(0, mainStart);
const footerPart = contactHtml.slice(mainEnd);

// Modify header part for Privacy Policy
let newHeader = headerPart
    .replace('<title>Apni Market | Kontakt oss</title>', '<title>Apni Market | Personvernerklæring</title>')
    .replace('<link rel="canonical" href="https://apnimarket.no/contact.html" />', '<link rel="canonical" href="https://apnimarket.no/privacy.html" />')
    .replace(/<meta property="og:title" content="Apni Market \| Kontakt oss">/g, '<meta property="og:title" content="Apni Market | Personvernerklæring">')
    .replace(/<meta property="og:url" content="https:\/\/apnimarket\.no\/contact\.html">/g, '<meta property="og:url" content="https://apnimarket.no/privacy.html">')
    .replace(/<meta name="twitter:title" content="Apni Market \| Kontakt oss">/g, '<meta name="twitter:title" content="Apni Market | Personvernerklæring">');

const privacyContent = `
<main>
      <section class="ca-breadcrumb-area cream-bg-3 p-relative z-index-1 fix">
         <div class="ca-breadcrumb-shape p-absolute bre-sh-1">
            <img src="assets/img/shape/breadcrumn-shape.png" alt="">
         </div>
         <div class="ca-breadcrumb-shape p-absolute bre-sh-2">
            <img src="assets/img/shape/ca-line-shape.png" alt="">
         </div>
         <div class="container">
            <div class="ca-breadcrumb-content text-center">
               <h2 class="ca-breadcrumb-title fnw-600">Personvernerklæring</h2>
               <div class="it-breadcum-link">
                  <a href="index.html">Hjem</a>
                  <span><i class="fa-solid fa-angle-right"></i></span>
                  <a class="active" href="#">Personvernerklæring</a>
               </div>
            </div>
         </div>
      </section>
      <section class="ca-contact-inner pt-100 pb-100">
         <div class="container">
            <div class="row">
               <div class="col-xl-12">
                  <div class="privacy-content" style="max-width: 800px; margin: 0 auto;">
                     <p>Vi er opptatt av våre kunders personvern. Denne erklæringen beskriver hva vi gjør for å behandle dine personopplysninger på en sikker måte.</p>

<p>Netthandelen apnimarket.no eies og drives av Apnimarket AS, org.nr 915 665 608, Tvetenveien 154, 0671 Oslo.</p>

<p>Kontaktopplysninger: post@apnimarket.no eller telefon 22 01 23 45.</p>

<p>For personopplysninger har Apnimarket AS, ved daglig leder, rollen som behandlingsansvarlig etter personopplysningsloven.</p>

<h4 class="pb-16 pt-32">Hvilke personopplysninger samles inn</h4>
<p>Apnimarket selger kun til bedriftskunder. Når en kundekonto opprettes av en bedriftskontakt med fullmakt, registreres bedriftskontaktens personopplysninger som navn, e-post og telefonnummer, samt eventuelle samtykker til markedskommunikasjon rettet til bedriften. Når kjøp betales med kort behandles kredittkortopplysninger for å kunne verifisere betalingen. Kredittkortopplysningene oppbevares hos vår leverandør og er underlagt deres retningslinjer for personvern. Kredittkortopplysninger kan lagres for å kunne gjennomføre senere kjøp raskere dersom bedriftskontakten ønsker.</p>

<h4 class="pb-16 pt-32">Hva brukes personopplysningene til</h4>
<p>Formålet med innsamlingen er å kunne gjennomføre en avtale om kjøp, betaling og levering, og for å kunne kommunisere på sms og e-post om leveranser, avvik og driftsmeldinger som for eksempel endrede åpningstider. Personopplysninger kan også bli brukt for å utvikle tjenesten videre for eksempel gjennom testing i andre miljøer.</p>

<p>Apnimarket har et eget saksbehandlingssystem for dialog med kundene. Her lagres opplysninger som navn, epost og telefon, samt annen relevant informasjon som fremgår av henvendelsen.</p>

<p>Når Apnimarket skal yte kundeservice kan ansatte hos Apnimarket, dersom kunden ønsker det, få tilgang til kundens kundekonto. Ansatte hos Apnimarket kan også logge seg på kundens kundekonto for å gjennomføre en avtale om kjøp, og for å innhente informasjon som er nødvendig for å utvikle tjenesten videre for kunden.</p>

<p>Registrering, lagring og oppbevaring skjer i henhold til arkivlovgivningen.</p>

<p>Vi tilbyr alle våre kunder å motta meldinger med forslag, tips, tilbud og overraskelser gjennom markedskommunikasjon på e-post. Dette kan man samtykke til ved registrering eller på min side. Samtykket kan når som helst trekkes tilbake. Samtykker kan vedlikeholdes på min side.</p>

<h4 class="pb-16 pt-32">Sletting</h4>
<p>Dersom du avslutter ditt kundeforhold, slettes alle opplysninger om deg utover de opplysninger som bokføringsloven krever lagret. Dersom ditt kundeforhold har vært passivt i fem år, slettes basis personopplysninger. Når bokføringslovens krav til lagring har utløpt slettes alle opplysninger. Ved endring i bedriftskontakt slettes de forrige kontaktopplysningene og eventuelle lagrede kredittkortopplysninger.</p>

<h4 class="pb-16 pt-32">Utlevering av personopplysninger og databehandlere</h4>
<p>Apnimarket utleverer personopplysninger til enkelte leverandører og benytter flere databehandlere for å behandle personopplysninger i henhold til de formål som er beskrevet over. Apnimarket har inngått utleveringsavtaler og databehandleravtaler med disse i tråd med gjeldende personopplysningslovgivning.</p>

<h4 class="pb-16 pt-32">Endringer</h4>
<p>Apnimarket kan endre vilkår og personvernerklæring for å følge nye rettslige krav, eller på grunn av endringer i vår egen praksis for innsamling og behandling av personopplysninger. Ved endringer som krever samtykke vil du bli bedt om å samtykke til nye vilkår når du logger på Apnimarket.no. Informasjon om andre endringer vil bli gitt på Apnimarket.no.</p>

<h4 class="pb-16 pt-32">Dine rettigheter</h4>
<p>I henhold til gjeldende personopplysningslovgivning har du blant annet rett til innsyn i egne personopplysninger, samt rett til å stille krav om retting eller sletting av mangelfulle eller uriktige opplysninger om deg. Bedriftskontakten kan selv endre egne personopplysninger og eventuelle samtykker til markedsføring som innlogget på bedriftskontoen.</p>

<p>Har du spørsmål om hvordan vi behandler personopplysninger kan du sende oss en epost til <a href="mailto:post@apnimarket.no">post@apnimarket.no</a> eller ringe oss på <a href="tel:+4722012345">22 01 23 45</a>. Du kan også stille spørsmål om personvern til Datatilsynet: e-post: postkasse@datatilsynet.no, telefon: 22 39 69 00.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
</main>
`;

let privacyHtml = newHeader + privacyContent + footerPart;
fs.writeFileSync('privacy.html', privacyHtml, 'utf8');
console.log('privacy.html created.');
