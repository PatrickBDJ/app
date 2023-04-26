export default function Metodeforretningsprocesser(){
    return (
    <div className="page-top-margin">
        <div className="page-container">
            <h1>Metode for forretningsprocesser</h1>
            <div className="model-page-row">
                    <div className="model-page-column">
                        {/* <h3>Generelt om modeller</h3> */}
                        <p>
                            Som udgangspunkt skal forretningsgange i ATP modelleres i QLM. Dette er besluttet af hensyn til standardisering, effektivisering og compliance.
                            <br /><br />
                            Procesmetoden for dokumentation af forretningsgange angiver et fælles sprog, en ensartet struktur og en ensartet fremgangsmåde for dokumentation af forretningsgange.
                            <br />
                            Metoden understøttes af <span><a href="/">QLM</a></span> og udnytter værktøjets intelligens fx ved genbrug.
                            <br /><br />

                            Formålet med at dokumentere forretningsgange er "at sikre, at arbejdsopgaverne løses som besluttet samt at reducere ATP Koncernens risiko for operationelle fejl og compliance brud."
                            <br /><br />

                            Forretningsgangene skal beskrive og skabe overblik over opgaverne samt identificere risici og beskrive kontroller og forretningsprocesser. Således bidrager forretningsgangene til en ensartet opgaveløsning samt giver en sikker og hurtig indførelse til opgaverne for nye medarbejdere.
                            <br />
                            Se yderligere under: <span><a href="/">Vores ATP/Politikker og retningslinjer/Forretningsgange</a></span>
                        </p>
                    </div>
{/*                     <div className="model-page-column">

                    </div> */}
                </div>
                <div className="model-page-row">
                    <div className="model-page-column">
 {/*                        <h3>Vejledning til QLM</h3> */}
                        <img src={require ('../assets/goats.jpg')} alt="geder" id="test-goats"/>
                        <p className='no-margin-p'><span className='text-underline'>Metoden består af tre elementer:</span></p>
                        <ul>
                            <li>Governance: der afgrænser administration og styring af metoden.</li>
                            <br />
                            <li>Generisk processtruktur: der danner rammerne for den strukturerede opbygning af forretningsprocesser på fastdefinerede procesniveauer og procesoverblik.</li>
                            <br />
                            <li>Procesmodellering: der er en ATP-tilpasset BPMN model og en artefakt procesmetode, der omhandler den visuelle fremstilling af forretningsprocesser.</li>
                        </ul>
                        <p>
                            Metoden omfavner dokumentation af forretningsprocesser fra udvikling eller udbud til drift.
                        </p>

                    </div>
                    <div className="model-page-column">
                        <h3>Vejledning til QLM</h3>
                        <p>
                            <span>
                                <a href="/">Instruktionsvideoer til QLM og GWE </a>
                                (Governance Workflow Engine)
                            </span>
                            <br />
                            <span>
                                <a href="/">QLM opslagsværk </a>
                                (skriftlig vejledning til QLM)
                            </span>
                        </p>
                    </div>
                </div>
                <div className="model-page-row">
                    <div className="model-page-column">
                        <h3>Compliance</h3>
                        <p className='no-margin-p'>Drifts- og projektrisiko har en kvalitetsansvarlig rolle for dokumentation af forretningsgange i:</p>
                        <ul>
                            <li>Administrationsforretningen.</li>
                            <li>Digital Solutions.</li>
                            <li>Corporate Functions & Business Support.</li>
                        </ul>
                        <p>
                            Complianceprocessen er et årligt tjek på gældende processer i drift (PROD). Her sikres det, at det mindst en gang om året dokumenteres, at der leves op til 'Retningslinjer for forretningsgange for ATP Koncernen'. Yderligere information vedr. forretningsgange samt retningslinjer finder du under <span><a href="/">Vores ATP/Politikker og retningslinjer/Forretningsgange.</a></span>
                            <br /><br />
                            Det årlige tjek resulterer i en afrapportering til OROC.
                        </p>
                    </div>
                </div>
            </div>
    </div>
    )
}