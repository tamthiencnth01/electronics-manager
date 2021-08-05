package com.cg.study.service.product;

import com.cg.study.model.Product;
import com.cg.study.service.IGeneralService;

import java.util.Optional;

public interface IProductService extends IGeneralService<Product> {
    Iterable<Product> findAllByCustomerId(Long id);

//    Optional<Product> findBySerialNumber(String serialNumber);

    Iterable<Product> findProductBySerialNumber(String serialNumber);
}
