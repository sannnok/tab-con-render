import React, { useState, useEffect } from "react";
import "./App.scss";
import UserForm from "./components/user-form";
import LiveTemplate from "./components/live-template";
import PersonList from "./components/user-list";
import PersonCard from "./components/user-card";
import DEFAULT_USERS from "./constants/users"

const App = () => {
  const [selectedUser, setSelectedUser] = useState(undefined);
  const [users, setUsers] = useState([]);
  const [textareaValue, setTextareaValue] = useState("");

  useEffect(() => {
    setUsers(DEFAULT_USERS);
  }, []);

  const pickPerson = (person) => {
    setSelectedUser(person);
  };

  const unshiftUser = user => {
    setUsers([user, ...users])
  }

  return (
    <div className="grid-container">
      <div className="live-template">
        <LiveTemplate textareaValue={textareaValue} setTextareaValue={setTextareaValue}/>
      </div>
      <div className="add-user">
        <UserForm unshiftUser={unshiftUser}/>
      </div>
      <div className="user-list">
        <PersonList pickPerson={pickPerson} users={users} />
      </div>
      <div className="user-card">
        <PersonCard person={selectedUser} textareaValue={textareaValue}/>
      </div>
    </div>
  );
};

export default App;
