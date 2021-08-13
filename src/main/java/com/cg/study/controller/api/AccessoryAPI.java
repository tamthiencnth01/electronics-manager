package com.cg.study.controller.api;

import com.cg.study.model.Accessory;
import com.cg.study.service.accessory.IAccessoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/accessories")
public class AccessoryAPI {
    @Autowired
    private IAccessoryService accessoryService;

    @GetMapping
    public ResponseEntity<Iterable<Accessory>> showListAccessory(){
        Iterable<Accessory> accessories = accessoryService.findAll();
        if (((List) accessories).isEmpty()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(accessories, HttpStatus.OK);
    }
}
