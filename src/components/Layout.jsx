import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="bg-[#202020]">
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
