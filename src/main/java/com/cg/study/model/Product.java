package com.cg.study.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.Size;
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
    @Size(min = 2, max = 50)
    private String productName;

    @Column(nullable = false)
    @Size(min = 2, max = 500)
    private String productDescription;

    @Column(nullable = false)
    @Size(min = 2, max = 500)
    private String serviceTag;

    @Column(nullable = false, unique = true)
    @Size(min = 2, max = 10)
    private String serialNumber;

    @Column(nullable = false)
    @Size(min = 2, max = 10)
    private String purchaseDay;


    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Customer customer;
}
