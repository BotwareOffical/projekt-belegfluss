import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";

const PricingSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToCalendly = () => {
    document.getElementById("cta-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={sectionRef} className="section-padding bg-section-alt">
      <div className="container-narrow">
        <div
          className={`max-w-xl mx-auto p-8 md:p-12 rounded-2xl bg-background border border-border text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="heading-xl mb-4 whitespace-nowrap">Ab 1.500 € pro Jahr</p>
          <p className="body-lg mb-6">
            Einmal freischalten. Direkt nutzen.
          </p>
          
          <div className="flex items-center justify-center gap-2 mb-6 text-success">
            <Clock className="w-5 h-5" />
            <span className="font-medium">In 24 Stunden startklar</span>
          </div>

          <p className="body-sm mb-8">
            An Ihren Betrieb angepasst. ERP-Anbindungen nach Bedarf.
          </p>

          <Button size="lg" onClick={scrollToCalendly}>
            Jetzt starten
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
