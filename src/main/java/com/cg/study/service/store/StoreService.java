package com.cg.study.service.store;

import com.cg.study.model.Store;
import com.cg.study.repository.IStoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class StoreService implements IStoreService{
    @Autowired
    private IStoreRepository storeRepository;

    @Override
    public Iterable<Store> findAll() {
        return storeRepository.findAll();
    }

    @Override
    public Optional<Store> findById(Long id) {
        return storeRepository.findById(id);
    }

    @Override
    public void save(Store store) {
        storeRepository.save(store);
    }

    @Override
    public void remove(Long id) {
        storeRepository.deleteById(id);
    }
}
