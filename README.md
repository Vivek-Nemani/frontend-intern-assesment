# User Management System

A full-stack user management system built using **React** for the frontend, **Spring Boot** for the backend, and **PostgreSQL** as the database. This application allows users to be added, updated, and deleted with all the changes reflected dynamically.

## Features:
- View a list of users
- Add, edit, or delete users
- Data stored in PostgreSQL

## Requirements:
1. **Node.js** (for frontend)
2. **Java 17 or higher** (for backend)
3. **PostgreSQL** (for database)
4. **Maven** (for building the backend)

---

## 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/yourusername/user-management-system.git
cd user-management-system
```

## 2. Set Up the Backend

### 2.1. Install PostgreSQL
Ensure you have PostgreSQL installed and running on your machine. If not, follow these steps:

- [Install PostgreSQL on Windows](https://www.postgresql.org/download/windows/)
- [Install PostgreSQL on macOS](https://www.postgresql.org/download/macosx/)
- [Install PostgreSQL on Linux](https://www.postgresql.org/download/linux/)

### 2.2. Create the Database
After installing PostgreSQL, you need to create a database to hold the user data. Open the `psql` terminal (or use pgAdmin) and run the following command:

```sql
CREATE DATABASE user_managementDB;
```

### 2.3. Configure the Database Connection
In the backend folder, locate the `src/main/resources/application.properties` file. Modify the `spring.datasource` properties with your database credentials (if necessary):

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/user_managementDB
spring.datasource.username=postgres (enter your username)
spring.datasource.password=password (enter your password)
```

Make sure that the database `user_managementDB` exists in PostgreSQL before proceeding.

### 2.4. Build and Run the Backend
To build and run the backend, make sure you have **Java 17+** and **Maven** installed.
(IntelliJ for backend or any other IDE of your choice)
1. Navigate to the `backend` folder:

    ```bash
    cd backend
    ```

2. Build the Spring Boot application using Maven:

    ```bash
    mvn clean install
    ```

3. Run the backend:

    ```bash
    mvn spring-boot:run
    ```

    The backend should now be running at `http://localhost:8080`.

---

## 3. Set Up the Frontend

### 3.1. Install Node.js
Ensure you have **Node.js** installed. You can download and install it from the official website: https://nodejs.org/

### 3.2. Install Frontend Dependencies
Navigate to the `frontend` folder:

```bash
cd frontend
```

Install the necessary frontend dependencies:

```bash
npm install
```

### 3.3. Run the Frontend
Start the React development server:

```bash
npm run dev
```

The frontend should now be running at `http://localhost:5173`.

---

## 4. API Endpoints
The backend exposes the following API endpoints:

- **GET** `/api/users` – Get the list of users
- **POST** `/api/users` – Add a new user
- **PUT** `/api/users/{id}` – Update an existing user
- **DELETE** `/api/users/{id}` – Delete a user by ID

---

## 5. Testing the Application

### 5.1. Frontend
- Open `http://localhost:5173` in your browser.
- You should be able to view, add, edit, and delete users. 
(Don't forget to refresh your web page for changes to be reflected.)

### 5.2. Backend
- dont forget create a DB with name user_managementDB in postgres.
  (you can use pgAdmin to create the DB.)
- Open Postman or any API testing tool.
- Test the `/api/users` endpoint by sending GET, POST, PUT, and DELETE requests.


---

## 6. Troubleshooting

- **Backend is not connecting to the database**:
    - Ensure PostgreSQL is running.
    - Double-check the database credentials in `application.properties`.
    - Ensure the database `user_managementDB` exists.

- **Frontend is not loading**:
    - Ensure the backend is running on `http://localhost:8080` and the API URL is correctly set.
    - If there’s a CORS issue, ensure that the backend is configured to allow cross-origin requests from the frontend.

---

## 7. Conclusion

With these steps, you should have a fully functional **User Management System** running on your machine.
