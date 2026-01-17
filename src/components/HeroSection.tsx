import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToCalendly = () => {
    document.getElementById("cta-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-[90vh] flex items-center justify-center pt-20">
      <div className="container-narrow text-center">
        <div className="mb-6 opacity-0 animate-fade-in-up">
          <span className="inline-block px-4 py-2 bg-success/10 text-success rounded-full text-sm font-medium">
            Die Lösung für Ihr Belegchaos
          </span>
        </div>
        <h1 className="heading-xl max-w-4xl mx-auto mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Belege automatisch Projekten zuordnen.
        </h1>
        <p className="body-lg max-w-xl mx-auto mb-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Für Garten- & Landschaftsbau-Betriebe in Deutschland.
        </p>
        <p className="body-md max-w-lg mx-auto mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          Mitarbeiter fotografieren Belege. Der Rest läuft automatisch.
          <br />
          <span className="text-foreground font-medium">In 24 Stunden startklar.</span>
        </p>
        <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <Button size="lg" onClick={scrollToCalendly}>
            Jetzt starten
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
