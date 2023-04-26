import Accordiondisplay from "./Accordiondisplay"

export default function Accordion(){
    const accordionData= 
    [
        {
        question: 'Hvordan skifter jeg fra basen til development på portalen?',
        answer: <p className="accordion-answer-p">• Åbn portal <br /><br />
        • Via Huset finder du relevant proces <br /><br />
        • Oppe I højre hjørne ses et ikon med en
        person, tryk på denne<br /><br />
        • Klik på ’blyant’ ud fra ’Base Configuration’<br /><br />
        • Skift til Development
        </p>
        },
        {
        question: 'Hvordan indsætter man link i beskrivelsen af aktiviteter?',
        answer: <p className="accordion-answer-p">Højre klik på aktivitet og klik ”Open”. Vælg describe ude til venstre i pop up vinduet. <br /><br /> Højre klik inde i beskrivelsesfeltet og vælg ”insert link”. Scroll derefter ned og find external doc. Højre klik på external document, vælg "new", navngiv derefter link og klik "OK". <br /><br /> Højre klik derefter på det nyoprettede link og klik open. Vælg File details til venstre i pop up vinduet og indsæt link i ”File Name”. Klik derefter "OK" og linket er indsat.</p>
        },
        {
        question: 'Hvilken licens skal jeg bruge?',
        answer: <p className="accordion-answer-p">Først og fremmest skal du vide hvilket repository du skal have adgang til. <br /><br />Tilhører du Corporate functions, Business Support eller Digital Solutions har du behov at vælge licens til ATP Koncern. <br /><br /> Tilhører du P&S vælger du licens til ABP. Tilhøre du UDK Kommunal, så vælger du licens til UDK K og på samme måde hvis du tilhøre UDK Stat eller Senior Pension, så vælger du licens hvor deres navne fremgår. <br /><br /> Derefter skal du have afklaret hvad du skal kunne inde i QLM. Skal du kun kunne opdatere beskrivelser, så vælger du ”QLM_X_Web-rediger XX”, XX er for det område du tilhøre. <br /><br /> Skal du derimod kunne ændre/opdatere processer, så vælger du ”QLM_X_Architect XX”, XX er for det område du tilhøre.</p>
        },
        {
        question: 'Hvordan fungerer GWE?',
        answer: <p className="accordion-answer-p">Governance Workflow Engine er en komponent, der er tilføjet i QLM X og har til formål at styre ændringsprocessen for udvalgte diagrammer. <br /><br /> GWE sikrer, at de korrekte personer godkender/reviewer de korrekte diagrammer indenfor de korrekte tidspunkter. <br /><br /> En gang årligt skal alle forretningsgange opdateres/godkendes. <br /><br /> Med GWE åbnes der for editering af diagrammer og aktivitetsbeskrivelser via portal, med redigeringsrettigheder, der er begrænset til de roller, som er angivet på det enkelte diagram.</p>
        },
        {
        question: 'Hvordan laver jeg et link mellem to processer (bridge)?',
        answer: <p className="accordion-answer-p">Bridges anvendes til at forbinde to eller flere løsningsflows, hvor output fra det ene løsningsflow er input til det andet. <br /><br /> Link til video om {/* <br /> */}<span className="accordion-link"><a href="https://rise.articulate.com/share/7NiR6lWwsBBcbifSWPOuezZ-WWY488qH#/lessons/s-RDfIz91vnQICn6e2x6c535Yx3Wo9Yc" target="_blank" rel="noopener noreferrer">Bridges</a></span></p>
        }
    ]


    

    return (
    <div>
        <div className="faq-header">
            <h2>FAQ - Hjælp</h2>
        </div>
        <div className="accordion">
            {accordionData.map (({question, answer}) =>(
                <Accordiondisplay key={question} question={question} answer={answer} />
            ))}
        </div>
    </div>

    )
}