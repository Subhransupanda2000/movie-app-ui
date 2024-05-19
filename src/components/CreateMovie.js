import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class CreateMovie extends React.Component {
  render() {
    return (
<div className="d-flex justify-content-center align-items-center vh-100">     
 <Form style={{ width: "250px" }} inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="text" className="mr-sm-2">id</Label>
          <Input type="text" name="text" placeholder="type id" />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="text" className="mr-sm-2">title</Label>
          <Input type="text" name="text"  placeholder="type title" />
        </FormGroup>
        <Button color='primary'>Submit</Button>
      </Form>
      </div>
    );
  }
}