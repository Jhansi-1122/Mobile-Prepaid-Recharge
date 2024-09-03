package com.example.mobilerecharge.Controllers;

import com.example.mobilerecharge.Models.User;
import com.example.mobilerecharge.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/{mobileNumber}")
    public User getUserByMobileNumber(@PathVariable String mobileNumber) {
        return userService.getUserByMobileNumber(mobileNumber);
    }

    // Additional endpoints for user operations
}
