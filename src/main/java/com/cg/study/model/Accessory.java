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
@Table(name = "accessories")
public class Accessory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String accessoryName;
    private Long quantity;
    private double importPrice;
    private double retailPrice;

    @OneToMany(targetEntity = Bill.class, fetch = FetchType.EAGER)
    private Set<Bill> bills;

    public Accessory(String accessoryName, Long quantity, double importPrice, double retailPrice, Set<Bill> bills) {
        this.accessoryName = accessoryName;
        this.quantity = quantity;
        this.importPrice = importPrice;
        this.retailPrice = retailPrice;
        this.bills = bills;
    }
}
