import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-automotive-blue">404</h1>
        <h2 className="mb-4 text-2xl font-semibold text-automotive-dark">Page Not Found</h2>
        <p className="mb-6 text-muted-foreground max-w-md mx-auto">
          Sorry, we couldn't find the page you're looking for. The page might have been moved or doesn't exist.
        </p>
        <Link to="/">
          <Button variant="default">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;