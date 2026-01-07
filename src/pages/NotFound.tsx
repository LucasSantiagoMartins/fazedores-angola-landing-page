import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "Erro 404: Usuário tentou acessar uma rota inexistente:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center px-4">
        <h1 className="mb-4 text-6xl font-extrabold text-red-600">404</h1>
        <p className="mb-2 text-2xl font-semibold text-muted-foreground">
          Oops! Página não encontrada
        </p>
        <p className="mb-6 text-lg text-muted-foreground">
          A página que você está tentando acessar não existe ou foi removida.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition"
        >
          Voltar para a página inicial
        </a>
      </div>
    </div>
  );
};

export default NotFound;
