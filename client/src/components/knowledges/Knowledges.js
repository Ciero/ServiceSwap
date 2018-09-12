import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../common/Spinner';
import KnowledgeItem from './KnowledgeItem';
import { getProfiles } from '../../actions/profileActions';

class Knowledges extends Component {
  componentDidMount() {
    this.props.getProfiles();
  }

  render() {
    const { profiles, loading } = this.props.profile;
    let knowledgeItems;

    if (profiles === null || loading) {
      knowledgeItems = <Spinner />;
    } else {
      if (profiles.length > 0) {
        knowledgeItems = profiles.map(profile => (
          <KnowledgeItem key={profile._id} profile={profile} />
        ));
      } else {
        knowledgeItems = <h4>No profiles found...</h4>;
      }
    }

    return (
      <div className="profiles">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Services to Swap</h1>
              {knowledgeItems}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Knowledges.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { getProfiles })(Knowledges);
