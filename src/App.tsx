import { 
  Grommet, 
  Main, 
  Page, 
  PageContent, 
  PageHeader
} from 'grommet';
import theme from './theme';
import CollapsibleNav from './client/components/CollapsibleNav';
import Headshot from './client/components/Headshot';

function App() {

  return (
    <Grommet theme={theme} full>   
    <CollapsibleNav></CollapsibleNav>
    <Main>
      <Headshot/>
      <Page
        kind="narrow"
      >
        <PageContent>
          <PageHeader
            title="Hi, I'm Dara :-)"
            subtitle="I’m a full-stack JavaScript engineer in web."
          /> 
           I love building with TypeScript, React, Node, and SQL. I have experience in the healthcare industry from my previous work as a medical speech-language pathologist. I was inspired to code because I saw firsthand the potential of software to improve patients’ lives. I bring empathy, patience, and strong listening skills from my clinician background, as well as 6 years of experience working on cross-functional creative teams from prior professional work in theater, film, and television. <br/><br/>
          
          I love working with people to give back to others. I'm passionate about code because I see it as a way to do that with maximum impact on the world. I’m fascinated by phonetics, how people talk, the diversity of speech and voices in the world, and how actors/singers can manipulate their voices to sound like all different kinds of people. I’m also interested in how and if the building blocks of speech, language, and voice can be successfully codified. I believe there are a lot of questions that have yet to be asked about how technology can improve our lives and serve people, and in order to progress our society in a positive direction, we must uncover those questions.<br/><br/>
          
          When I’m not coding, reading the latest medical journal article, or watching a play, I’m likely hiking near Lake Tahoe, playing board games with my wife, kicking a soccer ball, or baking a three-layer cake. 
          
        </PageContent>
      </Page>
    </Main>
    </Grommet>
  )
}

export default App
