package com.cg.study.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Set;

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

    @OneToMany(targetEntity = Employee.class, fetch = FetchType.EAGER)
    private Set<Employee> employees;

    @OneToMany(targetEntity = Customer.class, fetch = FetchType.EAGER)
    private Set<Customer> customers;

    @OneToMany(targetEntity = Accessory.class, fetch = FetchType.EAGER)
    private Set<Accessory> accessories;

}
