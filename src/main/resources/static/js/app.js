class App {
    static BASE_URL_CREATE_USER = "http://localhost:8080/api/register";
    static BASE_URL_ROLES = "http://localhost:8080/api/roles";


    static showDeleteConfirmDialog() {
        return Swal.fire({
            icon: 'warning',
            text: 'Are you sure you want to delete the selected data ?',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it !',
            cancelButtonText: 'Cancel',
        })
    }

    static showSuccessAlert(t) {
        Swal.fire({
            icon: 'success',
            title: t,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500
        })
    }

    static showErrorAlert(t) {
        Swal.fire({
            icon: 'error',
            title: 'Warning',
            text: t,
        })
    }
}

// class Employee {
//     constructor(id,employeeName, employeeAddress,employeePhone,userName,role) {
//         this.id = id;
//         this.employeeName = employeeName;
//         this.employeeAddress = employeeAddress;
//         this.employeePhone = employeePhone;
//         this.userName = userName;
//         this.role = role;
//     }
// }

class User{
    constructor(username,password,fullName,address,phone,role) {
        this.username = username;
        this.password = password;
        this.fullName = fullName;
        this.address = address;
        this.phone = phone;
        this.role = role;
    }
}

class Role{
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}