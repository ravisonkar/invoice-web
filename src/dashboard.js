import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'; 
import Button from 'react-bootstrap/Button';
import { Row, Container, Form ,Col} from 'react-bootstrap';
import {addInvoiceDataRequest} from './invoice'
import {fetchInvoiceRequest} from './invoice'
class Dashboard extends Component {
    state={
        id:"",
        material_use:"",
        invoice_date:"",
        day:"",
        notes:""
        } 

        componentDidMount(){
            this.getInvoiceData();
        }

         submitHandler = async () => {
            let data = {
            material_use:this.state.material_use,
            invoice_date:this.state.invoice_date,
            day:this.state.day,
            notes:this.state.notes
            };
            try {
             await addInvoiceDataRequest(data);
             } catch (error) {
              console.error(error);
            }
          };

          changeHandler = (event) => {
              console.log(event.target.value)
            this.setState({
               ...this.state,
                [event.target.name]: event.target.value,
             });
          };

          getInvoiceData = async () => {
            try {
             await fetchInvoiceRequest();
            } catch (error) {
              console.error(error.response);
            }
          };
        
    render(){       
        return(
            <Container>
       <Row>
      <Container className="m-25">
        <Form>
          <div className="mb-3">
            <h3 className="">Create invoice</h3>
          </div>
          <Form.Group>
            <Form.Label>Id</Form.Label>
            <Form.Control
              type="text"
              placeholder="First Name"
              onChange={this.changeHandler}
              name="id"
              value={this.state.id}
              autoComplete="off"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Material use</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last Name"
              onChange={this.changeHandler}
              name="material_use"
              value={this.state.material_use}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>invoice date</Form.Label>
            <Form.Control
              type="date"
              placeholder="Email Address"
              onChange={this.changeHandler}
              name="invoice_date"
              value={this.state.invoice_date}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>name</Form.Label>
            <Form.Control
              type="number"
              placeholder="Phone Number"
              onChange={this.changeHandler}
              name="name"
              value={this.state.day}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Add notes</Form.Label>
            <Form.Control
              placeholder="text"
              onChange={this.changeHandler}
              name="notes"
              value={this.state.notes}
            />
          </Form.Group>
          <Button
            variant="primary"
            className="mb-3"
            onClick={this.submitHandler}
          >
            create invoice
          </Button>
        </Form>
      </Container>
    </Row>
    <Card>
     <Card.Header as="h5">Invoice detail</Card.Header>
       <Card.Body>
        <Row>
       <Col sm={6}><p>ID</p><p></p></Col>
       <Col sm={6}><p>material use</p><p></p></Col>
       <Col sm={6}><p>invoice date</p><p></p></Col>
       <Col sm={6}><p>Day</p><p></p></Col>
       <Col sm={6}><p>notes</p><p></p></Col>
       </Row>
        </Card.Body>
        </Card>
    </Container>
        );
    }
};
export default Dashboard