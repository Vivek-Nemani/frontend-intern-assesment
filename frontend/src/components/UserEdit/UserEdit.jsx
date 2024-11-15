import React, { useState, useEffect } from 'react';
import { addUser, updateUser } from '../../services/userService';
import './UserEdit.css';

const UserEdit = ({ user, onSave }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');

  // Populate form if editing a user
  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setDob(user.dateOfBirth);
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { name, email, dateOfBirth: dob };

    if (user) {
      await updateUser(user.id, userData); // Update existing user
    } else {
      await addUser(userData);             // Add new user
    }
    onSave(); // Save and reset
  };

  return (
    <form onSubmit={handleSubmit} className="user-edit-form">
      <h2>{user ? 'Edit User' : 'Add User'}</h2>
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
      <button type="submit">{user ? 'Update' : 'Add'} User</button>
    </form>
  );
};

export default UserEdit;