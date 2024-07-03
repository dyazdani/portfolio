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
          />
        </PageContent>
      </Page>
      <Nav 
        direction="row" 
        pad="medium"
      >
        <Anchor icon={} />
        <Anchor icon={} />
        <Anchor icon={} />
      </Nav>
    </Main>
    </Grommet>
  )
}

export default App
