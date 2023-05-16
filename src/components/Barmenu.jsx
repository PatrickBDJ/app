import {FaRegWindowClose} from 'react-icons/fa'
import { Link } from 'react-router-dom'


export default function Barmenu({ closeModal }){
    return (
        <div className="bar-menu-div">
            <div className="bar-menu-top">
                <div className='bar-menu-logo-div logo nav-logo'><a href="/app"><img src={require('../assets/logo_atp_sort.png')} alt="logo navbar" /></a></div>
                <div className="bar-menu-close"><button onClick={closeModal} className='bar-menu-btn'><FaRegWindowClose/></button></div>
            </div>

            <div className="bar-menu-content">
                <ul className="bar-menu-modal-ul">

                    <li><Link to="/modeller">Modeller</Link></li>
                    <hr className='barmenu-divider'></hr>
                    <li><a href="/app/metodeforretningsprocesser">Metode for Forretningsgange</a></li>
                    <hr className='barmenu-divider'></hr>
                    <li><a href="/app/processer">Processer</a></li>
                    <hr className='barmenu-divider'></hr>
                    <li><a href="/app/dokumentationsreoler">Dokumentationsreoler</a></li>
                    <hr className='barmenu-divider'></hr>
                    <li><a href="/app/qlm">Værktøj: QLM</a></li>
                    <hr className='barmenu-divider'></hr>
                    <li><a href="/app/forretningsgangehuset">Forretningsgange - Sådan gør vi</a></li>
                    <hr className='barmenu-divider'></hr>
                    <li><a href="/app/kontakt">Kontakt os</a></li>
                </ul>
            </div>
        </div>

    )
}