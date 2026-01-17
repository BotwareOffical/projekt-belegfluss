const HeroSection = () => {
  return (
    <section className="min-h-[85vh] flex items-center justify-center pt-20">
      <div className="container-narrow text-center">
        <h1 className="heading-xl max-w-3xl mx-auto mb-6 opacity-0 animate-fade-in-up">
          Belege automatisch Projekten zuordnen.
        </h1>
        <p className="body-lg max-w-xl mx-auto mb-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
          Für Garten- & Landschaftsbau-Betriebe in Deutschland.
        </p>
        <p className="body-sm max-w-md mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          Mitarbeiter fotografieren Belege. Der Rest läuft automatisch.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
