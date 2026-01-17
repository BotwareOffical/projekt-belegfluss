import { useEffect } from "react";

const CTASection = () => {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector(`script[src="${script.src}"]`);
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <section id="cta-section" className="section-padding">
      <div className="container-narrow">
        <div className="text-center mb-10">
          <h2 className="heading-lg mb-4">Passt das für Ihren Betrieb?</h2>
          <p className="body-md max-w-lg mx-auto">
            Wir prüfen gemeinsam, ob das für Ihren Betrieb sinnvoll ist.
            <br />
            <span className="text-foreground font-medium">Kurz klären — 10-15 Minuten.</span>
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="rounded-xl border border-border overflow-hidden bg-background">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/stanley-teege-nurturious/stanley-teege?hide_event_type_details=1&hide_gdpr_banner=1"
              style={{ minWidth: "320px", height: "700px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
