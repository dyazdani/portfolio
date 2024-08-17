import { 
    Anchor,  
    Box, 
    Header, 
    Heading, 
    Menu, 
    Nav, 
    ResponsiveContext 
} from 'grommet'
import { Github, Linkedin, Youtube } from 'grommet-icons';
import { 
    NavLink, 
    useNavigate 
} from 'react-router-dom';

const CollapsibleNav = () => {
    const navigate = useNavigate();
    return (
        <Header 
            background="dark-1" 
            pad="small"
            style={{
                position: "sticky",
                top: "0px"
            }}
        >
            <Box 
                direction="row" 
                align="center" 
                gap="small"
            >
                <NavLink to="/">
                    <Heading 
                        size='small' 
                        margin='xsmall'
                    >
                        <Anchor>Dara Yazdani</Anchor>
                    </Heading>
                </NavLink>
            </Box>
            <ResponsiveContext.Consumer>
            {(responsive) =>
                responsive === 'medium' || responsive === 'small' ? (
                <Menu
                    label="Menu"
                    items={[
                        { 
                            label: 'About', 
                            onClick: () => {
                                navigate('/about');
                            }
                        },
                        { 
                            label: 'Projects', 
                            onClick: () => {
                                navigate('/projects');
                            }
                        },
                        { 
                            label: 'Resume', 
                            href: 'dara-yazdani-resume.pdf',
                            target: "_blank"
                        }
                    ]}
                />
                ) : (
                <Nav 
                    direction="row"
                >
                    <Anchor 
                        icon={<Linkedin/>} 
                        href='https://www.linkedin.com/in/darayazdani/'  
                        target='_blank'
                        style={{
                            padding: "6px"
                        }} 
                    />
                    <Anchor 
                        icon={<Github/>} 
                        href='https://github.com/dyazdani'  
                        target='_blank'
                        style={{
                            padding: "6px"
                        }} 
                    />
                    <Anchor 
                        icon={<Youtube/>} 
                        href='https://youtu.be/_61FuWa92Wo' 
                        target='_blank'
                        style={{
                            padding: "6px"
                        }} 
                        margin="0 2rem 0 0"
                    />
                    <NavLink 
                        to="/about"
                    >
                        <Anchor 
                            label="About"
                            style={{
                                padding: "6px"
                            }} 
                        />
                    </NavLink>
                    <NavLink 
                        to="/projects"
                    >
                        <Anchor 
                            label="Projects"
                            style={{
                                padding: "6px"
                            }}  
                        />
                    </NavLink>
                    <Anchor 
                        href='dara-yazdani-resume.pdf'
                        label="Resume"
                        target="_blank" 
                        style={{
                            padding: "6px"
                        }} 
                    />
                </Nav>
                )
            }
            </ResponsiveContext.Consumer>
        </Header>
    )
}

export default CollapsibleNav;
