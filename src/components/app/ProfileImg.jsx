import React from 'react';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProfileImg = ({
  size = 'md',
  src,
}) => {
  const defaultProfilePic = require('../../assets/default-user-img.jpeg');

  return (
    // <img src={src || defaultProfilePic} className={`rounded-full h-${size} w-${size}`} alt="" />
    <FontAwesomeIcon className="cursor-pointer text-primary" icon={faUser} size="xl" />

  );
};

export default ProfileImg;
