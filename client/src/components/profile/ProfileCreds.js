import React, { Component } from 'react';
import { Card, Button, Row, Col, CardText,
  CardTitle, } from 'reactstrap';



class ProfileCreds extends Component {
  render() {
    const { experience } = this.props;
    const expItems = experience.map(exp => (
      
          <Col sm="4" key={exp._id}>
            <Card body >
              <CardTitle>{exp.title}</CardTitle>
              <CardText>{exp.description === '' ? null : (
                    <span>Description: {exp.description}</span>
                  )}</CardText>
                <Button className="btn btn-outline-warning">Let's change </Button>
            </Card>
          </Col>
         
    
        ));
        return (
          <Row>
              {expItems} 
          </Row>
        );
      }
    }

export default ProfileCreds;
