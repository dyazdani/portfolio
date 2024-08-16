import { 
    Box, 
    Text ,
    Image
} from "grommet";

interface TechLogoProps {
    label: string
    source: string
    gridArea: string
}

const TechLogo = ({
    label, 
    source,
    gridArea
}: TechLogoProps) => {
    return (
        <Box
            style={{
                display: "flex",
                flexFlow: "column",
                alignItems: "center"
            }}
            gridArea={gridArea}
            responsive
            pad=".5rem"
        >
            <Image
                alt={label}
                src={source}
                style={{
                    maxWidth: "75px",
                    minWidth: "50px"
                }}
            />
            <Text
                margin="1rem 0 0 0 "
            >
                {label}
            </Text>
            
        </Box>
    )
}

export default TechLogo;