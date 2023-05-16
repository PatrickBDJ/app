import {FaRegWindowClose} from 'react-icons/fa'
import { Link } from 'react-router-dom'


export default function Barmenu({ closeModal }){
    return (
        <div className="bar-menu-div">
            <div className="bar-menu-top">
                <div className='bar-menu-logo-div logo nav-logo'><Link to="/"><img src={require('../assets/logo_atp_sort.png')} alt="logo navbar" /></Link></div>
                <div className="bar-menu-close"><button onClick={closeModal} className='bar-menu-btn'><FaRegWindowClose/></button></div>
            </div>

            <div className="bar-menu-content">
                <ul className="bar-menu-modal-ul">
                    {/* <li><a href="/modeller">Modeller</a></li> */}
                    <li><Link to="/modeller" onClick={closeModal}>Modeller</Link></li>
                    <hr className='barmenu-divider'></hr>

                    {/* <li><a href="/metodeforretningsprocesser">Metode for Forretningsgange</a></li> */}
                    <li><Link to="/metodeforretningsprocesser" onClick={closeModal}>Metode for Forretningsgange</Link></li>
                    <hr className='barmenu-divider'></hr>

                    {/* <li><a href="/processer">Processer</a></li> */}
                    <li><Link to="/processer" onClick={closeModal}>Processer</Link></li>
                    <hr className='barmenu-divider'></hr>

                    {/* <li><a href="/dokumentationsreoler">Dokumentationsreoler</a></li> */}
                    <li><Link to="/dokumentationsreoler" onClick={closeModal}>Dokumentationsreoler</Link></li>
                    <hr className='barmenu-divider'></hr>

                    {/* <li><a href="/qlm">Værktøj: QLM</a></li> */}
                    <li><Link to="/qlm" onClick={closeModal}>Værktøj: QLM</Link></li>
                    <hr className='barmenu-divider'></hr>

                    {/* <li><a href="/forretningsgangehuset">Forretningsgange - Sådan gør vi</a></li> */}
                    <li><Link to="/forretningsgangehuset" onClick={closeModal}>Forretningsgange - Sådan gør vi</Link></li>
                    <hr className='barmenu-divider'></hr>

                    {/* <li><a href="/kontakt">Kontakt os</a></li> */}
                    <li><Link to="/kontakt" onClick={closeModal}>Kontakt os</Link></li>
                </ul>
            </div>
        </div>

    )
}