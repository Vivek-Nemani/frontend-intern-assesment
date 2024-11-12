const API_URL = "http://localhost:8080/api/users";

export const getUsers = async () => {
  try {
      const response = await fetch(API_URL);
      if (!response.ok) {
          throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

// delete a user by id
export const deleteUser = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
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
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user), 
    });
    if (!response.ok) {
      throw new Error("Failed to add user");
    }
    const newUser = await response.json(); 
    console.log("User added:", newUser);
    return newUser; 
  } catch (error) {
    console.error("Error adding user:", error);
    throw error;
  }
};

export const updateUser = async (id, updatedUser) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedUser), 
    });
    if (!response.ok) {
      throw new Error(`Failed to update user with id ${id}`);
    }
    const updated = await response.json(); 
    console.log(`User with id ${id} updated:`, updated);
    return updated;
  } catch (error) {
    console.error(`Error updating user with id ${id}:`, error);
    throw error;
  }
};