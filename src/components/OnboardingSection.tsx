import { useEffect, useRef, useState } from "react";

const steps = [
  "Kurz ansehen",
  "Einmal anpassen",
  "Direkt nutzen",
];

const OnboardingSection = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          steps.forEach((_, index) => {
            setTimeout(() => {
              setVisibleSteps((prev) => [...prev, index]);
            }, index * 300);
          });
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
    <section ref={sectionRef} className="section-padding">
      <div className="container-narrow">
        <div className="max-w-md mx-auto space-y-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex items-center gap-5 transition-all duration-500 ${
                visibleSteps.includes(index)
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-4"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-semibold transition-all duration-500 ${
                  visibleSteps.includes(index)
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground"
                }`}
              >
                {index + 1}
              </div>
              <span className="text-lg font-medium text-foreground">{step}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OnboardingSection;
