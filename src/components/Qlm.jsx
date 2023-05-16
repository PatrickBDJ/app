export default function Qlm(){
    return ( 
        <div className="page-top-margin">
        <div className="page-container">
            <h1>Værktøj: QLM</h1>
            <div className="model-page-row">
                <div className="model-page-column model-page-column-full">
                    <p className="no-margin-p">
                        I ATP anvendes QLM som værktøj til udvikling, procesunderstøttelse, og dokumentation.
                    </p>
                    <br />
                </div>
            </div>
            <div className="model-page-row">
                <div className="model-page-column model-page-column-full">
                    <h3>QLM</h3>
                    <p className="no-margin-p">
                        Qualiware Lifecycle Manager, QLM er ATP's primære modelleringsværktøj til modellering af processer og dokumentation af forretningsviden, herunder forretningsgange. Det er en "central vidensbank", der bidrager i forretningen til at skabe:
                    </p>
                    <ul className="ul-default">
                        <li>Sammenhæng ved at samle al viden et sted og derved gøre det muligt at analysere et sted og se konsekvenser af ændringer.</li>
                        <li>Samarbejde ved at have arbejdsgange for, hvordan vi interagerer med hinanden.</li>
                        <li>Konsistens fx fokus på fælles sprog, ensartet anvendelse og en Governancemodel.</li>
                    </ul>
                </div>
            </div>
            <div className="model-page-row">
                <div className="model-page-column">
                        <p>
                            QLM indeholder mange typer af diagrammer og symboler samt mulighed for relationer og genbrug.
                            <br /><br />
                            Via <a href="/app">Huset - Sådan gør vi...</a> kan navigere mellem de forskellige QLM repositories ved at klikke på de relevante områder. Du kan navigere mellem QLM base (=prod) og development (=udvikling) via Profil ikonet i øverste højre hjørne.
                        </p>
                </div>
                <div className='model-page-column'>
                        <img src={require('../assets/qlm-grafik.jpg')} alt="qlm grafik" className='test-goats' />
                </div>
            </div>
            <div className="model-page-row">
                <div className="model-page-column model-page-column-full">
                    <h3>QLM portaler</h3>
                    <p>
                        Her er links til alle QLM portaler med gældende dokumentation:
                        <br /><br />
                        <a href="/app/error">Base portaler</a>
                        <br /><br />
                        <a href="/app/error">Development portaler</a>
                    </p>
                </div>
            </div>
            <div className="model-page-row">
                <div className="model-page-column model-page-column-full">
                    <h3>Adgang til QLM</h3>
                    <p className='no-margin-p'>
                        <span className='text-underline'>Har du behov for at:</span>
                    </p>
                    <ul className='ul-default'>
                        <li>Læse dokumentation? Alle ATP medarbejdere har adgang til alle QLM portalerne.</li>
                        <li>Opdatere aktivitetsbeskrivelser via QLM portal? Som Web-editor skal der bestilles skriveadgang til QLM portalen for det pågældende forretningsområde.</li>
                        <li>Redigere diagrammer og beskriver? Som QLM-editor skal der bestilles en fuld redigeringsadgang til QLM applikationen for det pågældende forretningsområde.</li>
                    </ul>
                </div>
            </div>
            <div className="model-page-row">
                <div className="model-page-column">
                    <h3>QLM vejledninger</h3>
                    <p>
                        <a href="https://rise.articulate.com/share/7NiR6lWwsBBcbifSWPOuezZ-WWY488qH#/" target='_blank' rel='noreferrer'>Instruktionsvideoer til QLM og GWE</a> (Governance Workflow Engine)
                        <br /><br />
                        <a href="https://articulateusercontent.com/rise/courses/LgL_xM-6Ku7rxYzZ_HB7ssFoOESaj2Hj/4LMX_OW2PhaVIMMj-QLM%2520vejledning.pdf" target='_blank' rel='noreferrer'>QLM opslagsværk</a> (skriftlig vejledning til QLM)
                    </p>
                </div>
                <div className="model-page-column">
                    <h3>Undervisning</h3>
                    <p>
                        Undervisning i QLM sker ved sidemandsoplæring. For adgang som QLM-editor er undervisning nødvendigt.
                    </p>
                </div>
            </div>
        </div>
    </div>
    )
}