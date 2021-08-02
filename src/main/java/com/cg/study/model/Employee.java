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
@Table(name = "employees")
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String employeeName;
    private String employeeAddress;
    private String employeePhone;
    private String userName;
    private String reportTo;

    @OneToMany(targetEntity = Customer.class, fetch = FetchType.EAGER)
    private Set<Customer> customers;

    @ManyToOne
    @JoinColumn(name = "role_id")
    private Role role;


    @OneToMany(targetEntity = Bill.class, fetch = FetchType.EAGER)
    private Set<Bill> bills;

}
