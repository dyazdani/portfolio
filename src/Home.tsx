import { 
  Grommet, 
  Heading, 
  Main
} from 'grommet';
import theme from './theme';
import CollapsibleNav from './client/components/CollapsibleNav';

function Home() {
  return (
    <Grommet 
      theme={theme} 
      full
    >   
      <Main
        background="#EAD6DF"
      >
        <CollapsibleNav></CollapsibleNav>
        <Heading 
          alignSelf='center'
        > 
          Hi, I'm Dara :-)
        </Heading>
        <Heading 
          level={2}
          alignSelf='center'
        >
          I’m a full-stack JavaScript engineer in web.
        </Heading>
      </Main>
    </Grommet>
  )
}

export default Home;