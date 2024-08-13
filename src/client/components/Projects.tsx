import { 
    Grommet, 
    Main, 
    Paragraph 
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
                <Paragraph>Projects</Paragraph>
            </Main>
        </Grommet>
    )
}

export default Projects;