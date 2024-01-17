import './App.css';
import axios from "axios";
import React from 'react';
import {TextField, colors} from '@mui/material';
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Alert from 'react-bootstrap/Alert';
import { Row,Col,Button,Container} from 'react-bootstrap';
function Course(){
    const [addcourse, setaddcourse] = useState('');
    const [open, setOpen] = React.useState(false);
    const [show, setShow] = useState(false);
    
    
    const handleClose = () => {
        setOpen(false);
      };
     
     
      
    const data2 =() => {
        var token= localStorage.getItem('token');

        console.log(token);
        var obj = {
            coursename:addcourse
        }
        

        axios.post('http://localhost:5000/course/AddCourse', obj, {
            headers: {
                'Authorization':token,
            },
        })
        .then(function(response)
        {
            console.log(response);
                if(addcourse)
                {
                    // alert("sucessfully data inserted");
                    setOpen(true);
                }
                else{
                    // alert('invalid');
                //    setShow(true);
               setShow(true);
                }
           
        })
        .catch(function(err){
            alert("in this section here a very big big big misteck");
        })
    }

    return(
        <>
        <div >
               {/* <Container>
                <Row className='mt-5 mx-3'>
                    <Col lg={2}>
                    Course Name
                    </Col>
                    <Col lg={4}>  <TextField id="outlined-basic" label="Course Name" variant="outlined" autoComplete='off' name='course' value={addcourse} onChange={(e) => setaddcourse(e.target.value)}/></Col>
                </Row>
               
                
                <Row className='text-center mt-3'>
                    <Col>
                    <Button variant="outline-success" onClick={data2}>ADD</Button>
                    </Col>
                </Row>
                
               </Container> */}
                <Container>
            <Row  className='justify-content-center'>
                <Col lg={6} className='add_box m-5 text-center'>
                    <Row className='mt-5 mb-5 text-center'>
                            <Col>
                                <h3 style={{ fontFamily:'cursive', color:'#178198'}} className='mb-3'>Add Course</h3>
                                <TextField className='outline1' label="coursename"  style={{color:'#178191'}} value={addcourse} onChange={(e) => setaddcourse(e.target.value)}/>
                            </Col>
                        </Row>
                        <Row className='mt-5 mb-5'>
                            <Col>
                                <Button className='btn10' variant="" onClick={data2}>ADD</Button>
                            </Col>
                        </Row>
                </Col>
            </Row>
        </Container>
            </div>
           
            <Dialog
        open={open}
        onClose={handleClose}
        
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className="success-checkmark mt-5" >
          <div className="check-icon">
            <span className="icon-line line-tip"></span>
            <span className="icon-line line-long"></span>
            <div className="icon-circle"></div>
            <div className="icon-fix"></div>
          </div>
        </div>
        <DialogTitle id="alert-dialog-title" style={{ color:'#1b7f8f', fontFamily:'cursive', fontSize:'35px' ,width:'400px' ,marginLeft:'166px'}}>
            Successfull
         </DialogTitle>
      </Dialog>
    
      <Alert variant="danger" show={show} onClose={() => setShow(false)} dismissible style={{ marginTop:'20px'}}>
        <Alert.Heading  style={{ fontFamily:'cursive', fontSize:'35px', marginLeft:'420px'}}>error!</Alert.Heading>
        <p style={{ fontFamily:'monospace',fontSize:'18px'}}> 
        There Is An Error To Add The Data.
        Plese Enter The Valid Data.
        Else Plese Fill The Course With Proper Name.
        Here Not Allowes To Submit The Blank data. 
        </p>
      </Alert>
   
        </>
    )
}
export default Course