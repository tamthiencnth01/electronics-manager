package com.cg.study.service.employee;

import com.cg.study.model.Employee;
import com.cg.study.service.IGeneralService;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IEmployeeService extends IGeneralService<Employee> {
}
