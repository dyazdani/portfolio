import { 
    Box,
    Grommet, 
    Heading, 
    Main
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
            >
                <CollapsibleNav/>
                <Heading
                    level={1}
                    alignSelf="center"
                >
                    Projects
                </Heading>
                <Box
                    alignSelf="center"
                    width="90vw"
                    pad={"small"}
                    responsive
                >
                <Heading
                    level={2}
                    style={{
                        marginBottom: "0"
                    }}
                >
                    Trac
                </Heading>
                <Heading
                    level={4} 
                    fill  
                    style={{
                        marginTop: "1rem"
                    }}                 
                >
                    A single-page web application for tracking goals and updating friends on your progress.

                </Heading>
                </Box>

            </Main>
        </Grommet>
    )
}

export default Projects;