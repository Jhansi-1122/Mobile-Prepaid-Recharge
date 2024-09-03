package com.example.mobilerecharge.Models;

import jakarta.persistence.*;

import java.util.Date;import lombok.Getter;
import lombok.Setter;


@Getter
@Setter

@Entity
public class RechargeHistory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    @ManyToOne
    @JoinColumn(name = "plan_id")
    private Plan plan;
    private Date rechargeDate;
    private String paymentMode;
}
