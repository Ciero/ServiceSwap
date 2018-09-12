import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProfileCreds from '../profile/ProfileCreds';


class KnowledgeItem extends Component {
  render() {
    const { profile } = this.props;

    return (
        <div >
            <ProfileCreds experience={profile.experience} />
        </div>
     
    );
  }
}

KnowledgeItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default KnowledgeItem;
