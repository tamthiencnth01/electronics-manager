package com.cg.study.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import java.util.List;

@Repository
@Transactional
public class RoleDao {
//    @Autowired
//    private EntityManager entityManager;
//
//    public List<String> getRoleNames(Long userId){
//        String sql = "Select ur.role.roleName from " + EmployeeRole.class.getName() + " ur " //
//        + " Where ur.employee.id = :id";
//        Query query = this.entityManager.createQuery(sql, String.class);
//        System.out.println(userId);
//        query.setParameter("userId", userId);
//        return query.getResultList();
//    }
}
