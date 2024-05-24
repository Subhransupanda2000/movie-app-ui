// Import necessary dependencies
import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Alert,
} from "reactstrap";
import { put } from "../clients/HttpClients";


function UpdateMovie() {
  // State for form fields
  const [title, settitle] = useState("");
  const [id, setid] = useState("");

  // State for global error message
  const [errorMessage, setErrorMessage] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    if (!title || !id) {
      setErrorMessage("All fields are required.");
      return;
    }

    // Your logic for form submission goes here

    // Clear global error message on successful submission
    setErrorMessage("");
    let request = {
      title: title,
      id: id,
    };
    put("http://localhost:8080/movies/8", JSON.stringify(request));
  };

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col md={{ size: 6, offset: 3 }}>
            <h3>Movie Form</h3>
            <Form onSubmit={handleSubmit}>
              {/* Global Error Message */}
              {errorMessage && <Alert color="danger">{errorMessage}</Alert>}

              {/* Form Fields */}
              <FormGroup>
                <Label for="title">title</Label>
                <Input
                  type="text"
                  name="title"
                  id="title"
                  value={title}
                  onChange={(e) => settitle(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="id">id</Label>
                <Input
                  type="text"
                  name="id"
                  id="price"
                  value={id}
                  onChange={(e) => setid(e.target.value)}
                />
              </FormGroup>
              

              {/* Submit Button */}
              <Button color="primary" type="submit">
                update here
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default UpdateMovie;
