package com.cg.study.repository;

import com.cg.study.model.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IEmployeeRepository extends JpaRepository<Employee, Long> {
    @Query("SELECT e from Employee e where e.userName =?1")
    Employee findByUserName(String username);
}
