import { 
    Box, 
    Image 
} from "grommet";

const Headshot = () => {
    return (
        <Box 
            height="fit-content" 
            width="fit-content"
            style={{
                maxHeight: "40dvh",
                minWidth: "300px",
                minHeight: "300px"
            }} 
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