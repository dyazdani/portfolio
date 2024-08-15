import { 
    Box,
    Button,
    Grommet, 
    Heading, 
    Main,
    ResponsiveContext,
    Image
} from "grommet";
import theme from "../../theme";
import CollapsibleNav from "./CollapsibleNav";

const Projects = () => {

    return (
        <Grommet 
            theme={theme} 
            full
        >   
            <Main
                background="#EAD6DF"
                style={{
                    minHeight: "100vh"
                }}
                overflow="auto"
            >
                <CollapsibleNav/>
                <Box
                    style={{
                        display: "flex",
                        flexFlow: "column",
                        alignItems: "center"
                    }}
                >
                    <Heading
                        level={1}
                    >
                        Projects
                    </Heading>
                    <Heading
                        level={2}
                        margin="0"
                    >
                        Trac
                    </Heading>
                    <Heading
                        level={5} 
                        fill  
                        margin="0"
                        style={{
                            padding: "2rem",
                            textAlign: "center"
                        }}
                    >
                        A single-page web application for tracking goals and updating friends on your progress.
                    </Heading>
                    <ResponsiveContext.Consumer>
                        {size => (
                            <>
                                <Box
                                    style={{
                                        display: "flex",
                                        flexFlow: `${size === "small" ? "column" : "row"}`,
                                        alignItems: "center",
                                        minHeight: "fit-content"
                                    }}
                                    justify="around"
                                >
                                    <Button 
                                        href="https://trac-kl33.onrender.com" 
                                        label="Visit App"
                                        target="_blank"
                                        margin="1rem"
                                        style={{
                                            textAlign: "center"
                                        }}
                                    />
                                    <Button 
                                        href="https://youtu.be/_61FuWa92Wo"
                                        label="Watch Demo"
                                        target="_blank"
                                        margin="1rem"
                                        style={{
                                            textAlign: "center"
                                        }}
                                    />
                                    <Button 
                                        href="https://github.com/dyazdani/trac"
                                        label="View Code"
                                        target="_blank"
                                        margin="1rem"
                                        style={{
                                            textAlign: "center",
                                        }}
                                    />
                                </Box>
                                    <Image 
                                        src="trac-screenshot.png"
                                        style={{
                                            width: "80vw",
                                            padding: "1rem",
                                            maxWidth: "800px"
                                        }}
                                    />
                                
                            </>
                        )}    
                    </ResponsiveContext.Consumer>
                </Box>
            </Main>
        </Grommet>
    )
}

export default Projects;