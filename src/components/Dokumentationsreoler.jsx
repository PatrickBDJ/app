export default function Dokumentationsreoler(){
    return(
        <div /* className="page-top-margin" */>
            <div className='image-zindex'><img src={require('../assets/dokumentationsreol.jpg')} alt="modeller" className='page-top-image' /></div>
            <div className="page-container">
                <h1>Dokumentationsreoler</h1>
                <div className="model-page-row">
                    <div className="model-page-column model-page-column-full">
                        <p className="no-margin-p">Dokumentationsreoler udstiller på struktureret vis dokumentation af forretnings- og systemdokumentation. Der er en reol pr. ydelse eller ordning.
                        
                        </p>
                    </div>
                </div>
                <div className="model-page-row">
                    <div className="model-page-column model-page-column-full">
                        <p className='no-margin-p'>
                            Vandret er reolen opdelt i:
                        </p>
                        <ul className='ul-default'>
                            <li>Det konceptuelle niveau: Her beskriver dokumenterne de overordnede, strategiske beslutninger. Ejerskabet er forankret hos ledelsen i organisationen.</li>
                            <br />
                            <li>Det logiske niveau: Her beskriver dokumenterne de generelle designregler, man opererer ud fra. Ejerskabet er forankret hos de ansvarlige for den daglige ledelse i organisationen.</li>
                            <br />
                            <li>Det fysiske niveau: Her er ejerskabet forankret hos de operationelt ansvarlige i organisationen, og herunder hos de leverandører man benytter til at levere løsninger.</li>
                        </ul>
                    </div>
                </div>
                
                <div className="model-page-row">
                    <div className="model-page-column">
                        <img src={require('../assets/goats.jpg')} alt="geder" className='test-goats' />
                    </div>
                    <div className="model-page-column">
                        <p className='no-margin-p'>
                            Fra venstre til højre i reolen sker der en klassificering af dokumentationen fra det strategiske hen mod det mere teknologiorienterede.
                            <br /><br />
                            Fra toppen og ned til bunden sker der en nedbrydning og detaljering af dokumentationen.
                        </p>
                    </div>
                </div>
                <div className="model-page-row">
                    <div className="model-page-column model-page-column-full">
                        <h3>De faktiske dokumentationsreoler</h3>
                        <div className='btn-flex'>
                            <a className='link-btn' href='/dokumentationdrift'>Dokumentation - gældende i drift</a>
                            <a className='link-btn'  href='/dokumentationudvikling'>Dokumentation - udvikling på vej</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}