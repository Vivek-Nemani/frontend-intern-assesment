import React, { useState } from 'react';
import { addUser } from '../../services/userService';
import './AddUser.css';

const AddUser = ({ onSave }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { name, email, dateOfBirth: dob };
    await addUser(userData);
    onSave();
  };

  return (
    <form onSubmit={handleSubmit} className="user-edit-form">
      <h2>Add New User</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="date"
        placeholder="Date of Birth"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
      />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;