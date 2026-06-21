import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/context/LanguageContext";
import LandingCard from "./pages/LandingCard";
import Portfolio from "./pages/Portfolio";
import CVPage from "./pages/CVPage";
import VirtualCard from "./pages/VirtualCard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <HashRouter>
          <Routes>
            {/* La raíz muestra el portafolio completo directamente */}
            <Route path="/" element={<Portfolio />} />
            {/* Alias por compatibilidad (enlaces previos / QR / botón "Volver" del CV) */}
            <Route path="/detalles" element={<Portfolio />} />
            {/* Tarjeta de presentación (antes era la raíz) */}
            <Route path="/tarjeta" element={<LandingCard />} />
            <Route path="/cv" element={<CVPage />} />
            <Route path="/tarjeta-virtual" element={<VirtualCard />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
