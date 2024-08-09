import { 
  Grid,
  Grommet, 
  Heading, 
  Main, 
  Paragraph
} from 'grommet';
import theme from './theme';
import CollapsibleNav from './client/components/CollapsibleNav';
import Headshot from './client/components/Headshot';

function App() {

  return (
    <Grommet theme={theme} full>   
    <Main
      background="pink"
    >
      <CollapsibleNav></CollapsibleNav>
      <Grid
        columns={['flex', 'flex', 'small']}
        rows={['auto', 'xsmall', 'xsmall', 'xsmall', 'auto']}
        gap="medium"
        pad={"large"}
        width={"60vw"}
        style={{
          minWidth: "400px"
        }}
        areas={[
          { name: 'title', start: [0, 1], end: [1, 1] },
          { name: 'subtitle', start: [0, 2], end: [1, 3] },
          { name: 'headshot', start: [1, 0], end: [2, 3] },
          { name: 'paragraph', start: [0, 4], end: [2, 4] },
        ]}
        alignSelf='center'
      >
        <Heading 
          gridArea="title" 
          level={1}
          alignSelf='center'
        > 
          Hi, I'm Dara :-)
        </Heading>
        <Heading 
          gridArea="subtitle" 
          level={2}
          fill
        >
          I’m a full-stack JavaScript engineer in web.
        </Heading>
        <Headshot/>
        <Paragraph
          gridArea='paragraph'
          fill
        >
        I love building with TypeScript, React, Node, and SQL. I have experience in the healthcare industry from my previous work as a medical speech-language pathologist. I was inspired to code because I saw firsthand the potential of software to improve patients’ lives. I bring empathy, patience, and strong listening skills from my clinician background, as well as 6 years of experience working on cross-functional creative teams from prior professional work in theater, film, and television. <br/><br/>
          
          I love working with people to give back to others. I'm passionate about code because I see it as a way to do that with maximum impact on the world. I’m fascinated by phonetics, how people talk, the diversity of speech and voices in the world, and how actors/singers can manipulate their voices to sound like all different kinds of people. I’m also interested in how and if the building blocks of speech, language, and voice can be successfully codified. I believe there are a lot of questions that have yet to be asked about how technology can improve our lives and serve people, and in order to progress our society in a positive direction, we must uncover those questions.<br/><br/>
          
          When I’m not coding, reading the latest medical journal article, or watching a play, I’m likely hiking near Lake Tahoe, playing board games with my wife, kicking a soccer ball, or baking a three-layer cake. 
        </Paragraph>
      </Grid>

      {/* <Headshot/>
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
      </Page> */}
    </Main>
    </Grommet>
  )
}

export default App
