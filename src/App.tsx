import { Grommet } from 'grommet';
import theme from './theme';
import Headshot from './client/components/Headshot';

function App() {

  return (
    <Grommet theme={theme} full>   
    <Headshot/>
    </Grommet>
  )
}

export default App
