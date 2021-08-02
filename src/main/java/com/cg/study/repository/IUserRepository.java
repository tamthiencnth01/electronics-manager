package com.cg.study.repository;

import com.cg.study.model.User;
import org.springframework.data.jpa.repository.JpaRepository;


public interface IUserRepository extends JpaRepository<User, Integer> {
    User findByUsername(String userName);
}