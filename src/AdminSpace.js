import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Link, Root, useParams, useLocation, useHistory } from 'react-router-dom';
import MaterialTable from 'material-table';
import { forwardRef } from 'react';
import { localhost, port } from './config';
import axios from 'axios';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { Button, Table, Modal, ModalHeader, ModalBody, ModalFooter, InputGroup, InputGroupAddon, InputGroupText, Input, FormGroup, Label, ButtonGroup, Container } from 'reactstrap';
import DescriptionIcon from '@material-ui/icons/Description';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import ErrorIcon from '@material-ui/icons/Error';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import {Helmet} from 'react-helmet';
import Switch from '@material-ui/core/Switch';
import Grow from '@material-ui/core/Grow';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Box from '@material-ui/core/Box';
import cx from 'clsx';
import Slider from '@material-ui/core/Slider';
import PeopleIcon from '@material-ui/icons/People';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import PermPhoneMsgIcon from '@material-ui/icons/PermPhoneMsg';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import GradeIcon from '@material-ui/icons/Grade';
import ChatIcon from '@material-ui/icons/Chat';
import CircularProgress from '@material-ui/core/CircularProgress';
import BuildIcon from '@material-ui/icons/Build';
import { FixedSizeList } from 'react-window';
import { animateScroll } from "react-scroll";
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';



const StyledBadge = withStyles(theme => ({
  badge: {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
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
    container: {
      display: 'flex',
    },
    paper: {
      margin: theme.spacing(1),
    },
    svg: {
      width: 100,
      height: 100,
    },
    polygon: {
      fill: theme.palette.common.white,
      stroke: theme.palette.divider,
      strokeWidth: 1,
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))(Badge);


const tableIcons = {
  ErrorIcon: forwardRef((props, ref) => <ErrorIcon {...props} ref={ref} />),
  PictureAsPdfIcon: forwardRef((props, ref) => <PictureAsPdfIcon {...props} ref={ref} />),
  DescriptionIcon: forwardRef((props, ref) => <DescriptionIcon {...props} ref={ref} />),
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />)
};

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
    marginLeft: '35%'
  },
  root: {
    display: 'flex'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));


const cardStyles = makeStyles(({ spacing, palette }) => {
  const family =
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';
  return {
    card: {
      display: 'flex',
      padding: spacing(2),
      minWidth: 288,
      borderRadius: 12,
      boxShadow: '0 2px 4px 0 rgba(138, 148, 159, 0.2)',
      '& > *:nth-child(1)': {
        marginRight: spacing(2),
      },
      '& > *:nth-child(2)': {
        flex: 'auto',
      },
    },
    avatar: {},
    heading: {
      fontFamily: family,
      fontSize: 26,
      marginBottom: 0,
    },
    subheader: {
      fontFamily: family,
      fontSize: 14,
      color: palette.grey[600],
      letterSpacing: '1px',
      marginBottom: 4,
    },
    value: {
      marginLeft: 8,
      fontSize: 14,
      color: palette.grey[500],
    },
  };
});


const paperStyle = {
  backgroundColor: 'rgb(43, 43, 46)', 
  height: window.innerHeight*20/100, 
  width: window.innerWidth*25/100
};

const useSliderStyles = makeStyles(() => ({
  root: {
    height: 4,
  },
  rail: {
    borderRadius: 10,
    height: 4,
    backgroundColor: 'rgb(202,211,216)',
  },
  track: {
    borderRadius: 10,
    height: 4,
    backgroundColor: 'rgb(117,156,250)',
  },
  thumb: {
    display: 'none',
  },
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = event => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = event => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = event => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = event => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

const useStyles1 = makeStyles(theme => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const useStyles2 = makeStyles({
  table: {
    minWidth: 500,
  },
});


export default  function AdminSpace(className) {

  const sliderStyles = useSliderStyles();
  const styles = cardStyles();

  const SuggClasses = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  const [state, setState] = React.useState({
    columns: [],
    data: [],
    bottom: false,
    statistics: [],
    suggestions: []
  });
  var emptyRows;
  if(state.suggestions != undefined){
  emptyRows = rowsPerPage - Math.min(rowsPerPage, state.suggestions.length - page * rowsPerPage);
  }
  const [content, setContent] = React.useState({
    display: 'main',
  });

  const location = useLocation();
  let history = useHistory();
  
  if(location.state == undefined || location.state == null || location.state == ''){
  history.push("/");   
  }

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };
  
if(state.data.length === 0){

    axios.get(`${localhost}:${port}/api/getOffres`).then((response) => {

    let data = response.data.data;

    data.forEach(element => {   // display only date from datetime
      element.date_parution = element.date_parution.substring(0, 10); 
      element.date_limite = element.date_limite.substring(0, 10);
      element.numero = element.titre.substring(element.titre.length - 10, element.titre.length);
      if(element.infructueux == 1 ){element.infructueux = true; // disable document access action
      } else {element.infructueux = false;}
      if(element.type == 1 ){element.type = "Appels d'offres"; 
      } else {element.type = "Avis de consultation";}
    });

    const newMessageObj = { 
      
      columns: [
      { title: 'Numéro', field: 'numero', cellStyle: {borderColor: 'white' ,width: '100%', color: 'black', backgroundColor: '#EEE', height: 10, textAlign:'center', whiteSpace:'nowrap'}, editable: 'never'},
      { title: 'Type', field: 'type', lookup: { "Appels d'offres": "Appels d'offres", 'Avis de consultation': 'Avis de consultation'}},
      { title: 'Wilaya', field: 'wilaya', lookup: { 'Adrar': 'Adrar', 'Chlef': 'Chlef', 'Laghouat': 'Laghouat', 'Oum El Bouaghi': 'Oum El Bouaghi', 'Batna': 'Batna', 'Bejaia': 'Bejaia', 'Biskra': 'Biskra', 'Bechar': 'Bechar', 'Blida': 'Blida', 'Bouira': 'Bouira', 'Tamanrasset': 'Tamanrasset', 'Tebessa': 'Tebessa', 'Tlemcen': 'Tlemcen', 'Tiaret': 'Tiaret', 'Tizi Ouzou': 'Tizi Ouzou', 'Alger': 'Alger', 'Djelfa': 'Djelfa', 'Jijel': 'Jijel', 'Setif': 'Setif', 'Saida': 'Saida', 'Skikda': 'Skikda', 'Sidi Bel Abbes': 'Sidi Bel Abbes', 'Annaba': 'Annaba', 'Guelma': 'Guelma', 'Constantine': 'Constantine', 'Medea': 'Medea', 'Mostaganem': 'Mostaganem', 'Msila': 'Msila', 'Mascara': 'Mascara', 'Ouargla': 'Ouargla', 'Oran': 'Oran', 'El Bayadh': 'El Bayadh', 'Illizi': 'Illizi', 'Bordj Bou Arreridj': 'Bordj Bou Arreridj', 'Boumerdes': 'Boumerdes', 'El Tarf': 'El Tarf', 'Tindouf': 'Tindouf', 'Tissemsilt': 'Tissemsilt', 'El Oued': 'El Oued', 'Khenchela': 'Khenchela', 'Souk Ahras': 'Souk Ahras', 'Tipaza': 'Tipaza', 'Mila': 'Mila', 'Ain Defla': 'Ain Defla', 'Naama': 'Naama', 'Ain Temouchent': 'Ain Temouchent', 'Ghardaia': 'Ghardaia', 'Relizane': 'Relizane'}},
      { title: 'Parution', field: 'date_parution', type: 'date'},
      { title: 'Limite', field: 'date_limite', type: 'date'},
      { title: 'Infructueux', field: 'infructueux', type: 'boolean', cellStyle: {color: 'black', fontWeight: 'bold', height: 10, textAlign:'center', whiteSpace:'nowrap'}},
      { title: 'Url', field: 'url'},
      { title: 'Url_infructuosité', field: 'url_infructuosite'},
      { title: 'Titre', field: 'titre', cellStyle: {borderColor: 'white' ,width: '100%', color: 'black', height: 10, whiteSpace:'nowrap'}},
      { title: 'Déscription', field: 'description', cellStyle: {borderColor: 'white' ,width: '100%', color: 'black', height: 10, whiteSpace:'nowrap'}},

    ],data: data,
    
    detailPanel: [
    
        () => ({
        icon: () => <PictureAsPdfIcon style={{color: 'black'}} />,
        tooltip: 'Voir Document',
        render: rowData => {
          return (
            <iframe
            width="35%"
            height="600"
            src={rowData.url}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
          )
        },
     }),

     rowData => ({
      disabled: !rowData.infructueux,
      icon: () => <DescriptionIcon style={{color: 'black'}}/>,
      tooltip: 'Voir Infructuosité',
      render: rowData => {
        return (
          <iframe
          width="35%"
          height="600"
          src={rowData.url_infructuosite}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
        )
      },
   }),

   // just a hack to give a margin between selection actions and detail panel which the library do not support
   () => ({
    disabled: true,
    icon: () => <ErrorIcon style={{color: 'white'}} />,
    render: () => <div></div>
 })

    ]

  }
    setState(newMessageObj); // Now it works}
  });

  }

  const logout = () => {
    history.push("/")    
  };


  const fullList = side => (
    <div
      className={classes.fullList}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
          <ListItem>
          <Label style={{marginTop: '0.5%'}}>Voulez-vous vraiment déconnecter? </Label>
          <IconButton
            onClick={logout}
          >
            <CheckIcon />
          </IconButton>
          <IconButton
            onClick={toggleDrawer('bottom', false)}
          >
            <CloseIcon />
          </IconButton>
          </ListItem>
      </List>
    </div>
  );

  const updateContent = (content) => { 
    setContent({ ...state, display: content });
    if(content == 'statistics') {
      handleChange();
    }
  }

  
  const [checked, setChecked] = React.useState(true);

  const handleChange = () => {
    setChecked(prev => true);
  };

if(state.statistics == undefined){
  axios.post(`${localhost}:${port}/api/getStats`).then((response) => {
    console.log(response.data.suggestions)
    let stats = response.data.stats[8];
    setState({ ...state, statistics: stats[0], suggestions: response.data.suggestions });
});
}





const displaySuggestions = () => {
  animateScroll.scrollToBottom({
    containerId: "ContainerElementID"
  });}

  const getContent = (content) => {
    switch (content) {
      case 'main':
        return (
          <MaterialTable

          options={{
            headerStyle: {
              backgroundColor: '#EEE',
              color: 'black',
            },
            selection: true,
            exportButton: true,
            grouping: true,
            grouping: () => ({
              placeholder: 'test'
            }),
          
          }}
          
          localization={{  
            body: {
                emptyDataSourceMessage: 'Pas de données a afficher...',
                addTooltip: 'Ajouter offre',
                deleteTooltip: 'Supprimer',
                editTooltip: 'Modifier',
                editRow: {
                  saveTooltip: 'Enregistrer',
                  cancelTooltip: 'Annuler',
                  deleteText: 'Supprimer'
                },
            },
            toolbar: {
              nRowsSelected: '{0} offre(s) selectionné',
              exportTitle: 'Exporter',
              searchTooltip: 'Rechercher',
              searchPlaceholder: 'Rechercher',
            },
            grouping: {
              groupedBy: 'Regroupé par :',
              placeholder: 'Faites glisser les en-têtes ici pour les regrouper par catégorie'
            }
          }}
          detailPanel={state.detailPanel}
          
          actions={[
            {
              tooltip: 'Voulez-vous les supprimer?',
              icon: () => <DeleteOutline />,
              onClick: (evt, data) => {
          
                axios.post(`${localhost}:${port}/api/deleteOffre`, { data: data });  // delete offre
          
                var prevData = state.data;
                prevData = prevData.filter(function(val) {
                  return data.indexOf(val) == -1;
                });
          
              const newDataObj = { 
                columns: state.columns,
                data: prevData,
            }
              setState(newDataObj); 
              console.log(prevData)
              } 
            }
          ]}
          icons={tableIcons}
            title="Gestion d'appels d'offres"
            columns={state.columns}
            data={state.data}
            editable={{
              onRowAdd: newData =>
                new Promise(resolve => {
                  axios.post(`${localhost}:${port}/api/addOffre`, { form: newData });  // add offre
                  setTimeout(() => {
                    resolve();
                    setState(prevState => {
                      const data = [...prevState.data];
                      data.push(newData);
                      return { ...prevState, data };
                    });
                  }, 600);
                }),
              onRowUpdate: (newData, oldData) =>
                new Promise(resolve => {
                  axios.post(`${localhost}:${port}/api/updateOffre`, { form: newData });  // update offre
                  setTimeout(() => {
                    resolve();
                    if (oldData) {
                      setState(prevState => {
                        const data = [...prevState.data];
                        data[data.indexOf(oldData)] = newData;
                        return { ...prevState, data };
                      });
                    }
                  }, 600);
                }),
              onRowDelete: oldData =>
                new Promise(resolve => {
                  let toArray = [];
                  toArray.push(oldData);
                  axios.post(`${localhost}:${port}/api/deleteOffre`, { data: toArray });  // delete offre
                  setTimeout(() => {
                    resolve();
                    setState(prevState => {
                      const data = [...prevState.data];
                      data.splice(data.indexOf(oldData), 1);
                      return { ...prevState, data };
                    });
                  }, 600);
                }),
            }}
          />);
      case 'statistics':
        while(state.statistics == undefined){
          return (
          <div className={classes.root}>
          <CircularProgress />
        </div>
          )
        }

        return (
          <div className={classes.root}>
            <div>

        <Box  display="flex" flexDirection="row" justifyContent="center">
        <Box m={4}>
        <Grow in={checked}>
        <Card className={cx(styles.card, className)} elevation={4}>
        <PeopleIcon style={{color: 'black'}} />
        <Box>
        <h3 className={styles.subheader}>Total Utilisateurs</h3>
        <p className={styles.heading}>{state.statistics.total_users}</p>
        <Box display={'flex'} alignItems={'center'}>
        <Slider style={{color: 'white'}} defaultValue={0} />
          <span className={styles.value}></span>
        </Box>
      </Box>
    </Card>
        </Grow>
        </Box>
        {/* Conditionally applies the timeout prop to change the entry speed. */}
        <Box m={4}>
        <Grow
          in={checked}
          style={{ transformOrigin: '0 0 0' }}
          {...(checked ? { timeout: 1000 } : {})}
        >
        <Card className={cx(styles.card, className)} elevation={4}>
        <AssignmentTurnedInIcon style={{color: 'black'}} />
        <Box>
        <h3 className={styles.subheader}>Sondage</h3>
        <p className={styles.heading}>{state.statistics.surveys}</p>
        <Box display={'flex'} alignItems={'center'}>
        <Slider classes={sliderStyles} defaultValue={state.statistics.surveys*100/state.statistics.total_users} />
        <span className={styles.value}>{(state.statistics.surveys*100/state.statistics.total_users).toFixed(0)+'%'}</span>
        </Box>
      </Box>
    </Card>
        </Grow>
        </Box>
        <Box m={4}>
        <Grow
          in={checked}
          style={{ transformOrigin: '0 0 0' }}
          {...(checked ? { timeout: 1000 } : {})}
        >
        <Card className={cx(styles.card, className)} elevation={4}>
        <CreditCardIcon style={{color: 'black'}} />
        <Box>
        <h3 className={styles.subheader}>Vouchers Utilisés</h3>
        <p className={styles.heading}>{state.statistics.used_tokens}</p>
        <Box display={'flex'} alignItems={'center'}>
        <Slider style={{color: 'white'}} defaultValue={0} />
          <span className={styles.value}></span>
        </Box>
      </Box>
       </Card>
        </Grow>
        </Box>
      </Box>


      <Box  display="flex" flexDirection="row" justifyContent="center">
      <Box m={4} >
        <Grow in={checked}>
        <Card className={cx(styles.card, className)} elevation={4}>
        <WhatsAppIcon style={{color: 'black'}} />
        <Box>
        <h3 className={styles.subheader}>Appels d'offres</h3>
        <p className={styles.heading}>{state.statistics.total_offres}</p>
        <Box display={'flex'} alignItems={'center'}>
        <Slider style={{color: 'white'}} defaultValue={0} />
          <span className={styles.value}></span>
        </Box>
      </Box>
    </Card>
        </Grow>
        </Box>
        {/* Conditionally applies the timeout prop to change the entry speed. */}
        <Box m={4}>
        <Grow
          in={checked}
          style={{ transformOrigin: '0 0 0' }}
          {...(checked ? { timeout: 1000 } : {})}
        >
        <Card className={cx(styles.card, className)} elevation={4}>
        <ErrorIcon style={{color: 'black'}} />
        <Box>
        <h3 className={styles.subheader}>Offres Infructueux</h3>
        <p className={styles.heading}>{state.statistics.offres_infructueux}</p>
        <Box display={'flex'} alignItems={'center'}>
        <Slider classes={sliderStyles} defaultValue={state.statistics.offres_infructueux*100/state.statistics.total_offres} />
          <span className={styles.value}>{(state.statistics.offres_infructueux*100/state.statistics.total_offres).toFixed(0)+'%'}</span>
        </Box>
      </Box>
    </Card>
        </Grow>
        </Box>
        <Box m={4}>
        <Grow
          in={checked}
          style={{ transformOrigin: '0 0 0' }}
          {...(checked ? { timeout: 1000 } : {})}
        >
        <Card className={cx(styles.card, className)} elevation={4}>
        <PermPhoneMsgIcon style={{color: 'black'}} />
        <Box>
        <h3 className={styles.subheader}>Avis de consultation</h3>
        <p className={styles.heading}>{state.statistics.total_consultations}</p>
        <Box display={'flex'} alignItems={'center'}>
        <Slider style={{color: 'white'}} defaultValue={0} />
          <span className={styles.value}></span>
        </Box>
      </Box>
    </Card>
        </Grow>
        </Box>

      </Box>


      <Box  display="flex" flexDirection="row" justifyContent="center">
      <Box m={4} >
        <Grow in={checked}>
        <Card className={cx(styles.card, className)} elevation={4}>
        <SentimentSatisfiedIcon style={{color: 'black'}} />
        <Box>
        <h3 className={styles.subheader}>Service - Note Moyenne</h3>
        <p className={styles.heading}>{state.statistics.service.toFixed(0)}</p>
        <Box display={'flex'} alignItems={'center'}>
        <Slider style={{color: 'white'}} defaultValue={0} />
          <span className={styles.value}></span>
        </Box>
      </Box>
    </Card>
        </Grow>
        </Box>
        {/* Conditionally applies the timeout prop to change the entry speed. */}
        <Box m={4}>
        <Grow
          in={checked}
          style={{ transformOrigin: '0 0 0' }}
          {...(checked ? { timeout: 1000 } : {})}
        >
        <Card className={cx(styles.card, className)} elevation={4}>
        <GradeIcon style={{color: 'black'}} />
        <Box>
        <h3 className={styles.subheader}>Frais - Note Moyenne</h3>
        <p className={styles.heading}>{state.statistics.cost.toFixed(0)}</p>
        <Box display={'flex'} alignItems={'center'}>
        <Slider style={{color: 'white'}} defaultValue={0} />
          <span className={styles.value}></span>
        </Box>
      </Box>
    </Card>
        </Grow>
        </Box>
        <Box m={3}>
        <Button style={{backgroundColor: '#EEE', border: 0}} component="span" onClick={displaySuggestions}>
        <Grow
          in={checked}
          style={{ transformOrigin: '0 0 0' }}
          {...(checked ? { timeout: 1000 } : {})}
        >
        <Card className={cx(styles.card, className)} elevation={4}>
        <ChatIcon style={{color: 'black'}} />
        <Box>
        <h3 className={styles.subheader}>Suggestions</h3>
        <p className={styles.heading}>Afficher</p>
        <Box display={'flex'} alignItems={'center'}>
        <Slider style={{color: 'white'}} defaultValue={0} />
          <span className={styles.value}></span>
        </Box>
      </Box>
    </Card>
        </Grow>
        </Button>
        </Box>
      </Box>

      <Box m={4} style={{marginTop: '5%', marginBottom: '5%'}}>
        <Grow
          in={checked}
          style={{ transformOrigin: '0 0 0' }}
          {...(checked ? { timeout: 1000 } : {})}
        >
        <Card className={cx(styles.card, className)} elevation={4}>
        <AssignmentTurnedInIcon style={{color: 'black'}} />
        <Box>
      <Table className={SuggClasses.table} aria-label="custom pagination table">
        <TableBody>
          {(rowsPerPage > 0
            ? state.suggestions.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : state.suggestions
          ).map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.suggestion}
              </TableCell>
              <TableCell align="right">{row.timestamp.substring(0, 10)}</TableCell>
            </TableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={state.suggestions.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
        </TableFooter>
      </Table>
      </Box>
    </Card>
        </Grow>
        </Box>
      </div>
    </div>
    );      
      default:
        return 'main';
    }
  }

  const bull = <span className={classes.bullet}>•</span>;

  
  return (
    
    <div className={classes.root}>
          <Helmet>
        <style>{'body { background-color: #EEE; }'}</style>
    </Helmet>
      <div>
      <Drawer anchor="bottom" open={state.bottom} onClose={toggleDrawer('bottom', false)}>
        {fullList('bottom')}
      </Drawer>
    </div>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar style={{backgroundColor: 'rgb(43, 43, 46)'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          
          <Typography variant="h8" noWrap style={{marginRight:10}}>
             {location.state == undefined ? null : location.state.user}
          </Typography>
          <div className={classes.root}>
      <StyledBadge
        overlap="circle"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        variant="dot"
      >
      </StyledBadge>
    </div>
          <img style={{position:'absolute', right:'2%'}} src="https://i.ibb.co/thrwVhp/whiteAT.png" height="42"/>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
            <ListItem button>
              <ListItemIcon><PowerSettingsNewIcon  onClick={toggleDrawer('bottom', true)}/></ListItemIcon>
              <ListItemText primary='Déconnecter'/>
            </ListItem>
        </List>
        <Divider />
        <List>
          {['Gestion', 'Statistiques'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon >{index % 2 === 0 ? <BuildIcon onClick={() => updateContent('main')}/> : <AssignmentTurnedInIcon onClick={() => updateContent('statistics')}/>}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div>{getContent(content.display)}</div>
      </main>
    </div>
  );
}