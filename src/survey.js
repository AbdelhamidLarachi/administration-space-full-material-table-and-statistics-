import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Redirect, useHistory, useLocation, useParams } from "react-router-dom"
import { localhost, port } from './config';
import axios from 'axios';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import {Helmet} from 'react-helmet';

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      display: "flex",
      alignItems: 'center',
      justifyContent: 'center',
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '100%',
      },
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    actionsContainer: {
      marginBottom: theme.spacing(2),
    },
    resetContainer: {
      padding: theme.spacing(3),
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },
      iconFilled: {
        color: '#ff6d75',
      },
      iconHover: {
        color: '#ff3d47',
      },
  }));
  
  const StyledRating = withStyles({
    iconFilled: {
      color: '#ff6d75',
    },
    iconHover: {
      color: '#ff3d47',
    },
  })(Rating);

  const customIcons = {
    1: {
      icon: <SentimentVeryDissatisfiedIcon />,
      label: 'Très insatisfait',
    },
    2: {
      icon: <SentimentDissatisfiedIcon />,
      label: 'insatisfait',
    },
    3: {
      icon: <SentimentSatisfiedIcon />,
      label: 'Normal',
    },
    4: {
      icon: <SentimentSatisfiedAltIcon />,
      label: 'Satisfait',
    },
    5: {
      icon: <SentimentVerySatisfiedIcon />,
      label: 'Très satisfait',
    },
  };
  
  function IconContainer(props) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
  }
  
  IconContainer.propTypes = {
    value: PropTypes.number.isRequired,
  };

  function getSteps() {
    return ["Évaluer notre service d'acceuil", 'Comment trouvez-vous les frais du portail?', 'Quelles fonctionnalités pourraient être ajoutées?'];
  }


  
  export default function Survey() {

    
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    let params = useParams();

    const [value, setValue] = React.useState('Controlled');
    const [activeStep, setActiveStep] = React.useState(0);
    const [review, setReview] = React.useState({
        service: 0,
        costs: 0,
        suggestion: '',
        success: false
      });

    const steps = getSteps();

  
    const handleNext = () => {
      setActiveStep(prevActiveStep => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep(prevActiveStep => prevActiveStep - 1);
    };
  
    const handleReset = () => {
      setActiveStep(0);
    };
  
    const handleChange = event => {
      setValue(event.target.value);
    };

    const updateReview = e => {
        setReview({
          ...review,
          [e.target.name]: e.target.value
        });
        console.log(review);
      };

      const submitSurvey = () => {
        axios.post(`${localhost}:${port}/api/submitSurvey`, { review: review, id: params.id });
            setReview({
              ...review,
              success: true
            });
    };
  
      
    const getStepContent = (step) => {
        switch (step) {
          case 0:
            return (
            <Box component="fieldset" mb={3} borderColor="transparent">
            <Rating
              name="service"
              defaultValue={2}
              getLabelText={value => customIcons[value].label}
              IconContainerComponent={IconContainer}
              value={review.service}
              onChange={updateReview}
              />
          </Box>);
          case 1:
            return (
                <Box component="fieldset" mb={3} borderColor="transparent">
                <Rating
                  name="costs"
                  defaultValue={2}
                  getLabelText={value => customIcons[value].label}
                  IconContainerComponent={IconContainer}
                  value={review.costs}
                  onChange={updateReview}
                />
              </Box>);      
            case 2:
            return (<TextField
                id="outlined-multiline-static"
                label="Je propose.."
                multiline
                rows="4"
                variant="outlined"
                value={review.suggestion}
                onChange={updateReview}
                name="suggestion"
              />);
          default:
            return 'Unknown step';
        }
      }


    return (
      <div className={classes.root}>
             
             <Helmet>
        <style>{"body { background-color: #f2f2f7; }"}</style>
    </Helmet>

      <Stepper activeStep={activeStep} orientation="vertical" style={{backgroundColor: '#f2f2f7'}}> 
    {/*<Typography>{params.id}</Typography>*/}
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent>
                <div>{getStepContent(index)}</div>
                <div className={classes.actionsContainer}>
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className={classes.button}
                    >
                      Retour
                    </Button>
                    {activeStep === steps.length - 1 ? 
                    <Button
                    variant="contained"
                    color="primary"
                    onClick={submitSurvey}
                    className={classes.button}>
                    Envoyer
                    </Button> : 
                    <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}>
                    Suivant
                  </Button>}
                  </div>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {review.success ? (
          <Paper style={{backgroundColor: '#f2f2f7'}} square elevation={0} className={classes.resetContainer}>
            <Typography style={{color: 'green'}}>Merci!</Typography>
          </Paper>
        ) : null}

      </div>
    );
  }