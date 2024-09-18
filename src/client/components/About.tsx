import { Grid, Grommet, Heading, Main, Paragraph, ResponsiveContext } from "grommet";

import CollapsibleNav from "./CollapsibleNav";
import theme from "../../theme";
import Headshot from "./Headshot";


const About = () => {
  return (
    <Grommet theme={theme} full>   
      <Main
        background="#F8F2F4"
        style={{
          height: "100dvh"
        }}
      >
        <CollapsibleNav/>
        <ResponsiveContext.Consumer>
          {size => (
            <>
              {size === "medium" || size === "small" ? (
                <>
                  <Heading 
                    gridArea="title" 
                    level={1}
                    alignSelf='center'
                  > 
                    About Me
                  </Heading>
                  <Headshot/>
                  <Heading 
                    level={2}
                    textAlign="center"
                    fill
                    style={{
                      padding: "1rem"
                    }}
                  >
                    I’m a full-stack JavaScript engineer in web.
                  </Heading>
                  <Paragraph
                    fill
                    margin="0 2rem"
                    style={{
                      padding: "1rem"
                    }}
                    textAlign="center"
                  >
                    I love building single-page applications and websites with TypeScript, React, Node, and SQL. <br/><br/>
                    Having previously worked in the healthcare industry as a medical speech-language pathologist, I bring empathy, patience, and strong listening skills from my clinician background, as well as 6 years of experience working on cross-functional creative teams from prior professional work in theater, film, and television. I was inspired to pivot to software engineering because while treating patients I saw firsthand the potential of software to improve patients’ lives. My goal is to be on the forefront of developing solutions that make a difference, both in the healthcare tech space and beyond.  <br/><br/>
                    I love working with people to give back to others. I'm passionate about code because I see it as a way to do that with maximum impact on the world. I’m also fascinated by phonetics, how people talk, the diversity of speech and voices in the world, and how actors/singers can manipulate their voices to sound like all different kinds of people. I’m interested in how and if the building blocks of speech, language, and voice can be successfully codified. I believe there are a lot of questions that have yet to be asked about how technology can improve our lives and serve people, and in order to progress our society in a positive direction, we must uncover those questions.<br/><br/>
                    When I’m not coding, reading the latest medical journal article, or watching a play, I’m likely hiking near Lake Tahoe, playing board games with my wife, kicking a soccer ball, or baking a three-layer cake. 
                  </Paragraph>
                </>
              ) :
              (
                <Grid
                  columns={[
                    'flex', 
                    'flex', 
                    'flex'
                  ]}
                  rows={[
                    'auto', 
                    'xsmall', 
                    'xsmall', 
                    'xsmall', 
                    'auto'
                  ]}
                  gap="medium"
                  pad={"large"}
                  width="1000px"
                  style={{
                    minWidth: "350px",
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
                    About Me
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
                    I love building single-page applications and websites with TypeScript, React, Node, and SQL. <br/><br/>
                  
                    Having previously worked in the healthcare industry as a medical speech-language pathologist, I bring empathy, patience, and strong listening skills from my clinician background, as well as 6 years of experience working on cross-functional creative teams from prior professional work in theater, film, and television. I was inspired to pivot to software engineering because while treating patients I saw firsthand the potential of software to improve patients’ lives. My goal is to be on the forefront of developing solutions that make a difference, both in the healthcare tech space and beyond.  <br/><br/>
                    
                    I love working with people to give back to others. I'm passionate about code because I see it as a way to do that with maximum impact on the world. I’m also fascinated by phonetics, how people talk, the diversity of speech and voices in the world, and how actors/singers can manipulate their voices to sound like all different kinds of people. I’m interested in how and if the building blocks of speech, language, and voice can be successfully codified. I believe there are a lot of questions that have yet to be asked about how technology can improve our lives and serve people, and in order to progress our society in a positive direction, we must uncover those questions.<br/><br/>
                    
                    When I’m not coding, reading the latest medical journal article, or watching a play, I’m likely hiking near Lake Tahoe, playing board games with my wife, kicking a soccer ball, or baking a three-layer cake. 
                  </Paragraph>
                </Grid>
              )} 
            </>
          )}
        </ResponsiveContext.Consumer>
      </Main>
    </Grommet>
  )
}

export default About;