import { BsHandbag , BsArrowRightCircleFill , BsFillBarChartFill} from "react-icons/bs";
import { FaUserPlus } from "react-icons/fa";
import { IoIosPie } from "react-icons/io";
import { Button } from 'react-bootstrap';
import React from   "react";
import "./Dashboard.css";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import { FaChartPie } from "react-icons/fa";
import AddIcon from "@mui/icons-material/Add"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { AiFillPlusSquare } from "react-icons/ai";
import { MdCalendarMonth } from "react-icons/md";

const Dashboard = () =>{

    const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


    return(
        <>
            <div>
                 {/* <div className="container"> */}
               <div className="row mt-2 mb-2">
                    <div className="col  dash_left">
                        <h2 className="text-left">Dashborad</h2>
                    </div>
                    <div className="col">
                        Home/Dashboard
                    </div>
               </div>    
               <div className="container">
               <div className="row">
                    <div className="col-lg-3 order_color text-light pt-3 border">
                        <div className="row">
                           <div className="col-6">
                           <h1>150</h1>
                            <h6>New Orders</h6>
                           </div>
                           <div className="col-6">
                                <BsHandbag className=" fw-bold bag_color"></BsHandbag>
                           </div>
                        </div>
                        <div className="transparent1 row mt-3 pt-2">
                            <div className="col-lg-12">
                                <p className="link- link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover fs-6">More info<span className="ms-2"><BsArrowRightCircleFill></BsArrowRightCircleFill></span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 bounce_color text-light pt-3 border">
                        <div className="row">
                            <div className="col-6">
                            <h1>53%</h1>
                                <h6>Bounce Rate</h6>
                            </div>
                            <div className="col-6">
                                    <BsFillBarChartFill className=" fw-bold chart_color"></BsFillBarChartFill>
                            </div>
                            </div>
                            <div className="transparent2 row mt-3 pt-2">
                                <div className="col-lg-12">
                                    <p className="link- link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover fs-6">More info<span className="ms-2"><BsArrowRightCircleFill></BsArrowRightCircleFill></span></p>
                                </div>
                            </div>
                    </div>
                    <div className="col-lg-3 user_color pt-3 border">
                        <div className="row">
                            <div className="col-7">
                            <h1>44</h1>
                                <h6>User Registration</h6>
                            </div>
                            <div className="col-5">
                                    <FaUserPlus className=" fw-bold reg_color"></FaUserPlus>
                            </div>
                            </div>
                            <div className="transparent3 row mt-3 pt-2">
                                <div className="col-lg-12">
                                    <p className="link- link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover fs-6">More info<span className="ms-2"><BsArrowRightCircleFill></BsArrowRightCircleFill></span></p>
                                </div>
                            </div>
                    </div>
                    <div className="col-lg-3 width unique_color text-light pt-3 border">
                        <div className="row">
                            <div className="col-7">
                            <h1>65</h1>
                                <h6>Unique Visitors</h6>
                            </div>
                            <div className="col-5">
                                    <IoIosPie className=" fw-bold pie_color"></IoIosPie>
                            </div>
                            </div>
                            <div className="transparent4 row mt-3 pt-2">
                                <div className="col-lg-12">
                                    <p className="link- link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover fs-6">More info<span className="ms-2"><BsArrowRightCircleFill></BsArrowRightCircleFill></span></p>
                                </div>
                            </div>
                    </div>
                    
               </div>
               </div>
        
            </div>
            <div>         
                 <div className="d-flex">
        <div className="main_box col-6 border mt-3 me-2">
            <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>

            
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <div className="sales_icon fs-2 mt-2 ms-2">
          <FaChartPie/>
          </div>
          <h3 className="mt-3 ms-2">Sales</h3>
            <Tab label="Area" value="1" style={{marginLeft:"250px"}}/>
            <Tab label="Dount" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1"><img src={require("../src/images/img_map.png")} style={{ width:'530px', height:'400px'}}/></TabPanel>
        <TabPanel value="2"><img src={require("../src/images/chart.png")} style={{ width:'620px', height:'400px'}}/></TabPanel>
      </TabContext>
    </Box>
    </div>
    <div>  
      <div className="col-4 mt-3 " style={{ width:'500px' }}> 
    <div className=" " >
     <Accordion style={{backgroundColor:"#208CFF"}}>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="d-flex "><FaMapMarkerAlt/>visitors</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
                 <div className="main_map ms-2 ">
                 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26549164.582633473!2d-117.04781464077635!3d35.680330461807394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sin!4v1687947248224!5m2!1sen!2sin" width="480" height="450" style={{ border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                 </div>
                 <div className="col-12 d-flex mt-2 ms-4 ">
                    <div className="col-4">
                    <img src={require("../src/images/visitors.png")} style={{width:"100px" , height:"100px"}}/>
                   </div>
                    <div className="col-4">
                    <img src={require("../src/images/online.png")} style={{width:"100px" , height:"100px"}}/>
                   </div>
                    <div className="col-2">
                    <img src={require("../src/images/sales.png")} style={{width:"100px" , height:"100px"}}/>
                   </div>
                 </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
     </div>
    
     </div>
     
        
        <div>
        <Accordion className="mt-3 me-2" style={{ width: '500\px', backgroundColor:"#17a2b8"}}>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="fs-4 ps-3"><BsFillGrid3X3GapFill/>Sales Graph</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <img src={require('./images/image3.png')} style={{ width:'490px'}}></img>
          <div>         
             <div className="d-flex justify-content-evenly mt-4">
            <img src={require('./images/ci1.png')} className="ms-2"/>
           <img src={require('./images/ci2.png')} className="ms-2"/>
             <img src={require('./images/ci3.png')} className="ms-2"/>
            </div>
           <div className="d-flex justify-content-evenly">
           <p className="font">Mail-Orders</p>
           <p className="font">Online</p>
           <p className="font">In-Store</p>
           </div>
          

          </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
        </div>
        <div><Accordion className='bg-success text-light mt-3 me-2'>
                            <AccordionSummary
                            expandIcon={<AddIcon  className='text-light'/>}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            >
                            <Typography><MdCalendarMonth className='text-light'/>Calender</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography className='graph'>
                                <input type='date'  />
                            </Typography>
                            </AccordionDetails>
                        </Accordion></div>

        </div>
        
        </div> 
        
        </div>

        </>
    )
}
export default Dashboard;