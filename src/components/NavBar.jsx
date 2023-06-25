import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <header className="fixed">
        
        <nav className="space-x-10">
            <Link to=".">Home</Link>
            <Link to="/insights">Insights</Link>
        </nav>
      </header>
    </>
  );
}
