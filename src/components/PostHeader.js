import React from 'react';
import PropTypes from 'prop-types';

const PostHeader = ({ avatar, name, date }) => (
  <div className="post-header">
    <img src={avatar} alt="avatar" className="avatar" />
    <div className="header-detail">
      <strong>{name}</strong>
      <span>{date}</span>
    </div>
  </div>
);

PostHeader.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default PostHeader;
