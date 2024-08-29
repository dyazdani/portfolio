import { useState, useRef } from "react";
import emailjs from '@emailjs/browser'
import ReCAPTCHA from 'react-google-recaptcha';
import { 
    Button,
    Form, 
    FormField, 
    TextArea, 
    TextInput,
    Text,
    Main,
    Grommet,
    Box,
    Heading
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
    const [emailSent, setEmailSent] = useState(false);
    const [captchaValue, setCaptchaValue] = useState<null | string>(null);

    const recaptchaRef = useRef<ReCAPTCHA>(null);

    const submit = () => {
        if (name && userEmail && message && captchaValue) {
            // Service ID and Template ID from EmailJS account
            const serviceId = 'service_nw7rhn1'
            const templateId = 'template_14kmy4s'

            const templateParams = {
                name,
                userEmail,
                message,
                'g-recaptcha-response': captchaValue
            }

            emailjs.send(serviceId, templateId, templateParams)
                .then(response => console.log(response))
                .then(error => console.log(error));

            setName('');
            setUserEmail('');
            setMessage('');
            setCaptchaValue('');
            setEmailSent(true);

            // reset reCAPTCHA
            recaptchaRef.current?.reset()
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
                background="#F8F2F4"
                style={{
                height: "100dvh"
                }}
            >
                <CollapsibleNav/>
                <Box
                    alignSelf="center"
                    width="40vw"
                    style={{
                        minWidth: "300px"
                    }}
                >
                    <Heading 
                        level={1}
                        alignSelf="center"
                    >
                        Contact
                    </Heading>
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
                                focusIndicator
                            />
                        </FormField>
                        <FormField
                            label="Email address"
                            name="email"
                            htmlFor="email"
                            error={userEmail && !isValidEmail(userEmail) ? 'Enter valid email address - "test@example.com"' : ""}
                        >
                            <TextInput
                                required
                                id="email"
                                name="email"
                                value={userEmail}
                                onChange={e => setUserEmail(e.target.value)} 
                                focusIndicator
                            />
                        </FormField>
                        <FormField
                            label="Your message"
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
                                focusIndicator
                            />
                        </FormField>
                        <Box
                            margin="0 auto 1rem auto"
                            width="fit-content"
                        >
                            <ReCAPTCHA
                                ref={recaptchaRef}
                                sitekey="6LeveDEqAAAAAPXEgY3mBl57uXHaNr-h9b6AvxJT"
                                onChange={(value: string | null) => setCaptchaValue(value)}
                                onExpired={() => setCaptchaValue('')}
                            />
                        </Box>

                        <Box
                            margin="0 auto 1rem auto"
                            width="fit-content"
                        >
                            <Button
                                primary
                                success={emailSent}
                                messages={{
                                    "success": "contact message sent successfully"
                                }}
                                label="Submit" 
                                onClick={(e) => {
                                    e.preventDefault();
                                    submit();
                                }}
                                disabled={!name || !userEmail || !message || !isValidEmail(userEmail) || !captchaValue}
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