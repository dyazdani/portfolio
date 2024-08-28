import { useState } from "react";
import emailjs from '@emailjs/browser'

const Contact = () => {

    // Public key for EmailJS account
    emailjs.init({
        publicKey: '8Ob5KiX_qZL4sRtAM' 
    })


    const [name, setName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false)
;
    const submit = () => {
        if (name && userEmail && message) {
            // Service ID and Template ID from EmailJS account
            const serviceId = 'service_nw7rhn1'
            const templateId = 'template_14kmy4s'
            
            const templateParams = {
                name,
                userEmail,
                message
            }

            emailjs.send(serviceId, templateId, templateParams)
                .then(response => console.log(response))
                .then(error => console.log(error));

            setName('');
            setUserEmail('');
            setMessage('');
            setEmailSent(true);
        } else {
            alert('Please fill in all fields.');
        }
    }

    return (
        <div id="contact-form">
            <input 
                type="text" 
                placeholder="Your Name"
                value={name}
                onChange={e => setName(e.target.value)} 
            />
            <input 
                type="email" 
                placeholder="Your email address"
                value={userEmail}
                onChange={e => setUserEmail(e.target.value)} 
            />
            <textarea 
                placeholder="Your message"
                value={message}
                onChange={e => setMessage(e.target.value)} 
            />
            <button 
                onClick={(e) => {
                    e.preventDefault();
                    submit();
                }}
            >
                Send Message</button>
            {emailSent && <span>Thank you for your message, we will be in touch in no time!</span>}
        </div>
    )
}

export default Contact;