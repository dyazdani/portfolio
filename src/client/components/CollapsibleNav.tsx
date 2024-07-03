import { Anchor, Avatar, Box, Header, Heading, Menu, Nav, ResponsiveContext } from 'grommet'

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
                    src={'headshot-circle.png'} 
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
                    { label: 'Home', onClick: () => {} },
                    { label: 'About', onClick: () => {} },
                    { label: 'Projects', onClick: () => {} },    
                    { label: 'Resume', onClick: () => {} },
                    { label: 'Contact', onClick: () => {} },
                    ]}
                />
                ) : (
                <Nav direction="row">
                    <Anchor href="#" label="Home" />
                    <Anchor href="#" label="About" />
                    <Anchor href="#" label="Projects" />
                    <Anchor href="#" label="Resume" />
                    <Anchor href="#" label="Contact" />
                </Nav>
                )
            }
            </ResponsiveContext.Consumer>
        </Header>
    )
}

export default CollapsibleNav;
