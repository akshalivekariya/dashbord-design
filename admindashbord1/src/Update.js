import React from 'react';
import {TextField, colors} from '@mui/material';
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Alert from 'react-bootstrap/Alert';
import { Row,Col,Button,Container} from 'react-bootstrap';

function Update() {
    return(
        <>
        <div >

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
   
        </>
    )
}
export default Update