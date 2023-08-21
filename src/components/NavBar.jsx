import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <header className="sticky top-0 z-50 py-5 px-8 text-white flex items-center justify-between w-full font-satoshi">
        <Link className="font-display text-2xl font-bold" to=".">cm.</Link>
        <nav className="space-x-10 font-medium">
            <Link to="/about">About</Link>
            <Link to="/projects">Work</Link>
            <Link to="/insights">Insights</Link>
        </nav>
        <a className="font-display font-medium" href="">Let&apos;s Talk</a>
      </header>
    </>
  );
}
