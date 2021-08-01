package com.cg.study.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController("/staff")
public class TestController {

    @GetMapping("/")
    public String testPage(){
        return "Welcome Staff MTFK";
    }
}
