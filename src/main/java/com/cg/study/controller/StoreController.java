package com.cg.study.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/stores")
public class StoreController {
    @GetMapping
    public ModelAndView showPageStore(){
        return new ModelAndView("/store/list");
    }
}
