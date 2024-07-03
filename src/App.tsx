import { 
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
          />
        </PageContent>
      </Page>
    </Main>
    </Grommet>
  )
}

export default App
