import React from 'react';
import { Link } from 'react-router-dom';

const ProfileActions = () => {
  return (
    <div className="container d-flex" style={{justifyContent:'center'}}>
      <div className="btn-group mb-4 "role="group">
        <Link to="/edit-profile" className="btn btn-light">
          <i className="fas fa-user-circle text-warning  mr-1" /> Edit Profile
        </Link>
        <Link to="/add-experience" className="btn btn-light">
          <i className="fas fa-superpowers text-warning  mr-1" />
          Add Services
        </Link>
        <Link to="#" className="btn btn-light">
          <i className="fas fa-refresh  text-warning mr-1" />
          Comments
        </Link>
      </div>
    </div>
  );
};

export default ProfileActions;
