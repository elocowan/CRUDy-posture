import React from 'react';
import { Typography, List, makeStyles, ListItem } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import YouTube from 'react-youtube';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "25px",
    maxWidth: "700px"
  },
  bigTitle: {
    fontSize: "60px",
    fontWeight: "bold"
  },
  description: {
    fontSize: "20px",
    fontWeight: 100,
    marginTop: "50px",
  },
  blurb: {
    marginTop: "30px"
  },
  links: {
    backgroundColor: "rgba(187,239,253,0.3)",
    borderBottom: "1px solid rgba(0,0,0,0.2)",
    color: "#1a1a1a",
    textDecoration: "none",
    cursor: "pointer",
  },
  hr: {
    marginTop: "40px",
    marginBottom: "20px",
  },
  sectionTitle: {
    fontSize: "30px",
    fontWeight: "bold",
  },
  sectionParagraph: {
    marginTop: "10px"
  },
  anchor: {
    marginTop: "-85px", /* height of nav, in this case 54px */
    display: "block",
    height: "85px", /* height of nav, in this case 54px */
    visibility: "hidden",
    position: "relative",
  },
}));

const GoodPosture = () => {
  const classes = useStyles();

  const history = useHistory();

  const infoRouteChange = () => {
    let path = '/concepts/what-is-crudy';
    history.push(path);
  }

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return (
    <div className={classes.root}>
      <a id="top" className={classes.anchor} />
      <Typography className={classes.bigTitle}>Lesson 1: the R in CRUD</Typography>
      <Typography className={classes.description}>This page is the setup for your first CRUDy posture lesson</Typography>
      <Typography className={classes.blurb}><b>CRUDy Posture</b> is a collection of audio lessons to help improve how you feel. To learn more about CRUDy before you start, check out <a onClick={infoRouteChange} className={classes.links}>What is CRUDy?</a>.</Typography>
      <hr className={classes.hr} />
      <List>
        <ListItem>
          <Typography>
            <a href="#goals" className={classes.links}>
              Goals
            </a>
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            <a href="#tips" className={classes.links}>
              Tips
            </a>
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            <a href="#start" className={classes.links}>
              Get started
            </a>
          </Typography>
        </ListItem>
      </List>
      <hr className={classes.hr} />
      <span id="goals" className={classes.anchor}></span>
      <Typography>
        <a className={classes.sectionTitle}>
          Goals
        </a></Typography>
      <Typography className={classes.sectionParagraph}>
        Learn what good posture might actually <em>feel</em> like. Hint: it's <b>not</b> going to feel difficult, it's going to feel good!
      </Typography>
      <Typography className={classes.sectionParagraph}>
        Explore the R facet of CRUDy posture: <b>Read</b>!
      </Typography>
      <Typography className={classes.sectionParagraph}>
        <b>Relax and enjoy</b>. You are much more likely to adopt new behaviors that actually feel <em>good</em>. In CRUDy Posture, feel good posture is good posture.
      </Typography>
      <Typography className={classes.sectionParagraph}>
        <b>Know Thyself</b>: get a read on how you feel at the beginning so you can compare it to how you feel at the end. Don't make perfect the enemy of progress. Learn that improvement is a process, not a destination.
      </Typography>
      <hr className={classes.hr} />
      <span id="tips" className={classes.anchor}></span>
      <Typography>
        <a className={classes.sectionTitle}>
          Tips
        </a>
      </Typography>
      <Typography className={classes.sectionParagraph}>
        <b>Breathe easy</b>. If you find yourself holding your breath, you are probably trying too hard. There is nothing to get right about any of the CRUDy posture lessons. They are environments in which to learn.
      </Typography>
      <Typography className={classes.sectionParagraph}>
        <b>Do less than you can do</b>. If there is a movement instruction to slide one of your arms, don't start by sliding as much as you can. There will not be anyone watching you (it's audio, remember?), so there's nothing to prove. You can do as little movement as you like. You might even find yourself resting more than you move. Resting is good for your posture!!
      </Typography>
      <Typography className={classes.sectionParagraph}>
        Take what is useful, and forget the rest. You are looking for little gems of experience that feel meaningful to you in the context of your posture. When you have the feeling that something is useful, meaningful or important, it is!! Don't worry about the rest.
      </Typography>
      <hr className={classes.hr} />
      <span id="start" className={classes.anchor}></span>
      <Typography>
        <a className={classes.sectionTitle}>
          On your mark... Lie down... Go.
        </a>
      </Typography>
        <YouTube
          id={'react-player'}
          videoId="jgpvBn4Ig-g"
          opts={opts}
          />
      {/* <hr className={classes.hr} />
      <span id="lessonTwo" className={classes.anchor}></span>
      <Typography>
        <a className={classes.sectionTitle}>
          Next lesson: Lesson 2
        </a>
      </Typography>
      <Typography className={classes.sectionParagraph}>
        The next lesson is...
      </Typography>
      <Typography className={classes.sectionParagraph}>
        When you are set up in your comfortable spot on the floor and ready to start, click through to <a className={classes.links}>lesson 2</a>.
      </Typography> */}
    </div>
  );
}

export default GoodPosture;