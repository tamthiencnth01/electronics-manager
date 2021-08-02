package com.cg;

import com.cg.study.model.Role;
import com.cg.study.model.User;
import com.cg.study.service.user.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.ArrayList;

@SpringBootApplication
public class ElectronicsApplication {

    public static void main(String[] args) {
        SpringApplication.run(ElectronicsApplication.class, args);
    }

    @Bean
    PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    CommandLineRunner run(UserService userService) {
        return args -> {
            userService.saveRole(new Role(null, "ROLE_ADMIN"));
            userService.saveRole(new Role(null, "ROLE_BH"));
            userService.saveRole(new Role(null, "ROLE_CSKH"));
            userService.saveRole(new Role(null, "ROLE_KT"));

            userService.saveUser(new User(null, "Tin Tran", "admin", "1234", new ArrayList<>()));
            userService.saveUser(new User(null, "Thien Nguyen", "staff", "1234", new ArrayList<>()));
            userService.saveUser(new User(null, "Huy Tran", "huytran123", "1234", new ArrayList<>()));
            userService.saveUser(new User(null, "Khanh Den", "khanh123", "1234", new ArrayList<>()));

            userService.addRoleToUser("admin", "ROLE_ADMIN");
            userService.addRoleToUser("admin", "ROLE_BH");
            userService.addRoleToUser("admin", "ROLE_CSKH");
            userService.addRoleToUser("staff", "ROLE_BH");
            userService.addRoleToUser("huytran123", "ROLE_KT");
            userService.addRoleToUser("khanh123", "ROLE_CSKH");

        };
    }
}
