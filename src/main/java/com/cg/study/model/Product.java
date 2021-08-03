package com.cg.study.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import java.util.Set;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    @Min(value = 2)
    @Max(value = 100)
    private String productName;

    @Column(nullable = false)
    @Min(value = 10)
    @Max(value = 500)
    private String productDescription;

    @Column(nullable = false)
    @Min(value = 2)
    @Max(value = 100)
    private String serviceTag;

    @Column(nullable = false, unique = true)
    @Min(value = 10)
    @Max(value = 10)
    private String serialNumber;

    @Column(nullable = false)
    private String purchaseDay;

//    @OneToMany(targetEntity = Customer.class, fetch = FetchType.EAGER)
//    private Set<Customer> customers;

    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Customer customer;
}
