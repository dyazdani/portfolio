import { 
  Button, 
  Grommet, 
  Main, 
  Page, 
  PageContent, 
  PageHeader 
} from 'grommet';
import theme from './theme';
import CollapsibleNav from './client/components/CollapsibleNav';

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
            subtitle="I build full-stack web applications and websites."
            actions={<Button href="#projects"label="Projects"/>}
          />
        </PageContent>
      </Page>
      <Page
        kind="narrow"
        id="projects"
      >
        <PageContent>
          <PageHeader
            title="Projects"
          />
        </PageContent>
      </Page>
      <Page
        kind="narrow"
        id="about"
      >
        <PageContent>
          <PageHeader
            title="About"
          />
        </PageContent>
      </Page>
    </Main>
    </Grommet>
  )
}

export default App
