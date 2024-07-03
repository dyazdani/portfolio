import { 
  Anchor,
  Grommet, 
  Main, 
  Nav, 
  Page, 
  PageContent, 
  PageHeader 
} from 'grommet';
import theme from './theme';
import CollapsibleNav from './client/components/CollapsibleNav';
import { Github, Linkedin, Youtube } from 'grommet-icons';

function App() {

  return (
    <Grommet theme={theme} full>   
    <CollapsibleNav></CollapsibleNav>
    <Main>
      <Page
        kind="narrow"
      >
        <PageContent>
          <PageHeader
            title="Hi, I'm Dara :-)"
            subtitle="I build full-stack web applications and websites. I am building this portfolio site right now! More coming soon..."
          />
          <Nav 
            direction="row" 
            pad="medium"
          >
            <Anchor icon={<Github/>} href='https://github.com/dyazdani'  target='_blank'/>
            <Anchor icon={<Linkedin/>} href='https://www.linkedin.com/in/darayazdani/'  target='_blank'/>
            <Anchor icon={<Youtube/>} href='https://youtu.be/_61FuWa92Wo' target='_blank'/>
          </Nav>
        </PageContent>
      </Page>
   
    </Main>
    </Grommet>
  )
}

export default App
