package com.cg.study.repository;

import com.cg.study.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Iterator;
import java.util.Optional;

@Repository
public interface IProductRepository extends JpaRepository<Product, Long> {
    Iterable<Product> findAllByCustomerId(Long id);
//    Page<Product> findProductBySerialNumber(String serialNumber);

    Iterable<Product> findProductBySerialNumber(String serialNumber);
}
