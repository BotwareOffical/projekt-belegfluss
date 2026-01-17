import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container-narrow py-12 md:py-20">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Zurück zur Startseite
        </Link>

        <h1 className="heading-xl mb-8">Datenschutzerklärung</h1>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="heading-md mb-4">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-lg font-semibold text-foreground mb-2">Allgemeine Hinweise</h3>
            <div className="body-md">
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
                personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene 
                Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-md mb-4">2. Verantwortliche Stelle</h2>
            <div className="body-md space-y-1">
              <p className="font-semibold text-foreground">Nurturious Ltd</p>
              <p>128 City Road</p>
              <p>London EC1V 2NX</p>
              <p>United Kingdom</p>
              <p className="mt-4">
                E-Mail:{" "}
                <a href="mailto:contact@nurturious.com" className="text-primary hover:underline">
                  contact@nurturious.com
                </a>
              </p>
              <p>
                Telefon:{" "}
                <a href="tel:+4917621398420" className="text-primary hover:underline">
                  +49 176 21398420
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-md mb-4">3. Datenerfassung auf dieser Website</h2>
            <h3 className="text-lg font-semibold text-foreground mb-2">Cookies</h3>
            <div className="body-md">
              <p>
                Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Textdateien 
                und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für 
                die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem 
                Endgerät gespeichert.
              </p>
            </div>
            
            <h3 className="text-lg font-semibold text-foreground mb-2 mt-6">Server-Log-Dateien</h3>
            <div className="body-md">
              <p>
                Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten 
                Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Browsertyp und Browserversion</li>
                <li>verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="heading-md mb-4">4. Kontaktformular und Terminbuchung</h2>
            <div className="body-md">
              <p>
                Wenn Sie uns per Kontaktformular oder über unseren Terminbuchungsservice (Calendly) 
                Anfragen zukommen lassen, werden Ihre Angaben aus dem Formular inklusive der von Ihnen 
                dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von 
                Anschlussfragen bei uns gespeichert.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-md mb-4">5. Ihre Rechte</h2>
            <div className="body-md">
              <p>Sie haben jederzeit das Recht:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Auskunft über Ihre bei uns gespeicherten Daten zu erhalten</li>
                <li>Berichtigung unrichtiger Daten zu verlangen</li>
                <li>Löschung Ihrer Daten zu verlangen</li>
                <li>Einschränkung der Verarbeitung zu verlangen</li>
                <li>Widerspruch gegen die Verarbeitung einzulegen</li>
                <li>Datenübertragbarkeit zu verlangen</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="heading-md mb-4">6. Drittanbieter</h2>
            <h3 className="text-lg font-semibold text-foreground mb-2">Calendly</h3>
            <div className="body-md">
              <p>
                Wir nutzen Calendly für die Terminbuchung. Anbieter ist Calendly, LLC, 271 17th St NW, 
                Ste 1000, Atlanta, GA 30363, USA. Details zur Datenverarbeitung finden Sie in der 
                Datenschutzerklärung von Calendly:{" "}
                <a 
                  href="https://calendly.com/privacy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://calendly.com/privacy
                </a>
              </p>
            </div>

            <h3 className="text-lg font-semibold text-foreground mb-2 mt-6">YouTube</h3>
            <div className="body-md">
              <p>
                Wir binden Videos von YouTube ein. Anbieter ist die Google Ireland Limited, Gordon House, 
                Barrow Street, Dublin 4, Irland. Details zur Datenverarbeitung finden Sie in der 
                Datenschutzerklärung von Google:{" "}
                <a 
                  href="https://policies.google.com/privacy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://policies.google.com/privacy
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-md mb-4">7. Änderung dieser Datenschutzerklärung</h2>
            <div className="body-md">
              <p>
                Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den 
                aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen 
                in der Datenschutzerklärung umzusetzen.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;
