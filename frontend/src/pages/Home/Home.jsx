import React, { useState, useEffect } from 'react';
import { getUsers } from '../../services/userService';  
import DisplayUser from '../../components/DisplayUser/DisplayUser';
import UserEdit from '../../components/UserEdit/UserEdit';
import AddUser from '../../components/AddUser/AddUser';  
import './Home.css';

const Home = () => {
  const [selectedUser, setSelectedUser] = useState(null);  
  const [showAddUserForm, setShowAddUserForm] = useState(false);
  const [editingUser, setEditingUser] = useState(false);
  const [users, setUsers] = useState([]);  

  useEffect(() => {

    const fetchUsers = async () => {
      try {
        const fetchedUsers = await getUsers();
        setUsers(fetchedUsers); 
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    
    fetchUsers();
  }, []); 

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setEditingUser(true);  
    setShowAddUserForm(false);  
  };

  const handleSave = () => {
    setSelectedUser(null);
    setEditingUser(false);  
    setShowAddUserForm(false);  
    refreshUserList();  
  };

  const handleAddUserButtonClick = () => {
    setShowAddUserForm(!showAddUserForm); 
    setEditingUser(false);  
    setSelectedUser(null);  
  };

  const handleCloseForm = () => {
    setShowAddUserForm(false);  
    setEditingUser(false);  
    setSelectedUser(null);  
  };

  const refreshUserList = async () => {
    try {
      const fetchedUsers = await getUsers();  
      setUsers(fetchedUsers);  
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <div className="home-container">
      <h1>Manage Users</h1>
      

      <button onClick={handleAddUserButtonClick}>Add New User</button>
      
      {/* Conditionally render the AddUser form */}
      {showAddUserForm && (
        <div className="form-container">
          <AddUser onSave={handleSave} />
          <button className="close-button" onClick={handleCloseForm}>X</button>
        </div>
      )}
      

      {editingUser && (
        <div className="form-container">
          <UserEdit user={selectedUser} onSave={handleSave} />
          <button className="close-button" onClick={handleCloseForm}>X</button>
        </div>
      )}
      

      <DisplayUser users={users} onEditUser={handleEditUser} />
    </div>
  );
};

export default Home;