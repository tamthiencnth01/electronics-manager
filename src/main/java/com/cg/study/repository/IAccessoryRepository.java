package com.cg.study.repository;

import com.cg.study.model.Accessory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IAccessoryRepository extends JpaRepository<Accessory, Long> {
}
