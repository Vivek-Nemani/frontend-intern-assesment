import React, { useEffect, useState } from 'react';
import { getUsers, deleteUser } from '../../services/userService';
import './DisplayUser.css';

const DisplayUser = ({ onEditUser }) => {
  const [users, setUsers] = useState([]);

  // Fetch users on component load
  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsers(); // Fetch mock data
      console.log('Fetched users:', data); // Check if data is fetched
      setUsers(data);
    };
    fetchUsers();
  }, []);

  // Handle user deletion
  const handleDelete = async (id) => {
    await deleteUser(id); // Delete user
    setUsers(users.filter(user => user.id !== id)); // Update list
  };

  return (
    <div className="user-list">
      <h2>Registered Users</h2>
      <ul>
        {users.length === 0 ? (
          <p>No users found</p>
        ) : (
          users.map((user) => (
            <li key={user.id} className="user-item">
              <span>{user.name} - {user.email}</span>
              <button onClick={() => onEditUser(user)}>Edit</button>
              <button onClick={() => handleDelete(user.id)}>Delete</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default DisplayUser;