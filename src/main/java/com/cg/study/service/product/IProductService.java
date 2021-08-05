package com.cg.study.service.product;

import com.cg.study.model.Product;
import com.cg.study.service.IGeneralService;
import org.springframework.data.domain.Page;

import java.util.Optional;

public interface IProductService extends IGeneralService<Product> {
    Iterable<Product> findAllByCustomerId(Long id);
    Iterable<Product> findProductBySerialNumber(String serialNumber);
}
