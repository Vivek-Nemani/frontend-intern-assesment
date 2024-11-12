// Base URL of your backend (make sure it's correct)
const API_URL = "http://localhost:8080/api/users";

// Function to get the list of users
export const getUsers = async () => {
  try {
    const response = await fetch(API_URL); // GET request to fetch users
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json(); // Parse JSON response
    return data; // Return the user data
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

// Function to delete a user by id
export const deleteUser = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE', // DELETE request to remove a user
    });
    if (!response.ok) {
      throw new Error(`Failed to delete user with id ${id}`);
    }
    console.log(`Deleted user with id: ${id}`);
  } catch (error) {
    console.error(`Error deleting user with id ${id}:`, error);
    throw error;
  }
};

// Function to add a new user
export const addUser = async (user) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST', // POST request to add a user
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user), // Convert the user object to JSON
    });
    if (!response.ok) {
      throw new Error("Failed to add user");
    }
    const newUser = await response.json(); // Parse JSON response
    console.log("User added:", newUser);
    return newUser; // Return the newly added user
  } catch (error) {
    console.error("Error adding user:", error);
    throw error;
  }
};

// Function to update an existing user by id
export const updateUser = async (id, updatedUser) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT', // PUT request to update a user
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedUser), // Convert the updated user object to JSON
    });
    if (!response.ok) {
      throw new Error(`Failed to update user with id ${id}`);
    }
    const updated = await response.json(); // Parse JSON response
    console.log(`User with id ${id} updated:`, updated);
    return updated; // Return the updated user
  } catch (error) {
    console.error(`Error updating user with id ${id}:`, error);
    throw error;
  }
};