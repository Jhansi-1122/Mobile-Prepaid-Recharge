package com.example.mobilerecharge.Services;

import com.example.mobilerecharge.Models.Plan;
import com.example.mobilerecharge.Repositories.PlanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlanService {
    @Autowired
    private PlanRepository planRepository;

    public List<Plan> getAllPlans() {
        return planRepository.findAll();
    }

    // Additional methods for plan operations
}