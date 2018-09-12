import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExperience } from '../../actions/profileActions';
import { Card, Button, Row, Col, CardText,
  CardTitle, } from 'reactstrap';

class Experience extends Component {
  onDeleteClick(id) {
    this.props.deleteExperience(id);
  }

  render() {
    const experience = this.props.experience.map(exp => (
      <Col sm="4" key={exp._id}>
        <Card body >
          <CardTitle>{exp.title}</CardTitle>
          <CardText>{exp.description}</CardText>
            <Button
              onClick={this.onDeleteClick.bind(this, exp._id)}
              className="btn btn-outline-danger"
            >
              Delete
            </Button>
        </Card>
      </Col>
     

    ));
    return (
      <Row>
          {experience}
      </Row>
    );
  }
}
Experience.propTypes = {
  deleteExperience: PropTypes.func.isRequired
};

export default connect(null, { deleteExperience })(Experience);
