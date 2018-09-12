import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from '../../validation/is-empty';

class ProfileAbout extends Component {
  render() {
    const { profile } = this.props;

    // Get first name
    //const firstName = profile.user.name.trim().split(' ')[0];

   

    return (
      <div className="row">
        <div className="col-md-12">
          
            
            <p className="lead">
              {isEmpty(profile.bio) ? (
                null
              ) : (
                <div className="card card-body bg-light mb-3">,
                <h3 className="text-center text-info">About me</h3>,
                <span>{profile.bio}</span>,
                </div>,
                <hr />
              )}
            </p>
            
         
            
          
        </div>
      </div>
    );
  }
}

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;
