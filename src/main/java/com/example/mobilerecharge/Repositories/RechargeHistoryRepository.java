package com.example.mobilerecharge.Repositories;
import com.example.mobilerecharge.Models.RechargeHistory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RechargeHistoryRepository extends JpaRepository<RechargeHistory, Long> {
}
