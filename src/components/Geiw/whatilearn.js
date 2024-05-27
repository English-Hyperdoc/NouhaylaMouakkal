import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '20px', // Optional: adds space between the cards
  marginTop: '20px',
  backgroundColor: 'transparent',
};

const cardContainerStyle = {
  width: '45%', 
  backgroundColor: 'transparent',
color: 'white',
opecity : '0.8',
border: '1px solid white',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
};

function WhatILearn() {
  return (
    <div style={containerStyle}>
      <Card style={cardContainerStyle}>
        <Card.Header>Blog</Card.Header>
        <Card.Body>
          <Card.Title>My Second Experience in GEIW.2</Card.Title>
          <Card.Text>
                Blog about the innovation week
          </Card.Text>
          <Button variant="primary">
            <a href='https://hashnode.com/post/clwnfe1ik000d09ju2ahp135r' target='_blank' style={linkStyle}>Go See The Blog</a>
          </Button>
        </Card.Body>
      </Card>

      <Card style={cardContainerStyle}>
        <Card.Header>Blog</Card.Header>
        <Card.Body>
          <Card.Title>What I Learn in S4</Card.Title>
          <Card.Text>
            Blog that evaluates the course of this semester 
          </Card.Text>
          <Button variant="primary">
            <a href='https://nouhaylamouakkal.hashnode.dev/semester-reflection-growth-challenges-and-looking-ahead' style={linkStyle}>Go See The Blog</a>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default WhatILearn;
