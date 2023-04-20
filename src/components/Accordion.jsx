import Accordiondisplay from "./Accordiondisplay"

export default function Accordion(){
    const accordionData= 
    [
        {
        question: 'Spørgsmål 1',
        answer: 'Svar 1'
        },
        {
        question: 'Spørgsmål 2',
        answer: 'Svar 2'
        },
        {
        question: 'Spørgsmål 3',
        answer: 'Svar 3'
        },
        {
        question: 'Spørgsmål 4',
        answer: 'Svar 4'
        },
        {
        question: 'Spørgsmål 5',
        answer: 'Svar 5'
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