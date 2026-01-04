import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TermosCondicoes from "./pages/TermosCondicoes";
import ComissoesTaxas from "./pages/ComissoesTaxas";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import PoliticaCancelamento from "./pages/PoliticaCancelamento";
import PoliticaReembolso from "./pages/PoliticaReembolso";
import AvaliacoesFeedback from "./pages/AvaliacoesFeedback";
import NormasPrestacaoServico from "./pages/NormasPrestacaoServico";
import PerguntasRespostas from "./pages/PerguntasRespostas";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/termos-condicoes" element={<TermosCondicoes />} />
          <Route path="/contactar" element={<Contact />} />
          <Route path="/perguntas-respostas" element={<PerguntasRespostas />} />
          <Route path="/comissoes-taxas" element={<ComissoesTaxas />} />
          <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
          <Route path="/politica-cancelamento" element={<PoliticaCancelamento />} />
          <Route path="/politica-reembolso" element={<PoliticaReembolso />} />
          <Route path="/avaliacoes-feedback" element={<AvaliacoesFeedback />} />
          <Route path="/normas-prestacao-servico" element={<NormasPrestacaoServico />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
