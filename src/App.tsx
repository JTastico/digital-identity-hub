import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";

// Code-splitting: cada ruta se carga bajo demanda
const Portfolio = lazy(() => import("./pages/Portfolio"));
const LandingCard = lazy(() => import("./pages/LandingCard"));
const CVPage = lazy(() => import("./pages/CVPage"));
const VirtualCard = lazy(() => import("./pages/VirtualCard"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-10 h-10 rounded-full border-2 border-primary/30 border-t-primary animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <LanguageProvider>
          <Toaster />
          <Sonner />
          <HashRouter>
            <Suspense fallback={<PageLoader />}>
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
            </Suspense>
          </HashRouter>
        </LanguageProvider>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
