import { useEffect, useRef, useState } from "react";
import { X, Check } from "lucide-react";

const problems = [
  "Belege per WhatsApp, Zettel oder E-Mail",
  "Manuelles Abtippen kostet Zeit und Nerven",
  "Am Monatsende fehlt der Überblick",
];

const solutions = [
  "Jeder Beleg landet im richtigen Projekt",
  "Alles zentral und nachvollziehbar",
  "Export für Buchhaltung jederzeit möglich",
];

const ProblemSolutionSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSolutions, setShowSolutions] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setShowSolutions(true), 400);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-section-alt">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Problems */}
          <div className="space-y-4">
            {problems.map((problem, index) => (
              <div
                key={index}
                className={`flex items-start gap-4 p-5 rounded-xl bg-background border border-border transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center">
                  <X className="w-4 h-4 text-destructive" />
                </div>
                <p className="text-foreground font-medium pt-1">{problem}</p>
              </div>
            ))}
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className={`flex items-start gap-4 p-5 rounded-xl bg-background border border-border transition-all duration-500 ${
                  showSolutions ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-success/10 flex items-center justify-center">
                  <Check className="w-4 h-4 text-success" />
                </div>
                <p className="text-foreground font-medium pt-1">{solution}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
