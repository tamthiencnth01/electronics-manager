package com.cg.study.service.customer;

import com.cg.study.model.Customer;
import com.cg.study.service.IGeneralService;

public interface ICustomerService extends IGeneralService<Customer> {
    void deleteCustomer(Long id);

    Iterable<Customer> findAllByCustomer();
}
