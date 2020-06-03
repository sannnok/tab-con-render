import React, { useState, useEffect } from "react";
import "./user-list.scss";

const PersonList = ({pickPerson, users}) => {

  return (
    <div>
      <h3>Person List</h3>
      <ul>
        {users.map((user, i) => (
          <li key={i} onClick={() => pickPerson(user)}>
            {user.firstName} {user.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonList;
