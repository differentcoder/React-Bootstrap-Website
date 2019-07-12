import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';

export const Service = () => (
  <div>
    <CardDeck>
      <Card>
        <Card.Img variant='top' src={require('../src/assets/service-1.jpg')} />
        <Card.Body>
          <Card.Title>PSD to React Website</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className='text-muted'>More information</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant='top' src={require('../src/assets/service-1.jpg')} />
        <Card.Body>
          <Card.Title>React to WordPress Theme</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className='text-muted'>More information</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant='top' src={require('../src/assets/service-1.jpg')} />
        <Card.Body>
          <Card.Title>React API Application</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className='text-muted'>More information</small>
        </Card.Footer>
      </Card>
    </CardDeck>
  </div>
);
