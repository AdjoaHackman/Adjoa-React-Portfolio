import { Link } from "react-router-dom";
import ContactForm from "./Form";



const Nav = () => {
    return (
        <>
            <nav className="nav nav-pills flex-column flex-sm-row fixed-center">
                <Link className="flex-sm-fill text-md-center nav-link" aria-current="page" to="/">About Me</Link>
                <Link className="flex-sm-fill text-md-center nav-link" aria-current="page" to="/portfolio">Portfolio</Link>
                {/* <Link className="flex-sm-fill text-md-center nav-link" {{ContactForm}} target="_blank">Contact Me</Link> */}
                <a className="flex-sm-fill text-md-center nav-link" href="https://www.linkedin.com/in/adjoa-hackman-37102050/" target="_blank">Resume</a>
            </nav>
        </>
    )
}

export default Nav;