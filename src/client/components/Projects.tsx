import { 
    Box,
    Grommet, 
    Heading, 
    Main,
    Text
} from "grommet";
import theme from "../../theme";
import CollapsibleNav from "./CollapsibleNav";
import TracProject from "./TracProject";
import ZoopProject from "./ZoopProject";
import AvocadoUIProject from "./AvocadoUIProject";

const Projects = () => {

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
                    <Text
                        alignSelf="center"
                        margin="2rem 0"
                    >
                        ---------
                    </Text>
                    <ZoopProject/>
                    <Text
                        alignSelf="center"
                        margin="2rem 0"
                    >
                        ---------
                    </Text>
                    <AvocadoUIProject/>
                </Box>
            </Main>
        </Grommet>
    )
}

export default Projects;