import { 
    Box, 
    Image 
} from "grommet";

const Headshot = () => {
    return (
        <Box 
            style={{
                minWidth: "300px",
                minHeight: "400px"
            }} 
            alignSelf="center"
            gridArea="headshot" 
        >
            <Image
                fit="contain"
                src="headshot-400px.png"
                margin="medium"
                alt="Dara Yazdani headshot"
            />
        </Box>
    )
    
}

export default Headshot;