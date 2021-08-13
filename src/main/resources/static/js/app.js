class App {
    static BASE_URL_CREATE_USER = "http://localhost:8080/api/register";
    static BASE_URL_ROLES = "http://localhost:8080/api/roles";
    static BASE_URL_GET_USER = "http://localhost:8080/api/users";
    static BASE_URL_CUSTOMER = "http://localhost:8080/api/customers";
    static BASE_URL_PRODUCT = "http://localhost:8080/api/products";
    static BASE_URL_BILL = "http://localhost:8080/api/bills";
    static BASE_URL_TECHNICIAN = "http://localhost:8080/api/technicians";
    static BASE_URL_BILL_DOING = "http://localhost:8080/api/bills/doing";
    static BASE_URL_BILL_DONE = "http://localhost:8080/api/bills/done";
    static BASE_URL_BILL_COMPLETE = "http://localhost:8080/api/bills/complete";
    static BASE_URL_BILL_STATICS = "http://localhost:8080/api/bills/statistical";
    static BASE_URL_ACCESSORY = "http://localhost:8080/api/accessories";


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

class Product{
    constructor(id, productName,productDescription,serviceTag,serialNumber,purchaseDay, customer,startDate,finishDate,remainingDay) {
        this.id = id;
        this.productName = productName;
        this.productDescription = productDescription;
        this.serviceTag = serviceTag;
        this.serialNumber = serialNumber;
        this.purchaseDay = purchaseDay;
        this.customer = customer;
        this.startDate = startDate;
        this.finishDate = finishDate;
        this.remainingDay = remainingDay;
    }
}

class Bill{
    constructor(id,firstStatus,startDate,endDate,repairOperation,kilometer,total,status,customer,accessory,user,product,currentAddress,currentPhone) {
        this.id = id;
        this.firstStatus = firstStatus;
        this.startDate = startDate;
        this.endDate = endDate;
        this.repairOperation = repairOperation;
        this.kilometer = kilometer;
        this.total = total;
        this.status = status;
        this.customer = customer;
        this.accessory = accessory;
        this.user = user;
        this.product = product;
        this.currentAddress = currentAddress;
        this.currentPhone = currentPhone;
    }
}
class Accessory{
    constructor(id, accessoryName,quantity,importPrice,retailPrice) {
        this.id = id;
        this.accessoryName = accessoryName;
        this.quantity = quantity;
        this.importPrice = importPrice;
        this.retailPrice = retailPrice;
    }
}

class Bill {
    constructor(id, product,  address, phoneNumber, firstStatus, customer) {
            this.id = id;
            this.product = product;
            this.address = address;
            this.phoneNumber = phoneNumber;
            this.firstStatus = firstStatus;
            this.customer = customer;
    }
}