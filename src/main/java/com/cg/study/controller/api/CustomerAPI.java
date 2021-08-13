package com.cg.study.controller.api;

import com.cg.study.model.Customer;
import com.cg.study.service.customer.ICustomerService;
import com.cg.study.service.product.IProductService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/customers")
public class CustomerAPI {
    @Autowired
    private ICustomerService customerService;

    @Autowired
    private IProductService productService;


    @GetMapping
    public ResponseEntity<Iterable<Customer>> allCustomers() {
        Iterable<Customer> customers = customerService.findAll();
        if (((List) customers).isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(customers, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Customer> getId(@PathVariable Long id) {
        Optional<Customer> customer = customerService.findById(id);
        if (customer.isPresent()) {
            return new ResponseEntity<>(customer.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

//    @GetMapping("/{serialNumber}")
//    public ResponseEntity<Customer> getId(@PathVariable String serialNumber) {
//        Optional<Customer> customer = customerService.findById(id);
//        if (customer.isPresent()) {
//            return new ResponseEntity<>(customer.get(), HttpStatus.OK);
//        } else {
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//    }

    @PostMapping
    public ResponseEntity<Customer> saveCustomer(@RequestBody Customer customer) {
        if (customer.getId() != null) {
            return new ResponseEntity<>(customerService.save(customer), HttpStatus.OK);
        }
        return new ResponseEntity<>(customerService.save(customer), HttpStatus.CREATED);
    }

    @DeleteMapping()
    public ResponseEntity<Customer> deleteCustomer(@RequestBody Map<String, String> json) {
        Long id = Long.valueOf(json.get("id"));
        Optional<Customer> customerOptional = customerService.findById(id);
        if (!customerOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        customerService.remove(id);
        return new ResponseEntity<>(customerOptional.get(), HttpStatus.NO_CONTENT);
    }
}
