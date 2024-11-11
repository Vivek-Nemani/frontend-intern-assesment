import React, { useState } from 'react';
import DisplayUser from '../../components/DisplayUser/DisplayUser';
import UserEdit from '../../components/UserEdit/UserEdit';
import AddUser from '../../components/AddUser/AddUser';  // Import AddUser component
import './Home.css';

const Home = () => {
  const [selectedUser, setSelectedUser] = useState(null);  // Track the user being edited
  const [showAddUserForm, setShowAddUserForm] = useState(false);  // State to toggle AddUser form visibility
  const [editingUser, setEditingUser] = useState(false); // State to track if the user is in edit mode

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setEditingUser(true);  // Set editing mode on when user clicks "Edit"
  };

  const handleSave = () => {
    setSelectedUser(null);
    setEditingUser(false);  // Close edit mode after saving
    setShowAddUserForm(false);  // Close Add User form after saving
  };

  const handleAddUserButtonClick = () => {
    setShowAddUserForm(!showAddUserForm);  // Toggle AddUser form visibility
    setEditingUser(false);  // Close edit mode if AddUser form is opened
  };

  return (
    <div className="home-container">
      <h1>Manage Users</h1>
      
      {/* Button to toggle AddUser form */}
      <button onClick={handleAddUserButtonClick}>Add New User</button>
      
      {/* Conditionally render the AddUser form */}
      {showAddUserForm && <AddUser onSave={handleSave} />}
      
      {/* Conditionally render the Edit User form */}
      {editingUser && <UserEdit user={selectedUser} onSave={handleSave} />}
      
      {/* Display the list of users */}
      <DisplayUser onEditUser={handleEditUser} />
    </div>
  );
};

export default Home;