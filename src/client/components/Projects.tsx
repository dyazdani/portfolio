import { 
    Box,
    Button,
    Grommet, 
    Heading, 
    Main,
    ResponsiveContext
} from "grommet";
import theme from "../../theme";
import CollapsibleNav from "./CollapsibleNav";

const Projects = () => {

    const rowButtonBoxStyle = {
        display: "flex",
        flexFlow: "row",
        justifyItems: "center"
    }
    const columnButtonBoxStyle = {
        display: "flex",
        flexFlow: "column",
        alignItems: "center"
    }

    return (
        <Grommet 
            theme={theme} 
            full
        >   
            <Main
            background="#EAD6DF"
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
                            <Box
                            style={size === "small" ? columnButtonBoxStyle : rowButtonBoxStyle}
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
                                    textAlign: "center"
                                }}
                            />
                        </Box>
                        )}
                    </ResponsiveContext.Consumer>
                    
                </Box>
                
            </Main>
        </Grommet>
    )
}

export default Projects;