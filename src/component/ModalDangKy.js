import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {postLogin} from '../services/apiServices';
const ModelDangKy = (props) => {
    const {show, setShow} = props
    
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [Account, setAccount] = useState("")
  const [Password, setPassword] = useState("")

const handleLogin = async() =>{
    let data = await postLogin(Account,Password)
    console.log(data);

}

    return(
        <>
       {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}
       <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  value={Account} onChange={(event)=> setAccount(event.target.value)}/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={Password} onChange ={(event) => setPassword(event.target.value)}/>
      </Form.Group>
      
     
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleLogin}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    )

    
}
export default ModelDangKy;