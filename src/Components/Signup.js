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
import './Signup.css'
import insta from '../Assets/insta.jpg'




export default function Signup() {
    const useStyles = makeStyles({  // makeStyles is a method  which mui/material gives
        text1:{                      // text1 is an object
            color:'grey',
            textAlign:'center'
        },
        card2:{
            height:'8vh',
            marginTop:'0.5rem'
        }
    })
    const classes=useStyles();   // useStyles ko call karne pe classes mil jaayegi

    return (
      <div className='signupWrapper'>
          <div className='signupCard'>
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
                <TextField id="outlined-basic" label="Full Name" variant="outlined" fullWidth margin="dense" size="small"/>
                <Button size="small" color="secondary" fullWidth={true} variant="outlined" margin="dense" startIcon={<CloudUploadIcon />} component="label">
                Upload Profile Image
                <input type="file" accept="images/*" hidden/>
                </Button>
                </CardContent>
            <CardActions>
                <Button color="primary" fullWidth={true} variant="contained" margin="dense">
                Sign Up
                </Button>
            </CardActions>
            <CardContent>
            <Typography className={classes.text1} variant="subtitle1">
                    By signing up, you agree to our Terms, Data Policy and Cookies Policy.
            </Typography>
            </CardContent>
            </Card>
            <Card variant="outlined" className={classes.card2}> 
                <CardContent>
                    <Typography className={classes.text1} variant="subtitle1" >
                        Having An Account? <Link to="/login" style={{textDecoration:'none'}}>Login</Link>
                    </Typography>
                </CardContent>

            </Card>
            </div>
        </div>
  );
}
