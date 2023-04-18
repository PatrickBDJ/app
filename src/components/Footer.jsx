import {ImFacebook2} from 'react-icons/im'
import {BsLinkedin} from 'react-icons/bs'


export default function Footer(){
    return (
    <div className="footer-div">
        <div className='logo footer-logo'>
            <img src={require('../assets/logo_atp_hvid.png')} alt="footer logo" />
        </div>

            <hr className='footer-divider'></hr>
            
        <div>
            <p>
                ATP Koncernen <br />
                Kongens Vænge 8 <br />
                3400 Hillerød <br />
                Tlf.: +45 70 11 12 13 <br />
                CVR-nr. 43405810
            </p>
        </div>

            <hr className='footer-divider'></hr>

        <div className='footer-links'>
            <ul>
                <li><a href="/">Nyheder og indblik</a></li>
                <li><a href="/">Pressekontakt</a></li>
                <li><a href="/">Resultater og rapporter</a></li>
                <li><a href="/">Ledige stillinger</a></li>
            </ul>
        </div>

            <hr className='footer-divider'></hr>

        <div className='footer-newsletter'>
            <p>Hold dig opdateret</p>
            <button /* onClick={} */>Tilmeld nyhedsbrev</button>
        </div>
        
        <div className='so-me-icons'>
            <div className='so-me-icon so-me-facebook'><a href="/"><ImFacebook2/></a></div>
            <div className='so-me-icon so-me-linkedin'><a href="/"><BsLinkedin /></a></div>
        </div>
            
        <div className='footer-important-links'>
            <ul>
                <li><a href="/">Behandling af personoplysninger</a></li>
                <li><a href="/">Politik for dataetik</a></li>
                <li><a href="/">Cookies på atp.dk</a></li>
                <li><a href="/">Tilgængelighedserklæring</a></li>
                <li><a href="/">Retningslinjer for markedssonderinger</a></li>
                <li><a href="/">Redegørelser fra Finanstilsynet</a></li>
                <li><a href="/">Whistleblower</a></li>
                <li><a href="/">ATP's pensionsprodukt</a></li>
                <li><a href="/">ATP's Pensions- og hensættelsesgrundlag</a></li>
            </ul>
        </div>
    </div>

    )
}