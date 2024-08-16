import { 
    Anchor,  
    Box, 
    Header, 
    Heading, 
    Menu, 
    Nav, 
    ResponsiveContext 
} from 'grommet'
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
                responsive === 'small' ? (
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
                    <NavLink 
                        to="/about"
                    >
                        <Anchor 
                            label="About" 
                        />
                    </NavLink>
                    <NavLink 
                        to="/projects"
                    >
                        <Anchor 
                            label="Projects" 
                        />
                    </NavLink>
                    <Anchor 
                        href='dara-yazdani-resume.pdf'
                        label="Resume"
                        target="_blank" 
                    />
                </Nav>
                )
            }
            </ResponsiveContext.Consumer>
        </Header>
    )
}

export default CollapsibleNav;
