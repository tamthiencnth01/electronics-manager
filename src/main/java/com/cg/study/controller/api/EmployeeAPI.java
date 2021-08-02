package com.cg.study.controller.api;

import com.cg.study.model.Employee;
import com.cg.study.model.Role;
import com.cg.study.service.employee.IEmployeeService;
import com.cg.study.service.role.IRoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/employees")
public class EmployeeAPI {
    @Autowired
    private IEmployeeService employeeService;

    @Autowired
    private IRoleService roleService;

    @GetMapping
    public ResponseEntity<Iterable<Employee>> showListEmployees(){
        Iterable<Employee> employees = employeeService.findAll();;
        if (((List) employees).isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(employees,HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Employee> createEmployee(@RequestBody Employee employee){
        if (employee.getId() != null){
            return new ResponseEntity<>(employeeService.save(employee), HttpStatus.OK);
        }
        Optional<Role> role = roleService.findById(employee.getRole().getId());
        if (role.isPresent()){
            employee.setRole(role.get());
            return new ResponseEntity<>(employeeService.save(employee),HttpStatus.CREATED);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
