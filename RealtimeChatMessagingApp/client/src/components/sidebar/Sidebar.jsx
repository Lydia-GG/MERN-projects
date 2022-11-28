import React from 'react';
import { ListGroup } from 'react-bootstrap';

const Sidebar = () => {
  const rooms = ['First Room', 'Second Room', 'Third Room'];
  return (
    <>
      <h1>Available rooms</h1>
      <ListGroup>
        {rooms.map((room, index) => (
          <ListGroup.Item key={index}>{room}</ListGroup.Item>
        ))}
      </ListGroup>
      <h1>Members</h1>
    </>
  );
};

export default Sidebar;
