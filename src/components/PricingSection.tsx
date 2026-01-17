import { useEffect, useRef, useState } from "react";

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

  return (
    <section ref={sectionRef} className="section-padding bg-section-alt">
      <div className="container-narrow">
        <div
          className={`max-w-lg mx-auto p-8 md:p-10 rounded-2xl bg-background border border-border text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="heading-xl mb-2">Ab 1.500 € pro Jahr</p>
          <p className="body-lg mb-6">
            Einmal freischalten. Direkt nutzen.
          </p>
          <p className="body-sm">
            An Ihren Betrieb angepasst.
            <br />
            ERP-Anbindungen nach Bedarf.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
