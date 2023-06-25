import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import HomePage from "./pages/HomePage"
import Insights from "./pages/Insights"

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Layout */}
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage/>} />
            <Route path="/insights" element={<Insights/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
