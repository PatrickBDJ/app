export default function Modeller(){
    return (
    <>
    <div className='image-zindex'><img src={require('../assets/modeller.jpg')} alt="modeller" className='page-top-image' /></div>
    <div /* className="page-top-margin" */>
        <div className="page-container">
        
            <h1>Modeller</h1>
            <div className="model-page-row">
                <div className="model-page-column">
                    <h3>Generelt om modeller</h3>
                    <p className="no-margin-p">Anvendelse af modeller giver overblik over en logisk sammenhæng af processer. Artefakter og værktøjer, der tilsammen tilvejebringer og formidler viden indenfor et bestemt område.
                        <br /><br />
                        I ATP har vi en række modeller fordi de også:
                    </p>
                    <ul className="ul-default">
                        <li>Giver fælles sprog</li>
                        <li>Giver rammer</li>
                        <li>Sikrer ensartethed og genbrug</li>
                        <li>Fremmer samarbejder</li>
                        <li>Giver fleksibilitet og mobilitet</li>
                        <li>Giver sikkerhed for at nå målet</li>
                    </ul>
                </div>
                <div className="model-page-column">
                    <h3>ATP Leverancemodel</h3>
                    <p className="no-margin-p">ATP Leverancemodel finder du via <a href="/forretningsgangehuset">Huset - Sådan gør vi...</a>
                    <br /><br />
                    her udstilles dels vores governance for udviklingsporteføjlen, dels samler den alle de metoder og værktøjer som vi benytter til styring, udvikling og implementering. Det som før har været forankret i de tidligere modeller fx Udviklingsmodel, Projektmodel og Anskaffelsesmodel er samlet i ATP leverancemodel.
                    </p>
                </div>
            </div>
            <div className="model-page-row">
                <div className="model-page-column">
                    <h3>Udvikling med ekstern leverandør</h3>
                    <p className="no-margin-p">Udvikling med ekstern leverandør for anskaffelse og videreudvikling af IT-løsninger til Administrationsforretningen - hos eksterne leverandører finder du i ATP Leverancemodel under Ekstern Leverandør.</p>
                </div>
                <div className="model-page-column">
                    <h3>Koncern Forandringsunivers</h3>
                    <p className="no-margin-p">Forandringsuniverset skal styrke ATP's implementeringskraft og involveringsgrad, når vi fx ændrer på systemer, processer, strategi og organisation.
                    <br />
                    Vi bruger forandringsuniverset som en hjælp til at sikre, at vi styrer sikkert igennem planlagte forandringer. Det er relevant for både små og store forandrigner og projekter.
                    <br /><br />
                    Forandringsuniverset finder du under ATP Leverancemodel. Værktøjskasser. Find ATP Leverancemodel i <a href="/forretningsgangehuset">Huset - Sådan gør vi...</a>
                    </p>
                </div>
            </div>
            <div className="model-page-row">
                <div className="model-page-column model-page-column-full">
                    <h3>IT Operation Model (ITOM)</h3>
                    <p className="no-margin-p">
                        IT-Operating Model (ITOM) finder du via <a href="/forretningsgangehuset">Huset - Sådan gør vi... </a>
                        under Koncern IT.
                    <br /><br />
                    ITOM er forside til IT samlede procesdokumentation, og giver et hurtigt overblik over en given proces - uanset hvor den er beskrevet.
                    </p>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}