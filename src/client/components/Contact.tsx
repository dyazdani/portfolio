import { useState } from "react";
import emailjs from '@emailjs/browser'
import { 
    Button,
    Form, 
    FormField, 
    TextArea, 
    TextInput,
    Text,
    Main,
    Grommet,
    Box
} from "grommet";
import CollapsibleNav from "./CollapsibleNav";
import theme from "../../theme";

// Public key for EmailJS account
emailjs.init({
    publicKey: '8Ob5KiX_qZL4sRtAM' 
})

const isValidEmail = (email: string) => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(String(email).toLowerCase())
}

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
        <Grommet 
            theme={theme} 
            full
        >   
            <Main
                background="#EAD6DF"
                style={{
                height: "100dvh"
                }}
            >
                <CollapsibleNav/>
                <Box
                    alignSelf="center"
                    width="40vw"
                >
                    <Form
                        onChange={() => setEmailSent(false)}
                    >
                        <FormField
                            label="Name"
                            name="name"
                            htmlFor="name"
                        >
                            <TextInput
                                required
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
                            error={userEmail && !isValidEmail(userEmail) ? 'Please enter email address with valid format, e.g., "test@example.com"' : ""}
                        >
                            <TextInput
                                required
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
                                rows={4}
                                required
                                id="message"
                                name="message"
                                style={{
                                    backgroundColor: "white"
                                }}
                                value={message}
                                onChange={e => setMessage(e.target.value)} 
                            />
                        </FormField>
                        <Box
                            margin="0 auto"
                            width="fit-content"
                        >
                            <Button
                                primary
                                success={emailSent}
                                label="Submit" 
                                onClick={(e) => {
                                    e.preventDefault();
                                    submit();
                                }}
                                disabled={!name || !userEmail || !message || !isValidEmail(userEmail)}
                            />
                        </Box>
                        
                        {emailSent && 
                            <Box
                                margin="1rem auto 0 auto"
                            >
                                <Text 
                                    textAlign="center"
                                >
                                    Thank you for your message!
                                </Text>
                            </Box>  
                        }
                    </Form>
                </Box>    
            </Main>
        </Grommet>
    )
}

export default Contact;