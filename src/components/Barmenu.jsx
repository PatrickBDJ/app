import {FaRegWindowClose} from 'react-icons/fa'


export default function Barmenu({ closeModal }){
    return (
        <div className="bar-menu-div">
            <div className="bar-menu-top">
                <div className='bar-menu-logo-div logo nav-logo'><a href="/"><img src={require('../assets/logo_atp_sort.png')} alt="logo navbar" /></a></div>
                <div className="bar-menu-close"><button onClick={closeModal} className='bar-menu-btn'><FaRegWindowClose/></button></div>
            </div>

            <div className="bar-menu-content">
                <ul className="bar-menu-modal-ul">
                    <li><a href="/modeller">Modeller</a></li>
                    <li><a href="/metodeforretningsprocesser">Metode for Forretningsgange</a></li>
                    <li><a href="/processer">Processer</a></li>
                    <li><a href="/dokumentationsreoler">Dokumentationsreoler</a></li>
                    <li><a href="/qlm">Værktøj: QLM</a></li>
                    <li><a href="/forretningsgangehuset">Forretningsgange - Sådan gør vi</a></li>
                    <li><a href="/kontakt">Kontakt os</a></li>
                </ul>
            </div>
        </div>

    )
}