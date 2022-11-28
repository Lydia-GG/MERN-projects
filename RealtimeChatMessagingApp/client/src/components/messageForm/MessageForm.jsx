import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import './MessageForm.css';

const MessageForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="send-msg"></div>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={11}>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Your message"
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col md={1}>
            <Button variant="primary" type="submit" className="send-btn">
              <i className="fas fa-paper-plane"></i>
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default MessageForm;
