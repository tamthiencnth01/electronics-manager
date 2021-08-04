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
    @Size(min = 2, max = 50)
    private String customerFullName;

    @Column(nullable = false)
    @Size(min = 2, max = 50)
    private String customerAddress;

    @Column(nullable = false)
    @Size(min = 2, max = 50)
    private String customerPhone;

    @Column(columnDefinition = "boolean default false")
    private boolean isDelete;


//    @OneToMany(targetEntity = Product.class, fetch = FetchType.EAGER)
//    private Set<Product> products;
//
//
//    @OneToMany(targetEntity = Bill.class,fetch = FetchType.EAGER)
//    private Set<Bill> bills;


}
