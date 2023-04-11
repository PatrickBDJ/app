import { Link, useMatch, useResolvedPath } from "react-router-dom"
import Searchmodal from "./Searchmodal"
import logo_atp_hvid from '../assets/logo_atp_hvid.png'



function Navbar(){
    return (
        <nav className="nav">
            <Link to="/" id="nav-logo"><img src={logo_atp_hvid} alt="logo" /></Link>
            <ul>
                <CustomLink to="/page1">Side 1</CustomLink>
                <CustomLink to="/page2">Side 2</CustomLink>
                <Searchmodal />
            </ul>
        </nav>
    )
}

function CustomLink({to, children}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end:true })

    return(
        <li className={isActive ? "active" : ""}>
            <Link to={to}>{children}</Link>
        </li>
    )
}



export default Navbar;