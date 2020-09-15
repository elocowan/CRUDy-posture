import React from 'react';
import { Typography, List, makeStyles, ListItem } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

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

  const goToLessonOne = () => {
    let path = '/lessons/good-posture';
    history.push(path);
  }

  return (
    <div className={classes.root}>
      <Typography className={classes.bigTitle}>Lesson 1: Good posture?</Typography>
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
        Add text
      </Typography>
      <Typography className={classes.sectionParagraph}>
        Add text
      </Typography>
      <Typography className={classes.sectionParagraph}>
        Add text
      </Typography>
      <Typography className={classes.sectionParagraph}>
        Add text
      </Typography>
      <hr className={classes.hr} />
      <span id="tips" className={classes.anchor}></span>
      <Typography>
        <a className={classes.sectionTitle}>
          Tips
        </a>
      </Typography>
      <Typography className={classes.sectionParagraph}>
        Add text
      </Typography>
      <Typography className={classes.sectionParagraph}>
        Add text
      </Typography>
      <Typography className={classes.sectionParagraph}>
        Add text
      </Typography>
      <hr className={classes.hr} />
      <span id="start" className={classes.anchor}></span>
      <Typography>
        <a className={classes.sectionTitle}>
          On your mark... Lie down... Go.
        </a>
      </Typography>
      <Typography className={classes.sectionParagraph}>
        Add audio here
      </Typography>
      <hr className={classes.hr} />
      <span id="lessonOne" className={classes.anchor}></span>
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
      </Typography>
    </div>
  );
}

export default GoodPosture;