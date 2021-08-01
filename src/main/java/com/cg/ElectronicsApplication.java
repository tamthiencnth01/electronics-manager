package com.cg;

import com.cg.study.repository.IUserRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories(basePackageClasses = IUserRepository.class)
public class ElectronicsApplication {

    public static void main(String[] args) {
        SpringApplication.run(ElectronicsApplication.class, args);
    }

}
