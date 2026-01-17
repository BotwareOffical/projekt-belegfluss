import { useEffect, useState, useRef } from "react";
import { Camera, ScanLine, FolderCheck, FileOutput } from "lucide-react";

const steps = [
  { icon: Camera, label: "Beleg fotografieren" },
  { icon: ScanLine, label: "Automatisch auslesen" },
  { icon: FolderCheck, label: "Projekt zugeordnet" },
  { icon: FileOutput, label: "Export für Buchhaltung" },
];

const WorkflowSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="section-padding">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = activeStep === index;

            return (
              <div key={index} className="flex items-center">
                <div
                  className={`flex flex-col items-center transition-all duration-500 ${
                    isActive ? "scale-110" : "scale-100"
                  }`}
                >
                  <div
                    className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-3 transition-all duration-500 ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-lg"
                        : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    <Icon className="w-7 h-7 md:w-8 md:h-8" strokeWidth={1.5} />
                  </div>
                  <span
                    className={`text-sm md:text-base font-medium text-center max-w-[120px] transition-colors duration-500 ${
                      isActive ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {step.label}
                  </span>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden md:block w-12 lg:w-20 h-px bg-border mx-4" />
                )}
              </div>
            );
          })}
        </div>

        {/* Progress bar */}
        <div className="mt-10 md:mt-14 max-w-2xl mx-auto">
          <div className="h-1 bg-secondary rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
              style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
