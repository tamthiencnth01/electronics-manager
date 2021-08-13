package com.cg.study.repository;

import com.cg.study.model.Bill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.StoredProcedureParameter;

@Repository
public interface IBillRepository extends JpaRepository<Bill, Long> {
    @Query("select b from Bill b where b.user.id is null ")
    public Iterable<Bill> selectBillDoing();

    @Transactional
    @Modifying
    @Query("select b from Bill b where b.user.id = :userId and b.accessory.id is null ")
    public Iterable<Bill> selectAllBillForTechnician(@Param("userId") Long userId);

    @Transactional
    @Modifying
    @Query("select b from Bill b where b.user.id = :userId and b.accessory.id is not null and b.total is not null order by b.id desc ")
    public Iterable<Bill> showHistoryAllBillForTechnician(@Param("userId") Long userId);

    @Transactional
    @Modifying
    @Query("update Bill b set b.user.id = :userId where b.id = :id")
    public void updateTechnician(@Param("userId") Long userId,@Param("id")  Long id);

//    @Transactional
//    @Modifying
//    @Query("update Bill b set b.repairOperation = :repairOperation, b.endDate = :endDate, b.accessory.id = :accesoryId where b.id = :id")
//    public void updateDoing(@Param("repairOperation")String repairOperation,@Param("endDate")String endDate, @Param("accesoryId") Long accesoryId,@Param("id")  Long id);

    @Transactional
    @Modifying
    @Procedure(procedureName = "sp_update_doing")
    public void updateDoing(@Param("repairOperation")String repairOperation,@Param("endDate")String endDate, @Param("accesoryId") Long accesoryId,@Param("id")  Long id);



//    @Transactional
//    @Modifying
//    @Query("update Accessory a set a.quantity += 1 where a.id = :accesoryId")
//    public void updateDoingAccessory(@Param("accesoryId") Long accesoryId);

    @Transactional
    @Modifying
    @Query("select b from Bill b where b.accessory.id is not null and b.kilometer = 0 ")
    public Iterable<Bill> selectAllBillDoneByTechnician();

    @Transactional
    @Modifying
    @Procedure(procedureName = "sp_add_kilometer")
    public void updateKilometer(@Param("km") double km, @Param("bill_id") Long id);

    @Transactional
    @Modifying
    @Query("select user.fullName, sum(total) from Bill group by user.id order by user.id")
    public Iterable<Bill> statisticalTechnicians();


    @Transactional
    @Modifying
    @Query("select b from Bill b where b.kilometer <> 0 ")
    public Iterable<Bill> selectAllBillsComplete();
}
