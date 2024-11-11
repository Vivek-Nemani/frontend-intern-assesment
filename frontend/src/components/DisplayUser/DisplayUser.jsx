import React, { useEffect, useState } from 'react';
import { getUsers, deleteUser } from '../../services/userService';
import './DisplayUser.css';

const DisplayUser = ({ onEditUser }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsers();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    await deleteUser(id);
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="user-list">
      <h2>Registered Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="user-item">
            <span>{user.name} - {user.email}</span>
            <div className="button-container">
              <button onClick={() => onEditUser(user)}>Edit</button>
              <button onClick={() => handleDelete(user.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayUser;