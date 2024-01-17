import * as React from 'react';
import { FaSearch } from "react-icons/fa";
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import { FcAddDatabase } from "react-icons/fc";
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import shadows from '@mui/material/styles/shadows';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AiFillDashboard } from "react-icons/ai";
import Dashboard from './Dashboard';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import { GrChapterAdd } from "react-icons/gr";
import './App.css';
import { useState } from 'react';
import {Routes , Route, useNavigate} from 'react-router-dom';
import { Link} from 'react-router-dom';
import Course from './Course';
import View from './View';
import Addcontent from './Addcontent';
import Viewcontent from './Viewcontent';
import { MdAddCard } from "react-icons/md";
import { FcMultipleDevices , FcDataRecovery } from "react-icons/fc";
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    backgroundColor:'##1b7f8f',
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      backgroundColor:'#1f2b87',
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    backgroundColor:'#1f2b87',
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);


function Main() {
  const navigate = useNavigate();
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);
    const [show, setshow] = useState("");
   
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
    console.log(localStorage.getItem("token"));
    const logout = () => {
      // localStorage.remove("TOKEN");
      localStorage.removeItem("token");
      navigate("/")
    }
    return(
       <>
         <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} style={{backgroundColor:"#1b7f8f"}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap  component="div">
           <div className='d-flex ms-5'>
              <div className='d-flex'>
                <p className='ms-2'>Home</p>
                <p className='ms-5'>Contact</p>
              </div>
              <div className='d-flex' style={{ marginLeft:'675px'}}>
              <button type='submit' variant="danger" className='btn1' onClick={()=> logout()}>logout</button>
              </div>
           </div>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} >
        <DrawerHeader>
        <div className='header d-flex'   style={{ Color:'#1b7f8f' }}>
                <a><img src={require('./images/AdminLTELogo.png')} style={{ width:'50px'}}></img></a>
                <p className='pt-2' style={{ fontSize:'25px', fontWeight: 'bold' }}>AdminLte 3</p>
            </div>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
         </DrawerHeader>
        <Divider />
        <div className='name d-flex'>
            <img src={require('./images/i1.jpeg')} style={{ width:'50px',height:'50px', borderRadius:'50%', shadows:'black 2px', objectFit:'cover'}} className='mt-2 ms-2'></img>
            <p className='pt-3 ps-2' style={{ fontSize:'16px'}}>Akshali Vekariya</p>
        </div>
        <div className='searchbar d-flex'>
          <div className='search_icon fs-3 ms-3'>  <FaSearch/> </div>
          <input type='text' className='ms-4 mt-2' style={{height:"30px" ,width:"70%"}} placeholder='Search' ></input>
          </div>
        <div style={{ backgroundColor: '#1b7f8f'}}>
       <List>
       {['Dashbord'].map((text, index) => (
              <ListItem key={text} disablePadding sx={{ display: 'block' }}   >
             <FcMultipleDevices className='fs-2 me-3 ms-4' position="fixed" />
           <button className='btn2 ms-2 fs-5' value="dashboard" style={{ fontFamily:'cursive', color:'white',backgroundColor:'#1b7f8f'}} onClick={(e) => setshow(e.target.value)}>
             Dashboard{console.log(show)}
             </button>   </ListItem>       
          ))}
        </List>
            <div  style={{ backgroundColor:'#1b7f8f' }}>
               <Dropdown style={{backgroundColor:'#1b7f8f'}}>
            <FcAddDatabase className='fs-2  ms-4'/>
            <Dropdown.Toggle className='text-white fs-5' variant='' id="dropdown-basic">
           
            <span className='ms-4 fs-5' style={{ fontFamily:'cursive', color:'white', backgroundColor:'#1b7f8f'}} >Courses</span>
            </Dropdown.Toggle>
            
            <DropdownMenu className='dropdown' style={{ backgroundColor:'#1b7f8f',width:'500px'}}>
                <button value='Course' onClick={(e) => setshow(e.target.value)} className='btn5 addcourse_btn ' style={{ backgroundColor:'#1b7f8f', width:'200px'}}>Course</button><br/><br/>
                <button value='View' onClick={(e) => setshow(e.target.value)} className='btn5 addcourse_btn'  style={{ backgroundColor:'#1b7f8f', width:'200px'}}>View</button>
            </DropdownMenu>
          
          </Dropdown> 
            
            </div>       
        </div>
      </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography >
        </Typography>
        <Typography>
          {
          (show == "dashbord") ? <Dashboard/> : (show == "Course") ? <Course/> : (show=="View") ? <View/> :  <Dashboard/>
          }
        </Typography>
      </Box>
    </Box>
     

        </>
    )
}
export default Main


{/* <Accordion  style={{ backgroundColor:'#1b7f8f' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="" className=''
          style={{ backgroundColor:'#1b7f8f' }}
        >
       <Typography style={{ backgroundColor:'#1b7f8f' }} >
        <FcAddDatabase position="fixed"   className='fs-2 me-3 ms-3'/>
            <span className='ms-4 fs-5' style={{ fontFamily:'cursive', color:'white', backgroundColor:'#1b7f8f'}} >Courses</span>
          </Typography>
        </AccordionSummary>
       <AccordionDetails>
          <Typography>
           <ul>
           <button value='Course' onClick={(e) => setshow(e.target.value)} className='btn5 addcourse_btn ' style={{ backgroundColor:'#1b7f8f'}}>Course</button><br/><br/>
                <button value='View' onClick={(e) => setshow(e.target.value)} className='btn5 addcourse_btn'  style={{ backgroundColor:'#1b7f8f'}}>View</button>
           </ul>
          </Typography>
        </AccordionDetails>
       </Accordion>
  */}