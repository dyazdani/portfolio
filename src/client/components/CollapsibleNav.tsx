import { 
    Anchor, 
    Avatar, 
    Box, 
    Header, 
    Heading,  
    Nav 
} from 'grommet'
import resume from '../../documents/dara-yazdani-résumé.pdf';


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
                    href={resume} 
                    label="Résumé" 
                    target='_blank'
                />
            </Nav>
        </Header>
    )
}

export default CollapsibleNav;
