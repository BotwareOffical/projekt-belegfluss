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
          setTimeout(() => setShowSolutions(true), 500);
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
    <section ref={sectionRef} className="relative overflow-hidden">
      <div className="grid md:grid-cols-2 min-h-[500px] md:min-h-[600px]">
        {/* Vorher - Red Background */}
        <div className="bg-destructive/10 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-destructive/15 to-destructive/5" />
          <div className="relative z-10 p-8 md:p-12 lg:p-16 h-full flex flex-col justify-center">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-destructive/20 text-destructive rounded-full text-sm font-semibold uppercase tracking-wide">
                Vorher
              </span>
            </div>
            <div className="space-y-5">
              {problems.map((problem, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-4 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-destructive/20 flex items-center justify-center">
                    <X className="w-5 h-5 text-destructive" strokeWidth={2.5} />
                  </div>
                  <p className="text-foreground font-medium text-lg pt-2">{problem}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Nachher - Green Background */}
        <div className="bg-success/10 relative">
          <div className="absolute inset-0 bg-gradient-to-bl from-success/15 to-success/5" />
          <div className="relative z-10 p-8 md:p-12 lg:p-16 h-full flex flex-col justify-center">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-success/20 text-success rounded-full text-sm font-semibold uppercase tracking-wide">
                Nachher
              </span>
            </div>
            <div className="space-y-5">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-4 transition-all duration-500 ${
                    showSolutions ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-success/20 flex items-center justify-center">
                    <Check className="w-5 h-5 text-success" strokeWidth={2.5} />
                  </div>
                  <p className="text-foreground font-medium text-lg pt-2">{solution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
