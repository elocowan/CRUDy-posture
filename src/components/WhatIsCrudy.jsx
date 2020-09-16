import React from 'react';
import { Typography, makeStyles, List, ListItem } from '@material-ui/core';
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

const WhatIsCrudy = () => {
  const classes = useStyles();

  const history = useHistory();

  const gettingStartedRouteChange = () => {
    let path = '/lessons/getting-started';
    history.push(path);
  }

  return (
    <div className={classes.root}>
      <Typography className={classes.bigTitle}>Why is posture CRUDy?</Typography>
      <Typography className={classes.description}>This explanation doesn't assume any existing CRUDy knowledge</Typography>
      <Typography className={classes.blurb}><b>CRUDy Posture</b> is based on the idea that your posture is a collection of habits. If you're ready to try a lesson, check out <a onClick={gettingStartedRouteChange} className={classes.links}>Getting Started</a>.</Typography>
      <hr className={classes.hr} />
      <List>
        <ListItem>
          <Typography>
            <a href="#collection" className={classes.links}>
              Posture is collection of habits
            </a>
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            <a href="#crud" className={classes.links}>
              CRUD is an acronym
            </a>
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            <a href="#good" className={classes.links}>
              CRUDy posture is the foundation of good posture
            </a>
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            <a href="#skeleton" className={classes.links}>
              The Skeleton Key
            </a>
          </Typography>
        </ListItem>
      </List>
      <hr className={classes.hr} />
      <span id="collection" className={classes.anchor}></span>
      <Typography>
        <a className={classes.sectionTitle}>
          Posture is a collection of habits
        </a></Typography>
      <Typography className={classes.sectionParagraph}>
        Posture isn't something you <em>have</em>, it's something you <em>do</em>.
      </Typography>
      <Typography className={classes.sectionParagraph}>
        Over the course of your life, you've learned how to do your posture through good times and bad. In the process, you've built up an impressive repertoire of movements and holding patterns that get you through your life, day to day.
      </Typography>
      <Typography className={classes.sectionParagraph}>
      </Typography>
      <Typography className={classes.sectionParagraph}>
      </Typography>
      <hr className={classes.hr} />
      <span id="crud" className={classes.anchor}></span>
      <Typography>
        <a className={classes.sectionTitle}>
          CRUD is an acronym
        </a>
      </Typography>
      <Typography className={classes.sectionParagraph}>
        The word CRUD comes from software engineering, where it helps people remember the four basic processes a program needs to be able to do with any collection of data.
      </Typography>
      <Typography className={classes.sectionParagraph}>
        C is for <strong>create</strong>. R is for <strong>read</strong>. U is for <strong>update</strong>. D is for <strong>delete</strong>.
      </Typography>
      <Typography className={classes.sectionParagraph}>
        The audio lessons in CRUDy posture teach you to apply these four basic operations to posture. You will learn how to create new postures, read current postures, update old postures that are out of date, and delete postures that don't work for you anymore.
      </Typography>
      <hr className={classes.hr} />
      <span id="good" className={classes.anchor}></span>
      <Typography>
        <a className={classes.sectionTitle}>
          CRUD is the foundation of good posture
        </a>
      </Typography>
      <Typography className={classes.sectionParagraph}>
        The more you understand the four techniques of CRUDy posture, the more you'll be able to alter your repertoire of movements and holding patterns.
      </Typography>
      <Typography className={classes.sectionParagraph}>
        Increase choice. Decrease compulsion.
      </Typography>
      <hr className={classes.hr} />
      <span id="skeleton" className={classes.anchor}></span>
      <Typography>
        <a className={classes.sectionTitle}>
          The Skeleton Key
        </a>
      </Typography>
      <Typography className={classes.sectionParagraph}>
        The skeleton is the key to good posture. That's because bones support without effort. Bony structures don't need to <em>try</em> to hold things up. They are inherently strong.
      </Typography>
      <Typography className={classes.sectionParagraph}>
        In bad posture the muscles are trying to do the work of the bones. In order to correct posture it is important to discover what has distorted the reaction of the nervous system to gravity.
      </Typography>
      <Typography className={classes.sectionParagraph}>
        One of the original causes of a distorted reaction to gravity is pain, either physical or emotional. Pain that undermines confidence in the body and self is the main cause of deviations from the ideal posture. It reduces the individual’s value in his own eyes. Nervous tension rises, which in turn reduces sensitivity, so we do not sense continued small deviations from the ideal position, and the muscles tense without the individual’s even being aware of the effort they are making. Control gets so distorted that we think we are doing nothing when we are really straining muscles needlessly.
      </Typography>
      <Typography className={classes.sectionParagraph}>
        The skeleton is the key! CRUDy posture at the highest level is about moving like a skeleton, moving with full support of the bony structures so all of the muscles are free to move you in any direction you desire with minimal effort.
      </Typography>
    </div>
  );
}

export default WhatIsCrudy;