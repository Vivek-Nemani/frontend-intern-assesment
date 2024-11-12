package com.example.userformbackend.service;

import com.example.userformbackend.model.UserModel;
import com.example.userformbackend.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepo userRepo;

    // Constructor injection of the repository
    @Autowired
    public UserService(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    // Get all users
    public List<UserModel> getAllUsers() {
        return userRepo.findAll();
    }

    // Get user by ID
    public Optional<UserModel> getUserById(Long id) {
        return userRepo.findById(id);
    }

    // Save a new user or update an existing user
    public UserModel saveUser(UserModel user) {
        return userRepo.save(user);
    }

    // Delete a user by ID
    public void deleteUser(Long id) {
        userRepo.deleteById(id);
    }

}