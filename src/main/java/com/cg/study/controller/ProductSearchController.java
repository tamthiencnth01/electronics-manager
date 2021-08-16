package com.cg.study.controller;

import com.cg.study.service.customer.ICustomerService;
import com.cg.study.service.product.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/searchProducts")
public class ProductSearchController {
    @Autowired
    private IProductService productService;

    @GetMapping
    public ModelAndView listSearchProducts() {
        ModelAndView modelAndView = new ModelAndView("/searchProduct/index");
        return modelAndView;
    }
}
