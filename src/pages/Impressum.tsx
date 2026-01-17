import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Impressum = () => {
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

        <h1 className="heading-xl mb-8">Impressum</h1>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="heading-md mb-4">Angaben gemäß § 5 TMG</h2>
            <div className="body-md space-y-1">
              <p className="font-semibold text-foreground">Nurturious Ltd</p>
              <p>128 City Road</p>
              <p>London EC1V 2NX</p>
              <p>United Kingdom</p>
            </div>
          </section>

          <section>
            <h2 className="heading-md mb-4">Kontakt</h2>
            <div className="body-md space-y-1">
              <p>
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
            <h2 className="heading-md mb-4">Vertreten durch</h2>
            <div className="body-md">
              <p>Stanley Teege</p>
            </div>
          </section>

          <section>
            <h2 className="heading-md mb-4">Registereintrag</h2>
            <div className="body-md space-y-1">
              <p>Eingetragen in England und Wales</p>
              <p>Companies House</p>
            </div>
          </section>

          <section>
            <h2 className="heading-md mb-4">EU-Streitschlichtung</h2>
            <div className="body-md">
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                <a 
                  href="https://ec.europa.eu/consumers/odr/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p className="mt-2">
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-md mb-4">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
            <div className="body-md">
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-md mb-4">Haftung für Inhalte</h2>
            <div className="body-md">
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
                nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde 
                Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige 
                Tätigkeit hinweisen.
              </p>
              <p className="mt-2">
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den 
                allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch 
                erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei 
                Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend 
                entfernen.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-md mb-4">Haftung für Links</h2>
            <div className="body-md">
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen 
                Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
                Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der 
                Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf 
                mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung 
                nicht erkennbar.
              </p>
              <p className="mt-2">
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete 
                Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von 
                Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>
            </div>
          </section>

          <section>
            <h2 className="heading-md mb-4">Urheberrecht</h2>
            <div className="body-md">
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
                dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art 
                der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
                Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind 
                nur für den privaten, nicht kommerziellen Gebrauch gestattet.
              </p>
              <p className="mt-2">
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die 
                Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche 
                gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, 
                bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen 
                werden wir derartige Inhalte umgehend entfernen.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
