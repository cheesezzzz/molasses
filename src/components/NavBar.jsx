import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <header className="sticky">
        
        <nav>
            <Link to=".">Home</Link>
        </nav>
      </header>
    </>
  );
}
