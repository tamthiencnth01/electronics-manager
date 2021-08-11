package com.cg.study.controller;

import com.cg.study.model.User;
import com.cg.study.repository.UserRepository;
import com.cg.study.service.impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Controller
@RequestMapping("")
public class HomeController {

    @Autowired
    private UserServiceImpl userService;

    @Autowired
    private UserRepository userRepository;

//    private String getPrincipal() {
//        String userName = null;
//        Long id;
//        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
//
//        if (principal instanceof UserDetails) {
//
//            userName = ((UserDetails) principal).getUsername();
//
//            User user = userRepository.findByUsername(userName);
//
//            id = user.getId();
//        } else {
//            userName = principal.toString();
//        }
//        return userName;
//    }

    private Long getPrincipal() {
        String userName = null;
        Long id;
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        if (principal instanceof UserDetails) {

            userName = ((UserDetails) principal).getUsername();

            User user = userRepository.findByUsername(userName);

            id = user.getId();
        } else {
            userName = principal.toString();
            id = Long.valueOf(principal.toString());
        }
        System.out.println(id);
        return id;
    }

    @GetMapping("/hello")
    @PreAuthorize("hasAnyAuthority('USER')")
    public ResponseEntity hello() {
        return ResponseEntity.ok("hello");
    }

    @GetMapping("/login")
    public ModelAndView login() {
        return new ModelAndView("login");
    }

    @GetMapping(value="/logout")
    public ModelAndView Logout(HttpServletRequest request, HttpServletResponse response) {

        Cookie jwtCookieRemove = new Cookie("JWT", "");
        jwtCookieRemove.setMaxAge(0);
        response.addCookie(jwtCookieRemove);
        return new ModelAndView("login");
    }

    @GetMapping("/register")
    public ModelAndView register() {
        return new ModelAndView("register");
    }

    @GetMapping("/admin")
    @PreAuthorize("hasAnyAuthority('ADMIN')")
    public ModelAndView admin(HttpServletRequest request) {
        ModelAndView modelAndView = new ModelAndView("/employee/list");
        modelAndView.addObject("userInfo", getPrincipal());
        return modelAndView;
    }

    @GetMapping("/user")
    @PreAuthorize("hasAnyAuthority('USER')")
    public ModelAndView user(HttpServletRequest request) {
        ModelAndView modelAndView = new ModelAndView("/customer/list");
        modelAndView.addObject("userInfo", getPrincipal());
        return modelAndView;
    }

    @GetMapping("/kt")
    @PreAuthorize("hasAnyAuthority('KT')")
    public ModelAndView kt(HttpServletRequest request) {
        ModelAndView modelAndView = new ModelAndView("/kythuat/list");
        modelAndView.addObject("userInfo", getPrincipal());
        return modelAndView;
    }
    @GetMapping("/cskh")
    @PreAuthorize("hasAnyAuthority('CSKH')")
    public ModelAndView cskh(HttpServletRequest request) {
        ModelAndView modelAndView = new ModelAndView("/cskh/list");
        modelAndView.addObject("userInfo", getPrincipal());
        return modelAndView;
    }

    @GetMapping("/doing")
    public ModelAndView doing() {
        ModelAndView modelAndView = new ModelAndView("/employee/doing");
        return modelAndView;
    }

    @GetMapping("/done")
    public ModelAndView done() {
        ModelAndView modelAndView = new ModelAndView("/employee/done");
        return modelAndView;
    }

    @GetMapping("/complete")
    public ModelAndView complete() {
        ModelAndView modelAndView = new ModelAndView("/employee/complete");
        return modelAndView;
    }

    @GetMapping("/accessory")
    public ModelAndView accessory() {
        ModelAndView modelAndView = new ModelAndView("/accessory/list");
        return modelAndView;
    }
}