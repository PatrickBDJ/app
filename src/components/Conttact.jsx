import {useRef} from 'react'
import emailjs from 'emailjs-com'
import {CgProfile} from 'react-icons/cg'
import toast, { Toaster } from 'react-hot-toast';


export default function Contact(){
    const form = useRef()

    /* const notify = () => toast('Here is your toast.'); */

    const sendEmail = (e) => {
        e.preventDefault()
        toast.success('Tak for din henvendelse!');

        emailjs.sendForm(
            "service_io7sks3",
            "template_2tw00fu",
            form.current,
            "JNgg3-Ktxbod_bj9p"

/*             process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_USER_ID */
        ).then(
            result => console.log(result.text),
            error => console.log(error.text)
        )
        e.target.reset()
    }
    

    return (
    <div className="page-top-margin">
        <div className='contact-page-body'>
            <div className="contact-page-content">
                
                <h1>Kontakt os</h1>
                <div className='contact-form-div'>
                    <div className='contact-form'>
                        <form ref={form} onSubmit={sendEmail} className='contact-form-row'>
                            <h2>E-mail os</h2>
                            <div className='contact-form-column'>
                                {/* <label>Dit navn:</label> */}
                                <input type="text" placeholder='Indtast navn:' name="bruger_navn" required />
                            </div>
                            <div className='contact-form-column'>
                                {/* <label>Din e-mail:</label> */}
                                <input type="email" placeholder='Indtast e-mail:' name="bruger_email" required />
                            </div>
                            <div className='contact-form-column'>
                                {/* <label>Besked:</label> */}
                                <textarea name="besked" placeholder='Skriv din besked:' cols="30" rows="10"></textarea>
                            </div>
                            <div className='contact-form-column'>
                                <button type='submit' value="Send">Send</button>
                                <Toaster />
                            </div>
                        </form>
                    </div>
                    <div className='contact-form-map'>
                        <iframe title="google-map-embed" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2234.8733147310363!2d12.353961341830962!3d55.934234073263674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4652475a6b4a22b7%3A0x37fb49983e1353f0!2sKongens%20V%C3%A6nge%208%2C%203400%20Hiller%C3%B8d!5e0!3m2!1sda!2sdk!4v1681903809633!5m2!1sda!2sdk"></iframe>
                    </div>
                </div>
            </div>

            <div className="contact-information">
            {/* Person 1 */}
                <div className="contact-person">
                    <div className='contact-person-image'>
                        <CgProfile />
                    </div>
                    <div className='contact-person-name'>
                        <h3>Person 1</h3>
                    </div>
                    <div className='contact-person-information'>
                        <a href="tel: 12345678">12 34 56 78</a> <br />
                        <a href="mailto: mail@email.com">mail@gmail.com</a>
                    </div>
                </div>

            {/* Person 2 */}
                <div className="contact-person">
                    <div className='contact-person-image'>
                        <CgProfile />
                    </div>
                    <div className='contact-person-name'>
                        <h3>Person 2</h3>
                    </div>
                    <div className='contact-person-information'>
                        <a href="tel: 12345678">12 34 56 78</a> <br />
                        <a href="mailto: mail@email.com">mail@gmail.com</a>
                    </div>

            {/* Person 3 */} 
                </div>
                <div className="contact-person">
                    <div className='contact-person-image'>
                        <CgProfile />
                    </div>
                    <div className='contact-person-name'>
                        <h3>Person 3</h3>
                    </div>
                    <div className='contact-person-information'>
                        <a href="tel: 12345678">12 34 56 78</a> <br />
                        <a href="mailto: mail@email.com">mail@gmail.com</a>
                    </div>
                    
                </div>
                
            </div>
        </div>
    </div>
    )
}