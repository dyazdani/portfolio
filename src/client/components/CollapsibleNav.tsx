import { 
    Anchor, 
    Avatar, 
    Box, 
    Header, 
    Heading, 
    Menu, 
    Nav, 
    ResponsiveContext 
} from 'grommet'

const CollapsibleNav = () => {
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
                <Avatar 
                    src='/headshot-circle.png'
                    size='medium'
                />
                <Heading 
                    size='small' 
                    margin='xsmall'
                >
                    Dara Yazdani
                </Heading>
            </Box>
            <ResponsiveContext.Consumer>
            {(responsive) =>
                responsive === 'small' ? (
                <Menu
                    label="Menu"
                    items={[  
                    { label: 'Resume', onClick: () => {} },
                    ]}
                />
                ) : (
                <Nav direction="row">
                    <Anchor 
                        href='/dara-yazdani-resume.pdf'
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
