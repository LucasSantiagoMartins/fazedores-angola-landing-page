import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "Error 404: User attempted to access a non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center px-4">
        <h1 className="mb-4 text-6xl font-extrabold text-red-600">404</h1>
        <p className="mb-2 text-2xl font-semibold text-muted-foreground">
          Oops! Page not found
        </p>
        <p className="mb-6 text-lg text-muted-foreground">
          The page you are trying to access does not exist or has been removed.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition"
        >
          Back to homepage
        </a>
      </div>
    </div>
  );
};

export default NotFound;
