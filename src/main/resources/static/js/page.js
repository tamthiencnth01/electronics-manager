let page = {
    urls: {
        saveNewUser: App.BASE_URL_CREATE_USER,
        getRole: App.BASE_URL_ROLES,
        getAllUsers: App.BASE_URL_GET_USER,
        getAllCustomers: App.BASE_URL_CUSTOMER,
        getAllProducts: App.BASE_URL_PRODUCT,
        getCustomer: App.BASE_URL_CUSTOMER + '/',
        saveNew: App.BASE_URL_CUSTOMER,
        saveEdit: App.BASE_URL_CUSTOMER,
        deleteCustomer: App.BASE_URL_CUSTOMER + "/",
        saveNewProduct: App.BASE_URL_PRODUCT,
        getAllProductsByCustomerId: App.BASE_URL_PRODUCT + "/",
        getProductBySerialNumber: App.BASE_URL_PRODUCT + "/",
        selectAllProduct: App.BASE_URL_PRODUCT,
        getAllBills: App.BASE_URL_BILL,
        getAllBillsDoing: App.BASE_URL_BILL_DOING,
        getAllBillsDone: App.BASE_URL_BILL_DONE,
        getAllBillComplete: App.BASE_URL_BILL_COMPLETE,
        getAllBilStatics: App.BASE_URL_BILL_STATICS,
        getAllTechnicians: App.BASE_URL_TECHNICIAN,
        saveNewBills: App.BASE_URL_BILL,
        selectTechnicianById: App.BASE_URL_BILL + "/technician/",
        getProduct: App.BASE_URL_PRODUCT + '/getProducts/',
        getAllAccessories: App.BASE_URL_ACCESSORY,
        updateDoingBill: App.BASE_URL_BILL + '/',
        searchProductBySerialNumber: App.BASE_URL_PRODUCT + '?search='
    }
}