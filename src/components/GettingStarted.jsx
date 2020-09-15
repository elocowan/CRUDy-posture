import React from 'react';
import { Typography, List, makeStyles, ListItem } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

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

const GettingStarted = () => {
  const classes = useStyles();

  const history = useHistory();

  const infoRouteChange = () => {
    let path = '/concepts/what-is-crudy';
    history.push(path);
  }

  return (
    <div className={classes.root}>
      <Typography className={classes.bigTitle}>Getting Started</Typography>
      <Typography className={classes.description}>This page is the setup for your first CRUDy posture lesson</Typography>
      <Typography className={classes.blurb}><b>CRUDy Posture</b> is a collection of audio lessons to help improve how you feel. To learn more about CRUDy before you start, check out <a onClick={infoRouteChange} className={classes.links}>What is CRUDy?</a>.</Typography>
      <hr className={classes.hr} />
      <List>
        <ListItem>
          <Typography>
            <a href="#when" className={classes.links}>
              When to exercise
            </a>
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            <a href="#where" className={classes.links}>
              Where to exercise
            </a>
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            <a href="#wear" className={classes.links}>
              What to wear
            </a>
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            <a href="#lessonOne" className={classes.links}>
              Lesson 1: What is GOOD posture?
            </a>
          </Typography>
        </ListItem>
      </List>
      <hr className={classes.hr} />
      <span id="when" className={classes.anchor}></span>
      <Typography>
        <a className={classes.sectionTitle}>
          When to exercise
        </a></Typography>
      <Typography className={classes.sectionParagraph}>
        The best time to exercise is just before going to bed at night, but at least an hour after dinner.
      </Typography>
      <Typography className={classes.sectionParagraph}>
        Go to bed as soon as you have finished. One of the most important reasons for this is that after a day of work and worry, the exercises will relieve both mental and muscular tension and sleep will be more restful and refreshing.
      </Typography>
      <Typography className={classes.sectionParagraph}>
        When you wake up, stretch for a minute and try to remember the general feeling of the lesson you did the night before. It's worth it to repeat two or three of the movements that you can remember.
      </Typography>
      <Typography className={classes.sectionParagraph}>
        Think over the lesson from time to time during the day while you are doing other things, and see whether you can identify any changes it has caused.
      </Typography>
      <hr className={classes.hr} />
      <span id="where" className={classes.anchor}></span>
      <Typography>
        <a className={classes.sectionTitle}>
          Where to exercise
        </a>
      </Typography>
      <Typography className={classes.sectionParagraph}>
        Choose an area of floor covered with a carpet or mat (yoga mat is probably too thin, you don't want any pokey parts stealing your attention).
      </Typography>
      <Typography className={classes.sectionParagraph}>
        Make sure your floor spot is large enough to allow you to stretch out your arms and legs sideways without being hemmed in by furniture or other objects.
      </Typography>
      <Typography className={classes.sectionParagraph}>
        If you have trouble at first getting used to lying on the floor, use a thick blanket or you could even start on your bed if necessary.
      </Typography>
      <hr className={classes.hr} />
      <span id="wear" className={classes.anchor}></span>
      <Typography>
        <a className={classes.sectionTitle}>
          What to wear
        </a>
      </Typography>
      <Typography className={classes.sectionParagraph}>
        The less you wear the better.
      </Typography>
      <Typography className={classes.sectionParagraph}>
        In any case make sure that whatever you wear is comfortable and does not interfere with your movements or breathing.
      </Typography>
      <Typography className={classes.sectionParagraph}>
        Nothing too tight! No buttons or slide fasteners at the back. No need to wear glasses or a belt.
      </Typography>
      <hr className={classes.hr} />
      <span id="lessonOne" className={classes.anchor}></span>
      <Typography>
        <a className={classes.sectionTitle}>
          Lesson 1: What is GOOD posture?
        </a>
      </Typography>
      <Typography className={classes.sectionParagraph}>
        This first lesson is 25 minutes long. Make sure you're ready to relax.
      </Typography>
      <Typography className={classes.sectionParagraph}>
        Turn off your notifications, your ringers, and anything else that could interrupt you. You deserve some time to relax and improve your posture!
      </Typography>
      <Typography className={classes.sectionParagraph}>
        When you are set up in your comfortable spot on the floor and ready to start, click through to <Link to="/lessons/good-posture#top" className={classes.links}>lesson 1</Link>.
      </Typography>
    </div>
  );
}

export default GettingStarted;