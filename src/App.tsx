import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "./components/Sidebar/Layout";
import "./App.css";
import { Dashboard } from "./components/Dashboard/Dashboard";
import MainTable from "./components/Table/page";
import { Tender } from "./components/Tender/Tender";
import { Ongoing } from "./components/Ongoing/Ongoing";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TooltipProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path = "/" element={<Dashboard />} />
              <Route path = "/quote" element={<MainTable />} />
              <Route path = "/ongoing" element={<MainTable />} />
              <Route path = "/quote/:id" element={<Tender />} />
              <Route path = "/ongoing/:id" element={<Ongoing />} />
            </Routes>
          </Layout>
        </Router>
      </TooltipProvider>
    </ThemeProvider>
  );
}

export default App;
