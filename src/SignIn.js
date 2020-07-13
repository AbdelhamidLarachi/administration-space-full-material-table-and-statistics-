import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockIcon from '@material-ui/icons/Lock';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Redirect, useHistory } from "react-router-dom"
import { localhost, port } from './config';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import {Helmet} from 'react-helmet';

var bcrypt = require('bcryptjs');



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/AbdelhamidLarachi">
        Algerie Telecom
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {

  let history = useHistory();

  const classes = useStyles();

  const [state, setState] = React.useState({
    username: 'abdelhamid',
    password: 'test',
    errorType: null,
    error: false
  });


  const updateField = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
    console.log(state);
  };

  function login(){

    if(state.password!=null && state.username!=null){
    axios.post(`${localhost}:${port}/api/adminlogin`, { info: state }).then(function (response) {
      console.log(response)
if(response.data.error==null){
      if(bcrypt.compareSync(state.password, response.data.info[0].password)){
                history.push("/adminspace", { user: state.username })    
            }
            else { 
              setState({...state, errorType: 'Mot de passe incorrect', error: true});
            } 
          }
else{setState({...state, errorType: 'Utilisateur introuvable', error: true});}
    })
    .catch(function (error) {if(error.message == 'Network Error'){
      setState({...state, errorType: 'Verifier votre connexion internet!', error: true});
  }
  else {
    setState({...state, errorType: "Une erreur s'est produite lors du traitement de votre demande", error: true});
  }
});   
  }
}

  return (
    <div className="application">
    <Helmet>
        <style>{'body { background-color: #EEE; }'}</style>
    </Helmet>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar} style={{backgroundColor:'black'}}>
          <LockIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
           Connexion
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            value={state.username}
            onChange={updateField}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
          />
          <TextField
            value={state.password}
            onChange={updateField}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          {state.error ?  
          <Alert variant="filled" severity="error">
        Erreur : {state.errorType}
          </Alert> : null}

          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={login}
          >
            Sign In
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
    </div>
  );
}