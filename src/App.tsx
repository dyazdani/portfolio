import { Grommet, Heading, Main, Paragraph } from 'grommet';
import theme from './theme';
import CollapsibleNav from './client/components/CollapsibleNav';

function App() {

  return (
    <Grommet theme={theme} full>   
    <CollapsibleNav></CollapsibleNav>
    <Main>
      <Heading
        level={1}
        textAlign="center"
        fill
      >
        Hi, I'm Dara :-)
      </Heading>
      <Paragraph
        textAlign="center"
        fill
        size="large"
      >
        I build full-stack web applications and websites.
      </Paragraph>

    </Main>
    </Grommet>
  )
}

export default App
