import { Link } from "react-router-dom"

export default function Dokumentationudvikling(){
    return (
        <div className="page-top-margin">
        <div className="page-container docu-container">
            <h1>Dokumentation - udvikling på vej</h1>
            <div className="model-page-row docu-drift">
                <div className="model-page-column model-page-column-full">
                    <h3>Pension og Sikring</h3>
                        <p className="no-margin-p">
                        <Link to="/error">Her</Link> finder du alle dokumentationsreoler for P&S i QLM Portal for P&S.
                        </p>
                        <br />
                        <h3>Pension og Sikring</h3>
                        <p className="no-margin-p">
                        <Link to="/error">Her</Link> finder du AES's dokumentationsreol i QLM Portal for AES.
                        </p>
                        <br />
                        <p className="no-margin-p">
                        <Link to="/error">Her</Link> finder du alle dokumentationsreoler for UDK K i QLM Portal for UDK K.
                        </p>
                        <br />
                        <p className="no-margin-p">
                        <Link to="/error">Her</Link> finder du alle dokumentationsreoler for UDK Stat i QLM Portal for UDK Stat.
                        </p>
                        <br />
                        <p className="no-margin-p">
                        <Link to="/error">Her</Link> finder du dokumentatitionsreol og QLM Portal.
                        </p>
                        <br />
                        <p className="no-margin-p">
                        <Link to="/error">Her</Link> finder du alle dokumentationsreoler i ATP Koncern (RINA) i QLM Portal for ATP Koncern.
                        </p>
                        <br />
                        <p className="no-margin-p">
                        <Link to="/error">Her</Link> finder du alle dokumentationsreoler i BICC i QLM Portal for BICC.
                        </p>
                        <br />
                        <p className="no-margin-p">
                        <Link to="/error">Her</Link> finder du alle dokumentationsreoler fra NetCompany lagt i QLM (Linket er til Basen, da dokumentation er importeret fra NetCompany og ikke redigeres i ATP's QLM).
                        </p>
                        <br />

                </div>
                <div className="model-page-column model-page-column-full">
                    <h3>Tværgående dokumentation</h3>
                    <div>
                        <p>
                            Der henvises til siden med godkendt, gældende dokumentation i drift: 
                            <br />
                            <Link to="/dokumentationdrift">Dokumentation - gældende i drift</Link>
                            <br /><br />
                            <span className="italic-font">PS: Første gang du logger på QLM Portalen vil du blive mødt af et logonvindue - Der er single Sign on, så du skal blot trykke på "log på"-knappen.</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}