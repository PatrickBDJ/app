import { Link } from "react-router-dom"

export default function Dokumentationdrift(){
    return (
        <div className="page-top-margin">
        <div className="page-container docu-container">
            <h1>Dokumentationsreoler - gældende i drift</h1>
            <div className="model-page-row docu-drift">
                <div className="model-page-column model-page-column-full">
                    <p>
                        Pension & Sikring <Link to="/error">P&S - Dokumentationsreoler og QLM portal</Link>
                        <br /><br />
                        Arbejdsmarkedets Erhvervsikring <Link to="/error">AES - Dokumentationsreol og QLM portal</Link>
                        <br /><br />
                        Udbetaling Danmark Kommunal <Link to="/error">UDK K - Dokumentationsreoler og QLM portal</Link>
                        <br /><br />
                        Udbetaling Danmark Stat <Link to="/error">UDK S - Dokumentationsreoler og QLM portal</Link>
                        <br /><br />
                        Seniorpension <Link to="/error">Dokumentationsreol og QLM-portal</Link>
                        <br /><br />
                        ATP Koncern <Link to="/error">Tværgående QLM-portal med f.eks. huset med forretningsgange, leverancemodel, ITOM m.m.</Link>
                        <br /><br />
                        BICC <Link to="/error">BICC QLM-portal - Dokumentation fra BICC</Link>
                        <br /><br />
                        <span className="italic-font">PS: Første gang du logger på QLM Portalen vil du blive mødt af et logonvindue - Der er signle Sign on, så du skal blot trykke på "log på"-knappen.</span>
                    </p>

                </div>
                <div className="model-page-column model-page-column-full">
                    <h3>Tværgående dokumentation</h3>
                    <div className="btn-flex-docu">
                        <div className="btn-column">
                            <Link to="/error" className="link-btn-docu">NGDP</Link>
                            <Link to="/error" className="link-btn-docu">PHL Fordelerkomponent</Link>
                            <Link to="/error" className="link-btn-docu">RINA -EESSl</Link>
                        </div>
                        <div className="btn-column">
                            <Link to="/error" className="link-btn-docu">NetCompany - Dokumentation i QLM</Link>
                            <Link to="/error" className="link-btn-docu">Fjernprint Strålfors</Link>
                            <Link to="/error" className="link-btn-docu">Mit Overblik (UDK) </Link>
                        </div>

                        <div className="btn-column">
                            <Link to="/error" className="link-btn-docu">Beriget Grunddata</Link>
                            <Link to="/error" className="link-btn-docu">Kombit</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    )
}