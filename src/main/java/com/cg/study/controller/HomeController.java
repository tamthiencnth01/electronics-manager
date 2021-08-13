package com.cg.study.controller;

import com.cg.study.service.product.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping
public class HomeController {
    @Autowired
    private IProductService productService;

    @GetMapping
    public ModelAndView homePage() {
        ModelAndView modelAndView = new ModelAndView("home/home");
        return modelAndView;
    }
}
