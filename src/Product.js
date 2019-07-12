import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';
export const Product = () => (
  <div>
    <CardDeck>
      <Card>
        <Card.Img
          variant='top'
          src={require('../src/assets/react-js-pict.png')}
        />
        <Card.Body>
          <Card.Title>React Business Theme</Card.Title>
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
        <Card.Img
          variant='top'
          src={require('../src/assets/react-js-pict.png')}
        />
        <Card.Body>
          <Card.Title>React Native Mobile Apps</Card.Title>
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
        <Card.Img
          variant='top'
          src={require('../src/assets/react-js-pict.png')}
        />
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
