/* import {ImFacebook2} from 'react-icons/im'
import {BsLinkedin} from 'react-icons/bs' */


export default function Footer(){
    return (
    <div className="footer-div">
        <div className='logo footer-logo'>
            <img src={require('../assets/logo_atp_hvid.png')} alt="footer logo" />
        </div>

            
        <div className='footer-row'>  
            <div className='footer-column'>
                <hr className='footer-divider'></hr>
{/*                     <div> */}
                        <h3>Støtte og hjælp til QLM</h3>
                        <p>
                            Opret venligst en ServiceNow sag, så hele gruppen har mulighed for at supportere jer.
                        </p>
{/*                         <p>
                            ATP Koncernen <br />
                            Kongens Vænge 8 <br />
                            3400 Hillerød <br />
                            Tlf.: +45 70 11 12 13 <br />
                            CVR-nr. 43405810
                        </p> */}
{/*                     </div> */}
            </div>
                

            <div className='footer-column'>
             <hr className='footer-divider'></hr>
{/*                 <div className='footer-links'> */}
{/*                     <ul>
                        <li><a href="/">Nyheder og indblik</a></li>
                        <li><a href="/">Pressekontakt</a></li>
                        <li><a href="/">Resultater og rapporter</a></li>
                        <li><a href="/">Ledige stillinger</a></li>
                    </ul> */}
                    <h3 className='fake-footer-text'>falsk tekst</h3>
                    <p>
                        Tekniske problemer kontakt
                        <br />
                        ServiceDesk, lok. 4495,
                        <br />
                        eller <a href="mailto: servicedesk@atp.dk">servicedesk@atp.dk</a>
                    </p>
                {/* </div> */}
            </div>
                
            <div className='footer-column'>
            <hr className='footer-divider'></hr>
{/*                 <div className='footer-newsletter'>
                    <p>Hold dig opdateret</p>
                    <button>Tilmeld nyhedsbrev</button>
                </div>
                
                <div className='so-me-icons'>
                    <div className='so-me-icon so-me-facebook'><a href="/"><ImFacebook2/></a></div>
                    <div className='so-me-icon so-me-linkedin'><a href="/"><BsLinkedin /></a></div>
                </div> */}
                <h3 className='fake-footer-text'>falsk tekst</h3>
                <p className='no-margin-p margin-p'>
                    Du kan få støtte og hjælp inden for følgende områder:
                </p>
                <ul className='ul-default'>
                    <li>Procesmetodestøtte</li>
                    <li>Modelleringshjælp</li>
                    <li>Hjælp til compliance</li>
                    <li>QLM assistance</li>
                    <li>Metodereview</li>
                </ul>
            </div>
            <hr className='footer-divider hide-divider'></hr>
        </div>
        <div className='footer-block'> 
            <div className='footer-important-links'>
                <ul>
                    <li><a href="https://www.atp.dk/behandling-af-personoplysninger" target="_blank" rel="noreferrer">Behandling af personoplysninger</a></li>
                    <li><a href="https://www.atp.dk/dataetik-i-atp" target="_blank" rel="noreferrer">Politik for dataetik</a></li>
                    <li><a href="https://www.atp.dk/cookiepolitik" target="_blank" rel="noreferrer">Cookies på atp.dk</a></li>
                    <li><a href="https://www.was.digst.dk/atp-dk" target="_blank" rel="noreferrer">Tilgængelighedserklæring</a></li>
                    <li><a href="https://www.atp.dk/retningslinjer-markedssonderinger" target="_blank" rel="noreferrer">Retningslinjer for markedssonderinger</a></li>
                    <li><a href="https://www.atp.dk/redegoerelser-fra-finanstilsynet" target="_blank" rel="noreferrer">Redegørelser fra Finanstilsynet</a></li>
                    <li><a href="https://www.atp.dk/whistleblower" target="_blank" rel="noreferrer">Whistleblower</a></li>
                    <li><a href="https://www.atp.dk/dokument/atps-pensionsprodukt" target="_blank" rel="noreferrer">ATP's pensionsprodukt</a></li>
                    <li><a href="https://www.atp.dk/dokument/atps-pensions-og-hensaettelsesgrundlag" target="_blank" rel="noreferrer">ATP's Pensions- og hensættelsesgrundlag</a></li>
                </ul>
            </div>
        </div>
    </div>

    )
}