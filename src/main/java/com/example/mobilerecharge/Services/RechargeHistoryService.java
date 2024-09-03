package com.example.mobilerecharge.Services;

import com.example.mobilerecharge.Models.RechargeHistory;
import com.example.mobilerecharge.Repositories.RechargeHistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RechargeHistoryService {
    @Autowired
    private RechargeHistoryRepository rechargeHistoryRepository;

    public List<RechargeHistory> getAllRechargeHistory() {
        return rechargeHistoryRepository.findAll();
    }
}
