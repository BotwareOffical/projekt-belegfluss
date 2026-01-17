import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="cta-section" className="section-padding">
      <div className="container-narrow">
        <div className="text-center mb-10">
          <h2 className="heading-lg mb-4">Passt das für Ihren Betrieb?</h2>
          <p className="body-md mb-6 max-w-lg mx-auto">
            Wir prüfen gemeinsam, ob das für Ihren Betrieb sinnvoll ist.
          </p>
          <Button size="lg" className="mb-8">
            Kurz klären (10–15 Minuten)
          </Button>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="rounded-xl border border-border overflow-hidden bg-background">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com"
              style={{ minWidth: "320px", height: "600px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
