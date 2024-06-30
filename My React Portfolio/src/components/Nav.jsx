import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <>
            <nav className="nav nav-pills flex-column flex-sm-row fixed-center mb-4 mt-4">
                <Link className="flex-sm-fill text-md-center nav-link" aria-current="page" to="/">About Me</Link>
                <Link className="flex-sm-fill text-md-center nav-link" aria-current="page" to="/portfolio">Portfolio</Link>
                <Link className="flex-sm-fill text-md-center nav-link" to="/contact">Contact Me</Link>
                <a className="flex-sm-fill text-md-center nav-link" href="https://www.linkedin.com/in/adjoa-hackman-37102050/" target="_blank">Resume</a>
            </nav>
        </>
    )
}

export default Nav;