import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserCommentItem from './UserCommentItem';

class UserCommentFeed extends Component {
  render() {
    const { comments, userId } = this.props;

    return comments.map(comment => (
      <UserCommentItem key={comment._id} comment={comment} userId={userId} />
    ));
  }
}

CommentFeed.propTypes = {
  comments: PropTypes.array.isRequired,
  userId: PropTypes.string.isRequired
};

export default UserCommentFeed;
