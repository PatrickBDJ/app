import { useState } from "react";

const Accordiondisplay = ({question, answer}) => {
    const [isActive, setIsActive] = useState(false)


return(
    <div className="accordion-item">
        <div className="accordion-question" onClick={() => setIsActive(!isActive)}>
            <div>{question}</div>
            <div className="accordion-symbol">{isActive ? '-' : '+'}</div>
        </div>
        {isActive && <div className="accordion-answer">{answer}</div>}
    </div>
)
}

export default Accordiondisplay;