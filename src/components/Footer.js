import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
const Styles = styled.div`
  .footerlayout {
    background: #222;
    color: #797979;
    margin: 40px 0 0 0;
    text-align: center;
    padding: 10px;
  }
  .footerlayout p {
    margin: 0;
  }
`;

export const Footer = () => (
  <Styles>
    <div className='footerlayout'>
      <Container>
        <p>© 2021 mylesbanner.com All rights reserved </p>
      </Container>
    </div>
  </Styles>
);
