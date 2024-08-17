import { 
    Box, 
    Button, 
    Heading, 
    Image,
    List, 
    ResponsiveContext 
} from "grommet";

const AvocadoUIProject = () => {
    return (
        <>
            <Heading
                level={2}
                margin="0"
            >
                Avocado UI
            </Heading>
            <Heading
                level={4} 
                fill  
                margin="0"
                style={{
                    padding: "2rem",
                    textAlign: "center"
                }}
            >
                A React form component library for web-based projects.
            </Heading>
            <ResponsiveContext.Consumer>
                {size => (
                    <>
                        <Box
                            style={{
                                display: "flex",
                                flexFlow: `${size === "medium" || size === "small" || size === "small" ? "column" : "row"}`,
                                alignItems: "center",
                                minHeight: "fit-content"
                            }}
                            justify="around"
                        >
                            <Button 
                                href="https://bit.ly/avocadoui" 
                                label="Visit Storybook"
                                target="_blank"
                                margin="1rem"
                                style={{
                                    textAlign: "center"
                                }}
                            />
                            <Button 
                                href="https://github.com/dyazdani/avocado-ui"
                                label="View Code"
                                target="_blank"
                                margin="1rem"
                                style={{
                                    textAlign: "center",
                                }}
                            />
                        </Box>
                        <Image 
                            src="avocado-ui-components.png"
                            style={{
                                width: "80vw",
                                padding: "1rem",
                                maxWidth: "800px"
                            }}
                        />
                        <Heading
                            level={3}
                        >
                            Built with:
                        </Heading>
                        
                        {size === "medium" || size === "small" ? 
                            (
                                <List
                                    data={[
                                        {name: "JavaScript"},
                                        {name: "TypeScript"},
                                        {name: "React"},
                                        {name: "HTML5"},
                                        {name: "CSS3"},
                                        {name: "Vite"},
                                        {name: "Storybook"},
                                        {name: "Jest"}
                                    ]}
                                    margin="1rem"
                                    alignSelf="center"
                                />              
                            ) : (
                                <Box
                                    style={{
                                        display: "flex",
                                        flexFlow: "row",
                                        alignItems: "start",
                                        minHeight: "fit-content"
                                    }}
                                    width="fit-content"
                                >
                                    <List
                                        data={[
                                            {name: "JavaScript"},
                                            {name: "TypeScript"},
                                            {name: "React"},
                                            {name: "HTML5"},
                                        ]}
                                        margin="1rem"
                                    />
                                    <List
                                        data={[
                                            {name: "CSS3"},
                                            {name: "Vite"},
                                            {name: "Storybook"},
                                            {name: "Jest"}
                                        ]}
                                        margin="1rem"
                                    />
                                </Box>      
                            )
                        }
                    </>
                )}    
            </ResponsiveContext.Consumer>
        </>
    )
}

export default AvocadoUIProject;