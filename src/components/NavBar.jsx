import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <header className="fixed z-50 p-8 text-white flex items-center justify-between w-full font-satoshi">
        <Link className="font-display text-2xl font-bold" to=".">cm.</Link>
        <nav className="space-x-10 font-medium">
            <Link to="/insights">Insights</Link>
            <Link to="/projects">Work</Link>
        </nav>
        <a className="font-display font-medium" href="">Let&apos;s Talk</a>
      </header>
    </>
  );
}
