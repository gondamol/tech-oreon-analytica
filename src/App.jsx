import { BrowserRouter, Route, Routes } from "react-router-dom";
import SiteLayout from "./components/SiteLayout";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import ContextLabelsPage from "./pages/ContextLabelsPage";
import NetSentimentPage from "./pages/NetSentimentPage";
import ConsultingPage from "./pages/ConsultingPage";
import CareersPage from "./pages/CareersPage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import SolutionPage from "./pages/SolutionPage";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="solutions/:slug" element={<SolutionPage />} />
          <Route
            path="resources/news/make-your-data-more-meaningful-with-context-specific-labelling"
            element={<ContextLabelsPage />}
          />
          <Route path="labels/net-sentiment" element={<NetSentimentPage />} />
          <Route path="resources/case-studies" element={<CaseStudiesPage />} />
          <Route path="consulting" element={<ConsultingPage />} />
          <Route path="careers" element={<CareersPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
