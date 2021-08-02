package com.cg.study.repository;

import com.cg.study.model.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.Query;

@Repository
@Transactional
public class EmployeeDao {
//    @Autowired
//    private EntityManager entityManager;
//
//    public Employee findEmployeeAccount(String userName){
//        try{
//            String sql = "Select e from " + Employee.class.getName()+ " e " //
//                    + " Where e.userName = :userName";
//            Query query = entityManager.createQuery(sql, Employee.class);
//            query.setParameter("userName",userName);
//
//            return (Employee) query.getSingleResult();
//        }catch (NoResultException e){
//            return null;
//        }
//    }
}
