import { Link, useMatch, useResolvedPath } from "react-router-dom"



function Navbar(){
    return (
        <nav className="nav">
            <Link to="/" className="nav-title">Navnet</Link>
            <ul>
                <CustomLink to="/page1">Side 1</CustomLink>
                <CustomLink to="/page2">Side 2</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end:true })

    return(
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}



export default Navbar;