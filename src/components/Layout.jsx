import NavBar from "./UI/Header/NavBar";
import Footer from "./UI/Footer/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="bg-[#202020] antialiased">
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
