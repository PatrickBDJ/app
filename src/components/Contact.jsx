import {useState} from 'react'

export default function Contact(){
    /* const FORM_ENDPOINT = "" */ // udfyldes fra React e-mail programmet Mathias anvendte

        const [submitted, setSubmitted] = useState(false)
        const handleSubmit = () => {
            setTimeout (() => {
                setSubmitted(true)
            }, 100)
        }
        if (submitted) {
            <>
                <h2>Tak for din henvendelse!</h2>
                <p>Vi kontakter dig snarest muligt.</p>
            </>            
        }
    console.log({setSubmitted})

    return (
    <div className="page-top-margin">
        <div className='contact-form-div'>
            <h1>Kontakt os</h1>
            <form id="contact-form" /* action={FORM_ENDPOINT} */ onSubmit={handleSubmit} method="post" target="_blank">
                <div>
                    <label>Dit navn:</label>
                    <input type="text" placeholder='Indtast navn:' name="name" required />
                </div>
                <div>
                    <label>Din e-mail:</label>
                    <input type="email" placeholder='Indtast e-mail:' name="email" required />
                </div>
                <div>
                    <label>Besked:</label>
                    <input type="text" placeholder='Skriv din besked:' name="besked" required />
                </div>
                <div>
                    <button type='submit' value="Send">Send beskeden</button>
                </div>
            </form>
        </div>

        <div className="contact-information">
            <div><h3>Person 1</h3></div>
            <div><h3>Person 2</h3></div>
        </div>
    </div>

    )
}