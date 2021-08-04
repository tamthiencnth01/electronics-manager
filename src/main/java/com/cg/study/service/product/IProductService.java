package com.cg.study.service.product;

import com.cg.study.model.Product;
import com.cg.study.service.IGeneralService;

public interface IProductService extends IGeneralService<Product> {
    Iterable<Product> findAllByCustomerId(Long id);
}
