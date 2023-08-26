import { Link, Outlet } from "react-router-dom";

export default function NavBar() {
    return (
        <>
            <nav id='portfolio-nav-bar'>
                <Link to='/' id='personal-logo' >MJR</Link>
                <div id='links'>
                    <Link to='/About' id='about-link'>About Me</Link>
                    <a href="https://github.com/Michael-Riordan" id='github-link'>GitHub</a>
                </div>
            </nav>
            <Outlet />
        </>
    );
}