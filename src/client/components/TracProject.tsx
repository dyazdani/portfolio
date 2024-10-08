import { 
    Box, 
    Button, 
    Heading, 
    Image, 
    List, 
    ResponsiveContext 
} from "grommet";

const TracProject = () => {
    return (
        <>
            <Heading
                level={2}
                margin="0"
            >
                Trac
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
                A fully responsive full-stack single-page web application for tracking goals and updating friends on your progress.
            </Heading>
            <ResponsiveContext.Consumer>
                {size => (
                    <>
                        <Box
                            style={{
                                display: "flex",
                                flexFlow: `${size === "medium" || size === "small" ? "column" : "row"}`,
                                alignItems: "center",
                                minHeight: "fit-content"
                            }}
                            justify="around"
                        >
                            <Button 
                                href="https://trac-kl33.onrender.com" 
                                label="Visit App"
                                target="_blank"
                                margin="1rem"
                                style={{
                                    textAlign: "center"
                                }}
                            />
                            <Button 
                                href="https://youtu.be/_61FuWa92Wo"
                                label="Watch Demo"
                                target="_blank"
                                margin="1rem"
                                style={{
                                    textAlign: "center"
                                }}
                            />
                            <Button 
                                href="https://github.com/dyazdani/trac"
                                label="View Code"
                                target="_blank"
                                margin="1rem"
                                style={{
                                    textAlign: "center",
                                }}
                            />
                        </Box>
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
                                        {name: "Node.js"},
                                        {name: "Postgres"},
                                        {name: "Prisma"},
                                        {name: "Redux"},
                                        {name: "Redux Toolkit"},
                                        {name: "Express.js"},
                                        {name: "Chakra UI"},
                                        {name: "Vite"},
                                        {name: "Knock.js"},
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
                                            {name: "Node.js"}
                                        ]}
                                        margin="1rem"
                                    />
                                    <List
                                        data={[
                                            {name: "Postgres"},
                                            {name: "Prisma"},
                                            {name: "Redux"},
                                            {name: "Redux Toolkit"}
                                        ]}
                                        margin="1rem"
                                    />
                                    <List
                                        data={[
                                            {name: "Express.js"},
                                            {name: "Chakra UI"},
                                            {name: "Vite"},
                                            {name: "Knock.js"}
                                        ]}
                                        margin="1rem"
                                    />
                                </Box>      
                            )
                        }
                        <Image 
                            src="trac-screenshot.png"
                            style={{
                                width: "80vw",
                                padding: "1rem",
                                maxWidth: "800px"
                            }}
                        />
                    </>
                )}    
            </ResponsiveContext.Consumer>
        </>
    )
}

export default TracProject;