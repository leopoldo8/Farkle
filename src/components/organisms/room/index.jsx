import React from 'react';
import PropTypes from 'prop-types';

import RoomHub from '@components/organisms/RoomHub';
import RoomWaiting from '@components/organisms/RoomWaiting';

const Room = ({ type }) => {
  switch(type) {
    case 'hub':
      return <RoomHub />
    case 'waiting':
      return <RoomWaiting />
  }
}

Room.propTypes = {
  type: PropTypes.oneOf(['hub', 'waiting']).isRequired
}

export default Room;
