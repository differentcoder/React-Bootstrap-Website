import React from 'react';
import styled from 'styled-components';
const Styles = styled.div`
  .section-title {
    margin-bottom: 80px;
  }
  .section-title h1 {
    color: #303030;
    font-size: 30px;
    margin-bottom: 5px;
    font-weight: 800;
  }
  .about-desc h1 {
    font-size: 34px;
    font-weight: 700;
  }
  .about-desc h2 {
    color: #303030;
    font-weight: 300;
    margin-bottom: 20px;
    font-size: 23px;
  }
  .about-desc p {
    line-height: 28px;
    font-size: 14px;
  }
  .man-details {
    margin-top: 30px;
  }
`;
export const About = () => (
  <Styles>
    <div className='row'>
      <div className='col-md-5'>
        <div className='img-responsive'>
          <img
            className='img-fluid img-responsive'
            src={require('../src/assets/MDMinhajulIslam.jpg')}
            alt='ReactHunt'
          />
        </div>
      </div>
      <div className='col-md-6 col-md-offset-1'>
        <div className='about-desc'>
          <h1>Hi, I Am Minhaj</h1>
          <h2>full stack developer</h2>
          <div>
            A web application developer and Exclusive author at ThemeForest. I
            received my Bachelor of Science(B.sc) degree in computer science and
            engineering(CSE) from PCIU. I am the enthusiastic, reliable and
            hardworking individual who has over 6+ years experience in web
            application design and development.
          </div>
        </div>
        <div className='man-details'>
          <div className='row'>
            <div className='col-md-6'>
              <p>
                <strong>Education:</strong>
              </p>
              <p>
                <strong>Address:</strong> Austin, Texas
              </p>
              <p>
                <strong>Nationality:</strong> United States of America
              </p>
            </div>
            <div className='col-md-6'>
              <p>
                <strong>Phone:</strong> 210.621.8921
              </p>
              <p>
                <strong>Email:</strong> milob92@gmail.com
              </p>
              <p>
                <strong>Website:</strong> www.mylesbanner.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Styles>
);
