class App {
    static BASE_URL_CUSTOMER = "http://localhost:8080/api/customers";
    static BASE_URL_PRODUCT = "http://localhost:8080/api/products";

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

class Customer {
    constructor(id, customerFullName, customerAddress, customerPhone) {
        this.id = id;
        this.customerFullName = customerFullName;
        this.customerAddress = customerAddress;
        this.customerPhone = customerPhone;
    }
}

class Product{
    constructor(id, productName,productDescription,serviceTag,serialNumber,purchaseDay, customer) {
        this.id = id;
        this.productName = productName;
        this.productDescription = productDescription;
        this.serviceTag = serviceTag;
        this.serialNumber = serialNumber;
        this.purchaseDay = purchaseDay;
        this.customer = customer;
    }
}
