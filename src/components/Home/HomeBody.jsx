import React from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  sectionTitle: {
    fontSize: "20px",
    fontWeight: 100,
  },
  sectionBlock: {
    width: "200px",
    marginLeft: "20px",
    marginRight: "20px",
  },
  sectionContent: {
    fontSize: "16px",
    fontWeight: 500,
    marginTop: "10px",
    marginBottom: "10px"
  },
  lines: {
    width: "100%",
  }
}));

const HomeBody = () => {
  const classes = useStyles();


  return (
    <Grid container spacing={3} className={classes.root}>
      <Grid item xs={4}>
        <Typography className={classes.sectionTitle}>Audio</Typography>
        <Typography className={classes.sectionContent}>CRUDy posture helps change your posture with audio content.</Typography>
        <Typography className={classes.sectionContent}>In contrast to videos, which lead to imitation, audio content leads to exploration.
        </Typography>
        <Typography className={classes.sectionContent}>
        As you interpret verbal instructions and use your body's feedback, you'll train your imagination and kinaesthetic sense to match your physical experience. The results will be greater body awareness and improved posture.
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography className={classes.sectionTitle}>Change your habits</Typography>
        <Typography className={classes.sectionContent}>CRUDy posture gets to the root of all inefficient posture: unacknowledged habits.</Typography>
        <Typography className={classes.sectionContent}>By learning to sense and feel you're doing without knowing, you can bring unconscious muscular patterns to consciousness. That's how you make yourself ammenable to change.</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography className={classes.sectionTitle}>Flexible Brain = Flexible Body</Typography>
        <Typography className={classes.sectionContent}>Posture is in your brain, not your muscles themselves.</Typography>
        <Typography className={classes.sectionContent}>By learning to untangle habits that have been knotted together over many years, you will gain access to the collection of postural habits called <em>the self-image</em>. Once you learn how to create, read, update and delete postural habits, you will feel free from compulsion and abundant with options.</Typography>
      </Grid>
      <hr className={classes.lines}/>
    </Grid>
  )
}

export default HomeBody;