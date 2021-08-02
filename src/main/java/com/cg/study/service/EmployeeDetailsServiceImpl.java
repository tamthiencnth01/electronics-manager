package com.cg.study.service;

import org.springframework.stereotype.Service;

@Service
public class EmployeeDetailsServiceImpl {
//    @Autowired
//    private EmployeeDao employeeDao;
//
//    @Autowired
//    private RoleDao roleDao;
//
//    @Autowired
//    private IEmployeeRepository employeeRepository;
//
//    @Autowired
//    private IEmployeeRoleRepository employeeRoleRepository;
//
//    @Override
//    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
//        Employee employee = this.employeeRepository.findByUserName(userName);
//
//        if (employee == null) {
//            System.out.println("User not found! " + userName);
//            throw new UsernameNotFoundException("User " + userName + " was not found in the database");
//        }
//
//        System.out.println("Found User: " + employee);
//
//        // [ROLE_USER, ROLE_ADMIN,..]
//        List<EmployeeRole> roleNames = this.employeeRoleRepository.findByEmployee(employee);
//
//        List<GrantedAuthority> grantList = new ArrayList<GrantedAuthority>();
//        if (roleNames != null) {
//            for (EmployeeRole role : roleNames) {
//                // ROLE_USER, ROLE_ADMIN,..
//                GrantedAuthority authority = new SimpleGrantedAuthority(role.getRole().getRoleName());
//                grantList.add(authority);
//            }
//        }
//
//        UserDetails userDetails = (UserDetails) new User(employee.getUserNameEmp(), //
//                employee.getEncrytedPassword(), grantList);
//
//        return userDetails;
//    }
}
