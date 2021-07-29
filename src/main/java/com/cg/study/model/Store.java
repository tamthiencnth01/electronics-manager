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
@Table(name = "stores")
public class Store {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String storeName;
    private String storeAddress;
    private String storePhone;
    private String storeUserName;

    @OneToMany(targetEntity = Customer.class,fetch = FetchType.EAGER)
    private Set<Customer> customers;

    @ManyToOne
    @JoinColumn(name = "employee_id")
    private Employee employee;

    public Store(String storeName, String storeAddress, String storePhone) {
        this.storeName = storeName;
        this.storeAddress = storeAddress;
        this.storePhone = storePhone;
    }
}
