import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="site-wrapper">
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
