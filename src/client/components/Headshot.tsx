import { Box, Image } from "grommet";

const Headshot = () => {
    return (
        <Box height="medium" width="medium">
            <Image
                fit="cover"
                src="headshot.jpg"
            />
        </Box>
    )
    
}

export default Headshot;