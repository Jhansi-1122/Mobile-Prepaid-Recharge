package com.example.mobilerecharge.Controllers;

import com.example.mobilerecharge.Models.RechargeHistory;
import com.example.mobilerecharge.Services.RechargeHistoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/recharge-history")
public class RechargeHistoryController {
    @Autowired
    private RechargeHistoryService rechargeHistoryService;

    @GetMapping
    public List<RechargeHistory> getAllRechargeHistory() {
        return rechargeHistoryService.getAllRechargeHistory();
    }

    // Additional endpoints for recharge history operations
}
