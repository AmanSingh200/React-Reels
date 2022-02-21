import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions} from '@mui/material';
import  Alert from '@mui/material/Alert';
import Input from '@mui/material/Input';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@mui/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import {Link} from 'react-router-dom';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image} from 'pure-react-carousel';
import './Login.css'
import insta from '../Assets/insta.jpg'
import bg from '../Assets/insta.png'
import img1 from '../Assets/img1.jpg'
import img2 from '../Assets/img2.jpg'
import img3 from '../Assets/img3.jpg'
import img4 from '../Assets/img4.jpg'
import img5 from '../Assets/img5.jpg'
import { flexbox } from '@mui/system'; 




export default function Login() {
    const useStyles = makeStyles({  // makeStyles is a method  which mui/material gives
        text1:{                      // text1 is an object
            color:'grey',
            textAlign:'center'
        },
        card2:{
            height:'8vh',
            marginTop:'0.5rem'
        },
        text2:{
            textAlign:'center'
      }
    })
    const classes=useStyles();   // useStyles ko call karne pe classes mil jaayegi

    return (
      <div className='loginWrapper'>
          <div className='imgCar' style={{backgroundImage:'url('+bg+')',backgroundSize:'cover'}}>
              <div className='car'>
                <CarouselProvider
                    visibleSlides={1}
                    totalSlides={5}
                    naturalSlideHeight={423}
                    naturalSlideWidth={238}
                    hasMasterSpinner
                    isPlaying={true}
                    infinite={true}
                    dragEnabled={true}
                    touchEnabled={false}

                >
                <Slider>
                    <Slide index={0}><Image src={img1}/></Slide>
                    <Slide index={1}><Image src={img2}/></Slide>
                    <Slide index={2}><Image src={img3}/></Slide>
                    <Slide index={3}><Image src={img4}/></Slide>
                    <Slide index={4}><Image src={img5}/></Slide>
                </Slider>
                </CarouselProvider>

              </div>
          </div>
                
          <div className='loginCard'>
            <Card variant="outlined">
                <div className="insta-logo">
                    <img src={insta} alt=""/>
                </div>
                <CardContent>
                <Typography className={classes.text1} variant="subtitle1">
                    Sign up to see photos and videos from your friends
                </Typography>
                {true && <Alert severity="error">This is an error alert — check it out!</Alert>}
                <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth={true} margin="dense" size="small"/>
                <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth margin="dense" size="small"/>
                <Typography className={classes.text2} color="primary" variant="subtitle1">
                   Forget Password ?
            </Typography>
                </CardContent>
            <CardActions>
                <Button color="primary" fullWidth={true} variant="contained" margin="dense">
                Login
                </Button>
            </CardActions>
            </Card>
            <Card variant="outlined" className={classes.card2}> 
                <CardContent>
                    <Typography className={classes.text1} variant="subtitle1" >
                        Don't have an Account? <Link to="/signup" style={{textDecoration:'none'}}>Signup</Link>
                    </Typography>
                </CardContent>

            </Card>
            </div>
        </div>
  );
}
