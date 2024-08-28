import { useState } from "react";
import emailjs from '@emailjs/browser'
import { 
    Button,
    Form, 
    FormField, 
    TextArea, 
    TextInput,
    Text
} from "grommet";
import { 
    Mail, 
    User 
} from "grommet-icons";

// Public key for EmailJS account
emailjs.init({
    publicKey: '8Ob5KiX_qZL4sRtAM' 
})

const Contact = () => {
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
        <Form>
            <FormField
                label="Name"
                name="name"
                htmlFor="name"
            >
                <TextInput
                    id="name"
                    name="name"
                    value={name}
                    onChange={e => setName(e.target.value)} 
                />
            </FormField>
            <FormField
                label="Email address"
                name="email"
                htmlFor="email"
            >
                <TextInput
                    id="email"
                    name="email"
                    value={userEmail}
                    onChange={e => setUserEmail(e.target.value)} 
                />
            </FormField>
            <FormField
                label="Your Message"
                name="message"
                htmlFor="message"
            >
                <TextArea
                    id="message"
                    name="message"
                    value={message}
                    onChange={e => setMessage(e.target.value)} 
                />
            </FormField>
            <Button
                primary
                label="Send Message" 
                onClick={(e) => {
                    e.preventDefault();
                    submit();
                }}
            />
            {emailSent && <Text>Thank you for your message, we will be in touch in no time!</Text>}
        </Form>
    )
}

export default Contact;