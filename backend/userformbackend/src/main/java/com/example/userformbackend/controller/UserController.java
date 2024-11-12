package com.example.userformbackend.controller;

import com.example.userformbackend.model.UserModel;
import com.example.userformbackend.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")  // Base URL for all user-related endpoints
public class UserController {

    @Autowired
    private UserRepo userRepo;

    // Get all users
    @GetMapping
    public List<UserModel> getAllUsers() {
        return userRepo.findAll();
    }

    // Get a single user by ID
    @GetMapping("/{id}")
    public ResponseEntity<UserModel> getUserById(@PathVariable Long id) {
        Optional<UserModel> user = userRepo.findById(id);
        return user.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Add a new user
    @PostMapping
    public ResponseEntity<UserModel> addUser(@RequestBody UserModel userModel) {
        System.out.println("Received user data: " + userModel);  // Log received user data
        UserModel savedUser = userRepo.save(userModel);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedUser);
    }

    // Update an existing user
    @PutMapping("/{id}")
    public ResponseEntity<UserModel> updateUser(@PathVariable Long id, @RequestBody UserModel userModel) {
        if (!userRepo.existsById(id)) {
            return ResponseEntity.notFound().build();
        }

        userModel.setId(id);
        UserModel updatedUser = userRepo.save(userModel);
        return ResponseEntity.ok(updatedUser);
    }

    // Delete a user by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        if (!userRepo.existsById(id)) {
            return ResponseEntity.notFound().build();
        }

        userRepo.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}