import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lenis from '@studio-freight/lenis'
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import Insights from "./pages/Insights/Insights";
import InsightsDetail from "./pages/Insights/InsightsDetail";
import Projects from "./pages/Projects/Projects";
import About from "./pages/About/About";
import { useEffect } from "react";

export default function App() {

  const lenis = new Lenis()

  useEffect(() => {
    lenis.on('scroll', (e) => {
      console.log(e)
    })
    
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)
  })
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Layout */}
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/:id" element={<InsightsDetail />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
