import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';
export const Contact = () => (
  <div>
    <div className='row'>
      <Col sm={6}>
        <Form>
          <h1>Send us a message.</h1>
          <Form.Group as={Col} controlId='formGridName'>
            <Form.Label>Name</Form.Label>
            <Form.Control type='password' placeholder='Enter Your Name' />
          </Form.Group>
          <Form.Group as={Col} controlId='formGridEmail'>
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' placeholder='Enter email' />
          </Form.Group>
          <Form.Group as={Col} controlId='formGridMessage'>
            <Form.Label>Message</Form.Label>
            <Form.Control as='textarea' rows='3' />
          </Form.Group>

          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </Col>
      <Col sm={6}>
        <div class='contact_address'>
          <h2>Contact Information</h2>
          <div class='head_office'>
            <h4>Head office:</h4>
            <p>
              Mobile:
              <span>+88 01676966260</span>{' '}
            </p>
            <p>
              Email:
              <span>
                <a href='mailto:demomail@gmail.com'> demomail@gmail.com</a>
              </span>
            </p>
            <p>
              Address:
              <span>220,Chittagong,Bangladesh</span>{' '}
            </p>
          </div>
          <div class='head_office'>
            <h4>corporate office:</h4>
            <p>
              Mobile:
              <span>+88 01676966260</span>{' '}
            </p>
            <p>
              Email:
              <span>
                <a href='mailto:demomail@gmail.com'> demomail@gmail.com</a>
              </span>
            </p>
            <p>
              Address:
              <span>120,Dhaka,Bangladesh</span>{' '}
            </p>
          </div>
        </div>
      </Col>
    </div>
  </div>
);
