package com.cg.study.service.user;

import com.cg.study.model.Role;
import com.cg.study.model.User;

import java.util.List;

public interface IUserService {
    User saveUser(User user);

    Role saveRole(Role role);

    void addRoleToUser(String username, String roleName);

    User getUser(String username);

    List<User> getUsers();

}
