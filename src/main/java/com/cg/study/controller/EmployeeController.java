package com.cg.study.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/employees")
public class EmployeeController {
    @GetMapping
    public ModelAndView showFormEmployee(){
        return new ModelAndView("/employee/list");
    }
}
