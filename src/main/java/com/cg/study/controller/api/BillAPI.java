package com.cg.study.controller.api;

import com.cg.study.model.Bill;
import com.cg.study.model.Customer;
import com.cg.study.service.bill.IBillService;
import com.cg.study.service.customer.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/bills")
public class BillAPI {
    @Autowired
    private IBillService billService;
    @Autowired
    private ICustomerService customerService;

    @GetMapping
    private ResponseEntity<Iterable<Bill>> showListBill(){
        Iterable<Bill> bills = billService.findAll();
        if (((List) bills).isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(bills, HttpStatus.OK);
    }

    @PostMapping
    private ResponseEntity<Bill> createBill(@RequestBody Bill bill){
        if (bill.getId() != null){
            return new ResponseEntity<>(billService.save(bill),HttpStatus.OK);
        }
        Optional<Customer> customer = customerService.findById(bill.getCustomer().getId());
        if (customer.isPresent()){
            bill.setCustomer(customer.get());
            bill.setStartDate(LocalDateTime.now().format(DateTimeFormatter.ofPattern("dd-MM-yyyy")));
            return new ResponseEntity<>(billService.save(bill),HttpStatus.CREATED);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
