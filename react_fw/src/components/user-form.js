import React, {useState} from "react";
import "./user-form.scss";

const UserForm = ({unshiftUser}) => {
  const [person, setFN] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    gender: '',
  });

  const isFormValid = () => {
    if (
      !person.firstName ||
      !person.lastName ||
      !person.email ||
      !person.phone ||
      !person.gender
    ) {
      return false
    }

    return true
  }

  return (
    <div className="form-container">
      <h3>Add Person</h3>
      <form>
        <input placeholder="First name" value={person.firstName} onChange={e => setFN({...person, firstName: e.target.value})}></input>
        <input placeholder="Last name" value={person.lastName} onChange={e => setFN({...person, lastName: e.target.value})}></input>
        <input placeholder="Email" value={person.email} onChange={e => setFN({...person, email: e.target.value})}></input>
        <input placeholder="Phone" value={person.phone} onChange={e => setFN({...person, phone: e.target.value})}></input>
        <select name="gender"  value={person.gender} onChange={e => setFN({...person, gender: e.target.value})}>
          <option value="">--Please choose an option--</option>
          <option value="M">M</option>
          <option value="F">F</option>
        </select>
      </form>
      <button type="submit" onClick={() => unshiftUser(person)} disabled={!isFormValid()}>Add Person</button>
    </div>
  );
};

export default UserForm;
