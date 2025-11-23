import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Consultation from "./pages/Consultation";
import Quiz from "./pages/Quiz";
import NotFound from "./pages/NotFound";
// destination pages
import PopularDestinations from "./pages/PopularDestinations";

import Lithuania from "./pages/destinations/lt";
import Czech from "./pages/destinations/cz";
import China from "./pages/destinations/china";
import Belgium from "./pages/destinations/belgium";
import France from "./pages/destinations/france";
import USA from "./pages/destinations/usa";
import Latvia from "./pages/destinations/lv";
import AboutUs from "./pages/AboutUs";
import VIPFastTrack from "./pages/VIPFastTrack";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/popular-destinations" element={<PopularDestinations />} />
          <Route path="/vip-fast-track" element={<VIPFastTrack />} />
          {/* destination routes */}
          <Route path="/destinations/lt" element={<Lithuania />} />
          <Route path="/destinations/cz" element={<Czech />} />
          <Route path="/destinations/china" element={<China />} />
          <Route path="/destinations/belgium" element={<Belgium />} />
          <Route path="/destinations/france" element={<France />} />
          <Route path="/destinations/usa" element={<USA />} />
          <Route path="/destinations/lv" element={<Latvia />} />
          {/* Germany route removed */}
          <Route path="/about-us" element={<AboutUs />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
