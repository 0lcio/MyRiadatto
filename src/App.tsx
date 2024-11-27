import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "./components/Sidebar/Layout";
import "./App.css";
import { Dashboard } from "./components/Dashboard/Dashboard";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TooltipProvider>
      <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
        </Layout>
        </Router>
      </TooltipProvider>
    </ThemeProvider>
  );
}

export default App;
