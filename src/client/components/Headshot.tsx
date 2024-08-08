import { Box, Image } from "grommet";

const Headshot = () => {
    return (
        <Box 
            height="large" 
            width="large" 
            responsive={true}
            alignSelf="center"
        >
            <Image
                fit="contain"
                src="headshot-circle.png"
                margin="medium"
                alt="Dara Yazdani headshot"
            />
        </Box>
    )
    
}

export default Headshot;