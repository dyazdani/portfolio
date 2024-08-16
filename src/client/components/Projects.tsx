import { 
    Box,
    Grommet, 
    Heading, 
    Main,
} from "grommet";
import theme from "../../theme";
import CollapsibleNav from "./CollapsibleNav";
import TracProject from "./TracProject";

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
                    <TracProject/>
                </Box>
            </Main>
        </Grommet>
    )
}

export default Projects;