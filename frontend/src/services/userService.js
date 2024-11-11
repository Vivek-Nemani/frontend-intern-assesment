// Mock user data
const mockUsers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', dateOfBirth: '1990-01-01' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com', dateOfBirth: '1992-02-02' }
  ];
  
  // Function to get the list of users
  export const getUsers = async () => {
    // Simulate a delay to mimic API request
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockUsers), 500);
    });
  };
  
  // Function to delete a user by id
  export const deleteUser = async (id) => {
    // Log deletion for testing purposes
    console.log(`Deleted user with id: ${id}`);
    return new Promise((resolve) => {
      setTimeout(() => resolve(), 200);
    });
  };
  
  // Function to add a new user
  export const addUser = async (user) => {
    console.log("Adding user:", user);
    return new Promise((resolve) => {
      setTimeout(() => resolve({ id: Date.now(), ...user }), 200);
    });
  };
  
  // Function to update an existing user by id
  export const updateUser = async (id, updatedUser) => {
    console.log(`Updating user with id ${id}:`, updatedUser);
    return new Promise((resolve) => {
      setTimeout(() => resolve(updatedUser), 200);
    });
  };