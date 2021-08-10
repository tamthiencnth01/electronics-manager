package com.cg.study.model.dto;

import com.cg.study.model.Customer;
import com.cg.study.model.Product;

import java.util.Date;

public interface IProductDto {
    Long getId();
    Long getRemainingDay();
    String getProductName();
    String getSerialNumber();
    String getServiceTag();
    String getProductDescription();
    String getPurchaseDay();
    Date getStartDate();
    Date getFinishDate();
    String getCustomer();

//    interface Customer{
//        String getCustomerFullName();
//    }
}
