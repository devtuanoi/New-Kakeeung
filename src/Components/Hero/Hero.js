import React from 'react'
import { Box, makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ReactPlayer from 'react-player';
import Marketing from '../../videos/Digital Marketing Agency Promo Video -  After Effects Template.mp4'
import { Link } from 'react-router-dom';
import './Hero.css';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100vh',
    position: 'relative',
    marginTop: '6rem',
    marginBottom: '-3rem',
    '& video': {
      objectFit: 'cover',
    },
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    paddingBottom: theme.spacing(4),
  },
}));

const Hero = () => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <ReactPlayer
        url={Marketing}
        playing
        loop
        muted
        width="100%"
        height="100%"
      />
      <div className={classes.overlay}>
        <Box
          height="100%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          color="#fff"
        >
          <Typography variant="h3" component="h1" className={classes.title}>
            ยินดีต้อนรับเข้าสู่เว็บไซต์ Kakeenung Advertising
          </Typography>
          <Link to="/AboutUs">
          <Button type="button" color="secondary" size="large" variant="contained">
            ดูข้อมูลเพิ่มเติมคลิกที่นี่
          </Button>
          </Link>
        </Box>
      </div>
    </section>
  );
};

export default Hero
