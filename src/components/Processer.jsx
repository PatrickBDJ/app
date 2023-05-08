export default function Processer(){
    return (
    <div /* className="page-top-margin" */>
        <div className='image-zindex'><img src={require('../assets/processer.jpg')} alt="modeller" className='page-top-image' /></div>
        <div className="page-container">
            <h1 className='h1-no-margin-bottom'>Processer</h1>
            <div className="model-page-row">
                <div className="model-page-column model-page-column-full">
{/*                     <h3>Generelt om modeller</h3> */}
                    <p>
                        På denne side finder du beskrivelse af hvordan ATP anvender processer til at forstå vores forretning samt anvendelse af Procestrekanten der i samspil beskriver en løsning for Administrationsforretningens ordninder/ydelser.
                        <br /><br />
                        Nederst finder du beskrivelse af intern governance for datakilder og link til definition af de 7 roller, der håndterer eksterne datakilder.
                    </p>
                </div>
            </div>
            <div className="model-page-row">
                <div className="model-page-column">
                    <h3>Dokumentation af processer</h3>
                    <p className='no-margin-p'>Dokumentation af processer understøtter retningslinjer for dokumentation af forretningsgange i ATP-koncernen. Retningslinjerne udgør den overordnede ramme og grundlag for metoderne til dokumentation af forretningsprocesser.
                    <br /><br />
                    Via <a href="/forretningsgangehuset">Huset - Sådan gør vi... </a>
                    kan du bl.a. finde:
                    </p>
                    <ul className='ul-default'>
                        <li>Forretningsgange der udstilles i procesoverblik pr. ordning/ydelse</li>
                        <li>IT Operating Model (under IT)</li>
                        <li>Cloud godkendelseproces.</li>
                        <li>ATP Leverancemodel, der bl.a. indeholder, metoder, projekt- og udviklingsprocesser og artefakter.</li>
                        <li>Security management m.m.</li>
                    </ul>
                    <p>
                        Administrationsforretningens forretningsprocesser modelleres i QLM og relaterer til relevant dokumentation jf. procestrekanten. Ordninger/ydelsers samlede forretnings- og systemdokumentation udstilles via et tværgående Dokumentationskatalog og en ordningsspecifik Dokumentationsreol. Læs yderligere information under <a href="/dokumentationsreoler">Dokumentationsreoler.</a>
                    </p>
                </div>
                <div className="model-page-column">
                    <h3>Procestrekanten</h3>
                    <p>
                        I ATP anvender vi processer til at dokumentere og forstår vores forretning. Processer visualiserer og beskrivelser de aktiviteter, der gennemføres i ATP fx fra en henvendelse er modtaget til denne henvendelse er behandlet.
                        <br /><br />
                        Procestrekanten viser sammenhængen mellem de forretnings- og IT-vendte artefakter, der i samspil beskriver en løsning. Når ATP forretningsmodellerer er det tredelingen mellem proces, information og funktionalitet, der er i fokus. Denne tredeling er central for vores måde at forstå, beskrive og dokumentere forretningen og de forretningsmæssige behov på.
                        <br /><br />
                        Koblingen af proces, information og funktionalitet sikrer transparens i forretningen og giver bl.a. mulighed for styring og risikominimering ved ændringer i eksisterende løsninger.
                    </p>
                </div>
            </div>
            <div className="model-page-row">
                <div className="model-page-column model-page-column-full">
                    <img src={require('../assets/graph-placeholder.png')} alt="graf stedfortræder" className="test-goats" />
                </div>
            </div>
            <div className="model-page-row">
                <div className="model-page-column model-page-column-full">
                    <h3>Intern governance for datakilder</h3>
                    <p>
                        ATP indlæser store mængder data, og der er store risici for driften og ATP's omdømme forbundet med håndteringen af data. Derfor har det været nødvendigt med en kortlægning af governance for eksterne datakilder, med det formål at skabe overblik, fælles forståelse og definition af de roller, der håndterer eksterne datakilder.
                        <br />
                        Der er afdækket 7 roller og alle  7 roller og definitioner tager afsæt i den eksterne datakilde og ikke i domænet/systemet.
                        <br /><br />
                        Kontaktperson: Hans Christian Jelstrup
                    </p>
                </div>
            </div>
        </div>
    </div>
    )
}