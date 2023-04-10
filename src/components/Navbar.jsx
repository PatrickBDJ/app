import { Children } from "react";


function Navbar(){
    return (
        <nav className="nav">
            <a href="/" className="nav-title">Navnet</a>
            <ul>
                <CustomLink href="/page1">Side 1</CustomLink>
                <CustomLink href="/page2">Side 2</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ href, children, ...props}){
    const path = window.location.pathname

    return(
        <li className={path === href ? "active" : ""}>
            <a href={href} {...props}>{children}</a>
        </li>
    )
}



export default Navbar;