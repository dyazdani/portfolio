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
    Github, 
    Linkedin, 
    Youtube 
} from 'grommet-icons';
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
            {(size) => 
                size === 'small' ? (
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
                            },
                            { 
                                label: 'Contact', 
                                onClick: () => {
                                    navigate('/contact');
                                }
                            },
                            { 
                                icon: <Linkedin/>,
                                href: 'https://www.linkedin.com/in/darayazdani/' ,
                                target: "_blank",
                                alignSelf: "center"
                            },
                            { 
                                icon: <Github/>, 
                                href:"https://github.com/dyazdani", 
                                target: "_blank",
                                alignSelf: "center"
                            },
                            { 
                                icon: <Youtube/>, 
                                href: "https://youtu.be/_61FuWa92Wo",
                                target: "_blank",
                                alignSelf: "center"
                            },
                        ]}
                    />
                ) : size === "medium" ? (
                <Nav 
                    direction="row"
                >
                    <Anchor 
                        icon={<Linkedin/>} 
                        href='https://www.linkedin.com/in/darayazdani/'  
                        target='_blank'
                        style={{
                            padding: "6px",
                            alignSelf: "center"
                        }} 
                    />
                    <Anchor 
                        icon={<Github/>} 
                        href='https://github.com/dyazdani'  
                        target='_blank'
                        style={{
                            padding: "6px",
                            alignSelf: "center"
                        }} 
                    />
                    <Anchor 
                        icon={<Youtube/>} 
                        href='https://youtu.be/_61FuWa92Wo' 
                        target='_blank'
                        style={{
                            padding: "6px",
                            alignSelf: "center"
                        }} 
                    />
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
                            },
                            { 
                                label: 'Contact', 
                                onClick: () => {
                                    navigate('/contact');
                                }
                            },
                            { 
                                icon: <Linkedin/>,
                                href: 'https://www.linkedin.com/in/darayazdani/' ,
                                target: "_blank",
                                alignSelf: "center",
                            },
                            { 
                                icon: <Github/>, 
                                href:"https://github.com/dyazdani", 
                                target: "_blank",
                                alignSelf: "center"
                            },
                            { 
                                icon: <Youtube/>, 
                                href: "https://youtu.be/_61FuWa92Wo",
                                target: "_blank",
                                alignSelf: "center"
                            },
                        ]}
                    />
                </Nav>
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
                        <NavLink 
                            to="/contact"
                        >
                            <Anchor 
                                label="Contact"
                                style={{
                                    padding: "6px"
                                }}  
                            />
                        </NavLink>
                    </Nav>
                )}
            </ResponsiveContext.Consumer>
        </Header>
    )
}

export default CollapsibleNav;
