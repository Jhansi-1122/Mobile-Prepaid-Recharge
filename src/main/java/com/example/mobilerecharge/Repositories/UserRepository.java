package com.example.mobilerecharge.Repositories;

import com.example.mobilerecharge.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByMobileNumber(String mobileNumber);
}
