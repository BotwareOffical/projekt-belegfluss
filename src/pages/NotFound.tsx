import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="container-narrow text-center">
        <h1 className="heading-xl mb-4">404</h1>
        <p className="body-lg mb-8">Diese Seite wurde nicht gefunden.</p>
        <Button asChild>
          <Link to="/">Zurück zur Startseite</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
