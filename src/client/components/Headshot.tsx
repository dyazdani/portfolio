import { Box, Image } from "grommet";


const Headshot = () => {
    return (
        <Box 
            height="auto" 
            width="auto"
            style={{
                maxHeight: "400px",
            }} 
            responsive={true}
            alignSelf="center"
            gridArea="headshot"
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