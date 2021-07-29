package com.cg.study.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "bills")
public class Bill {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String firstStatus;
    private String startDate;
    private String endDate;
    private String repairOperation;
    private double kilometer;
    private double total;

    @ManyToOne
    @JoinColumn(name = "employee_id")
    private Employee employee;

    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Customer customer;

    @ManyToOne
    @JoinColumn(name = "accessory_id")
    private Accessory accessory;

    public Bill(String firstStatus, String startDate, String endDate, String repairOperation, double kilometer, double total, Employee employee, Customer customer, Accessory accessory) {
        this.firstStatus = firstStatus;
        this.startDate = startDate;
        this.endDate = endDate;
        this.repairOperation = repairOperation;
        this.kilometer = kilometer;
        this.total = total;
        this.employee = employee;
        this.customer = customer;
        this.accessory = accessory;
    }
}
