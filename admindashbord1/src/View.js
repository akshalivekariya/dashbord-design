import './App.css';
import React from 'react';
import { MdOutlineDelete } from "react-icons/md";
// import {TextField} from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container} from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import axios from "axios";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { LiaWindowClose } from "react-icons/lia";
import { BiEdit    } from "react-icons/bi";
import { useState , useEffect } from 'react';
import {Button} from 'react-bootstrap';


function View(){
     const [ViewCourse, setViewcourse] = useState([]);
     const [suc,setsuc] = useState([]);
     const [open, setOpen] = React.useState(false);
    
    const handleClose = () => {
        setOpen(false);
      };
   
     useEffect(() => {

      var token = localStorage.getItem('token');

        axios.get('http://localhost:5000/course/ViewCourse',{
          headers: {
              'Authorization':token,
          },
      })
        .then(function(response) {
          console.log(token);
          console.log(response.data.data);
          setViewcourse(response.data.data)
        })
        .catch(function (error) {
          console.log(error);
        })
      },[suc,open]);
      
     const deletehandler=(k) => {
          // alert(k);
          var token = localStorage.getItem('token');

      axios.delete(`http://localhost:5000/course/Delete_Course/${k}`,{
        headers: {
          'Authorization':token,
      },
      })
      .then(function(response){
        //  alert('deleted!!!');
         console.log('deleted successfully')
         setsuc(response.data.status)
         setOpen(true);
      }
      )
      .catch(function(error){
         console.log(error);
         
      });
     }
    
    
    return(
        <>
            <div>
               <Container>
                <div>
                 <p className='mb-3' style={{ fontFamily:'cursive', fontSize:'35px',marginLeft:'455px'}}>View Course</p>
         <Table striped bordered hover className='add_box'>
                                  <thead>
                                    <tr className='text-center fs-5'>
                                      <th>Course Name</th>
                                      <th>Edit</th>
                                      <th>Delete</th>
                                    
                                    </tr>
                                  </thead>
                                  <tbody>
                                  {

                            ViewCourse.map((item,k) => {
                                return(
                                  <>
                                      <tr className='text-center'>
                                        <td striped  className='fs-4 me-5'>  {item.coursename}</td>
                                        <td><div className='' ><BiEdit className='fs-4'/></div></td>
                                                  <td><div className='' onClick={(e)=>deletehandler(item._id)}><MdOutlineDelete className='fs-4'/></div></td>
                                                   
                                              </tr>
                                              </>
                                                    )
                                                
                                              }
                                            
                                                )
                                              } 
                                            </tbody>
        </Table>
                                                    
               </div>
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



      <dialog>
            <div></div>
      </dialog>
        </>
    )
}
export default View