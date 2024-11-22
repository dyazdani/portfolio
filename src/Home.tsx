import { 
  Box,
  Button,
  Grommet, 
  Heading, 
  Main,
  ResponsiveContext
} from 'grommet';
import theme from './theme';
import CollapsibleNav from './client/components/CollapsibleNav';
import Headshot from './client/components/Headshot';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <Grommet 
      theme={theme} 
      full
    >   
      <Main
        background="#F8F2F4"
        style={{
          height: "100dvh"
        }}
      >
        <CollapsibleNav></CollapsibleNav>
        <Headshot/>
        <Heading 
          alignSelf='center'
        > 
          Hi, I'm Dara :-)
        </Heading>
        <Heading 
          level={2}
          alignSelf='center'
          textAlign='center'
        >
          I’m a full-stack JavaScript engineer in web.
        </Heading>
        <ResponsiveContext.Consumer>
          {size => (
            <>
              <Box
                style={{
                  display: "flex",
                  flexFlow: `${size === "medium" || size === "small" ? "column" : "row"}`,
                  alignItems: "center",
                  minHeight: "fit-content",
                  minWidth: "fit-content"
                }}
                  justify="around"
                  width="30vw"
                  alignSelf='center'
                  margin="2rem 0"
              >
                <Button 
                  size="large"
                  label="About"
                  margin="1rem"
                  style={{
                    textAlign: "center"
                  }}
                  onClick={() => {
                    navigate('/about');
                  }}
                />
                <Button 
                  size="large"
                  label="Projects"
                  margin="1rem"
                  style={{
                    textAlign: "center"
                  }}
                  onClick={() => {
                    navigate('/projects');
                  }}
                />
                <Button 
                  size="large"
                  href="dara-yazdani-resume.pdf"
                  label="Resume"
                  target='_blank'
                  margin="1rem"
                  style={{
                    textAlign: "center",
                  }}
                />
                <Button 
                  size="large"
                  label="Contact"
                  margin="1rem"
                  style={{
                    textAlign: "center"
                  }}
                  onClick={() => {
                    navigate('/contact');
                  }}
                />
              </Box>
            </>
          )}
        </ResponsiveContext.Consumer>
      </Main>
    </Grommet>
  )
}

export default Home;
