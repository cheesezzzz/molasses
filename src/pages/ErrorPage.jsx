import { Link } from "react-router-dom"

export default function ErrorPage() {
    return (
        <div>
            <h1>oops... 404</h1>
            <Link to="/">let&apos;s go back home</Link>
        </div>
    )
}