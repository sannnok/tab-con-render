import React, { useState, useEffect } from "react";
import "./user-list.scss";

const PersonList = ({pickPerson, users}) => {

  const getClassName = user => {
    return users.find(u => u.lastName === user.lastName).selected ? 'selected' : '';
  }

  return (
    <div>
      <h3>Person List</h3>
      <ul>
        {users.map((user, i) => (
          <li key={i} onClick={() => pickPerson(user)} className={getClassName(user)}>
            {user.firstName} {user.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonList;
