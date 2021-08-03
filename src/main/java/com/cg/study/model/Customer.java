package com.cg.study.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;
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
    @Min(value = 2)
    @Max(value = 50)
    private String customerFullName;

    @Column(nullable = false)
    @Min(value = 2)
    @Max(value = 100)
    private String customerAddress;

    @Column(nullable = false)
    @Max(value = 10)
    @Min(value = 10)
    private String customerPhone;


//    @ManyToOne
//    @JoinColumn(name = "product_id")
//    private Product product;

    @OneToMany(targetEntity = Product.class, fetch = FetchType.EAGER)
    private Set<Product> products;

//    @OneToMany(targetEntity = Store.class, fetch = FetchType.EAGER)
//    private Set<Store> stores;

//    @ManyToOne
//    @JoinColumn(name = "store_id")
//    private Store store;

    @ManyToOne
    @JoinColumn(name = "bill_id")
    private Bill bill;


}
