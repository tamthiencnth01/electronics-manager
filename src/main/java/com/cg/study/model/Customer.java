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
@Table(name = "customers")
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String customerFullName;
    @Column(nullable = false)
    private String customerAddress;
    @Column(nullable = false)
    private String customerPhone;


    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

    @OneToMany(targetEntity = Store.class, fetch = FetchType.EAGER)
    private Set<Store> stores;

    @ManyToOne
    @JoinColumn(name = "bill_id")
    private Bill bill;


}
