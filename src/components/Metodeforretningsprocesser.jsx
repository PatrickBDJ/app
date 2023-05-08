export default function Metodeforretningsprocesser(){
    return (
    <div /* className="page-top-margin" */>
        <div className='image-zindex'><img src={require('../assets/metodeforforretningsprocesser.jpg')} alt="modeller" className='page-top-image' /></div>
        <div className="page-container">
            <h1 className='h1-no-margin-bottom'>Metode for forretningsprocesser</h1>
            <div className="model-page-row">
                    <div className="model-page-column model-page-column-full">
                        {/* <h3>Generelt om modeller</h3> */}
                        <p>
                            Som udgangspunkt skal forretningsgange i ATP modelleres i QLM. Dette er besluttet af hensyn til standardisering, effektivisering og compliance.
                            <br /><br />
                            Procesmetoden for dokumentation af forretningsgange angiver et fælles sprog, en ensartet struktur og en ensartet fremgangsmåde for dokumentation af forretningsgange.
                            <br />
                            Metoden understøttes af <a href="/qlm">QLM</a> og udnytter værktøjets intelligens fx ved genbrug.
                            <br /><br />

                            Formålet med at dokumentere forretningsgange er "at sikre, at arbejdsopgaverne løses som besluttet samt at reducere ATP Koncernens risiko for operationelle fejl og compliance brud."
                            <br /><br />

                            Forretningsgangene skal beskrive og skabe overblik over opgaverne samt identificere risici og beskrive kontroller og forretningsprocesser. Således bidrager forretningsgangene til en ensartet opgaveløsning samt giver en sikker og hurtig indførelse til opgaverne for nye medarbejdere.
                            <br />
                            Se yderligere under: <a href="/error">Vores ATP/Politikker og retningslinjer/Forretningsgange</a>
                        </p>
                    </div>
{/*                     <div className="model-page-column">

                    </div> */}
                </div>
                <div className="model-page-row no-bottom-margin">
                    <div className="model-page-column no-bottom-margin">
 {/*                        <h3>Vejledning til QLM</h3> */}
                        <div>
                            <img src={require ('../assets/venn-diagram.jpg')} alt="venn diagram" className="test-goats"/>
                        </div>
                    </div>
                    <div className="model-page-column no-bottom-margin">
                        <div>
                            <p className='no-margin-p'><span className='text-underline'>Metoden består af tre elementer:</span></p>
                            <ul className='ul-default'>
                                <li>Governance: der afgrænser administration og styring af metoden.</li>
                                <br />
                                <li>Generisk processtruktur: der danner rammerne for den strukturerede opbygning af forretningsprocesser på fastdefinerede procesniveauer og procesoverblik.</li>
                                <br />
                                <li>Procesmodellering: der er en ATP-tilpasset BPMN model og en artefakt procesmetode, der omhandler den visuelle fremstilling af forretningsprocesser.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="model-page-row">
                    <div className="model-page-column model-page-column-full">
                            <p className='no-margin-p'>
                                Metoden omfavner dokumentation af forretningsprocesser fra udvikling eller udbud til drift.
                            </p>
                    </div>
                </div>
                <div className="model-page-row">
                    <div className="model-page-column">
                        <h3>Vejledning til QLM</h3>
                        <p>
                            
                                <a href="https://rise.articulate.com/share/7NiR6lWwsBBcbifSWPOuezZ-WWY488qH#/" target="_blank" rel="noreferrer">Instruktionsvideoer til QLM og GWE </a>
                                (Governance Workflow Engine)
                            
                            <br /><br />
                            
                                <a href="https://articulateusercontent.com/rise/courses/LgL_xM-6Ku7rxYzZ_HB7ssFoOESaj2Hj/4LMX_OW2PhaVIMMj-QLM%2520vejledning.pdf" target="_blank" rel="noreferrer">QLM opslagsværk </a>
                                (skriftlig vejledning til QLM)
                            
                        </p>
                    </div>
                </div>
                <div className="model-page-row">
                    <div className="model-page-column model-page-column-full">
                        <h3>Compliance</h3>
                        <p className='no-margin-p'>Drifts- og projektrisiko har en kvalitetsansvarlig rolle for dokumentation af forretningsgange i:</p>
                        <ul className='ul-default'>
                            <li>Administrationsforretningen.</li>
                            <li>Digital Solutions.</li>
                            <li>Corporate Functions & Business Support.</li>
                        </ul>
                        <p>
                            Complianceprocessen er et årligt tjek på gældende processer i drift (PROD). Her sikres det, at det mindst en gang om året dokumenteres, at der leves op til 'Retningslinjer for forretningsgange for ATP Koncernen'. Yderligere information vedr. forretningsgange samt retningslinjer finder du under <a href="/error">Vores ATP/Politikker og retningslinjer/Forretningsgange.</a>
                            <br /><br />
                            Det årlige tjek resulterer i en afrapportering til OROC.
                        </p>
                    </div>
                </div>
            </div>
    </div>
    )
}