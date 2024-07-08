import { 
    Anchor, 
    Avatar, 
    Box, 
    Header, 
    Heading,  
    Nav 
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
            <Nav direction="row">
                <Anchor 
                    href="/public/dara-yazdani-résumé.pdf" 
                    label="Résumé" 
                    download
                />
            </Nav>
        </Header>
    )
}

export default CollapsibleNav;
