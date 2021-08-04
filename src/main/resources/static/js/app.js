class App {
    static BASE_URL_CREATE_USER = "http://localhost:8080/api/register";
    static BASE_URL_ROLES = "http://localhost:8080/api/roles";
    static BASE_URL_GET_USER = "http://localhost:8080/api/users";
    static BASE_URL_CUSTOMER = "http://localhost:8080/api/customers";
    static BASE_URL_PRODUCT = "http://localhost:8080/api/products";
    static BASE_URL_BILL = "http://locallhost:8080/api/bill";


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


class User {
    constructor(username, password, fullName, address, phone, role) {
        this.username = username;
        this.password = password;
        this.fullName = fullName;
        this.address = address;
        this.phone = phone;
        this.role = role;
    }
}

class Role {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

class Customer {
    constructor(id, customerFullName, customerAddress, customerPhone) {
        this.id = id;
        this.customerFullName = customerFullName;
        this.customerAddress = customerAddress;
        this.customerPhone = customerPhone;
    }
}

class Product {
    constructor(id, productName, productDescription, serviceTag, serialNumber, purchaseDay, customer) {
        this.id = id;
        this.productName = productName;
        this.productDescription = productDescription;
        this.serviceTag = serviceTag;
        this.serialNumber = serialNumber;
        this.purchaseDay = purchaseDay;
        this.customer = customer;
    }
}

class Bill {
    constructor(id, product, serialNumber, address, phoneNumber, statusDescription, customer) {
            this.id = id;
            this.product = product;
            this.serialNumber = serialNumber;
            this.address = address;
            this.phoneNumber = phoneNumber;
            this.statusDescription = statusDescription;
            this.customer = customer;
    }
}