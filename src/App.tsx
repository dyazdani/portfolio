import { Grommet } from 'grommet';
import theme from './theme';
import CollapsibleNav from './client/components/CollapsibleNav';

function App() {

  return (
    <Grommet theme={theme} full>   
    <CollapsibleNav></CollapsibleNav>
    </Grommet>
  )
}

export default App
