class App {
    static BASE_URL_EMPLOYEE = "http://localhost:8080/api/employees";
    static BASE_URL_ROLE = "http://localhost:8080/api/roles";

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

class Employee {
    constructor(id,employeeName, employeeAddress,employeePhone,userName,role) {
        this.id = id;
        this.employeeName = employeeName;
        this.employeeAddress = employeeAddress;
        this.employeePhone = employeePhone;
        this.userName = userName;
        this.role = role;
    }
}

class Role{
    constructor(id, roleName) {
        this.id = id;
        this.roleName = roleName;
    }
}