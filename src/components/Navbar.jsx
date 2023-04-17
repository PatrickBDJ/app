import { Link, useMatch, useResolvedPath } from "react-router-dom"
import Searchmodal from "./Searchmodal"
import {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import Modal from 'react-modal'
import Barmenu from "./Barmenu"


function Navbar(){
    const [navbar, setNavbar] = useState(false)

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };


    const changeScrolled = () => {
        if (window.scrollY >= 80) {
            setNavbar(true)
        } else{
            setNavbar(false)
        }
    }

    useEffect(() => {
    window.addEventListener('scroll', changeScrolled)
    return () => {
        window.removeEventListener("scroll", changeScrolled);
     }}, [])


    return (
        <nav className={navbar ? 'nav scrolled' : 'nav'}>
            <Link to="/" id="nav-logo"><img src={require('../assets/logo_atp_sort.png')} alt="logo" /></Link>
            <ul className="hide-menu">
                <CustomLink to="/modeller">Modeller</CustomLink>
                <CustomLink to="/metodeforretningsprocesser">Metode for forretningsprocesser</CustomLink>
                <CustomLink to="/processer">Processer</CustomLink>
                <CustomLink to="/dokumentationsreoler">Dokumentationsreoler</CustomLink>
                <CustomLink to="/qlm">QLM</CustomLink>
                <CustomLink to="/forretningsgangehuset">Forretningsgange - sådan gør vi</CustomLink>
                <CustomLink to="/kontakt">Kontakt os</CustomLink>
                <Searchmodal />
            </ul>
            <ul className="menu-bar">
                <button onClick={openModal} className="nav-btn menu-bar-btn"><FaBars/></button>
                <Modal isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="bar-modal" ariaHideApp={false} /* portalclassName="modal-wrapper" */>
                    <Barmenu/>
                </Modal>
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