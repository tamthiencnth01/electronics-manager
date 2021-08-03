let page = {
    urls: {
        getAllCustomers: App.BASE_URL_CUSTOMER,
        getAllProducts: App.BASE_URL_PRODUCT,
        getCustomer: App.BASE_URL_CUSTOMER + '/',
        saveNew: App.BASE_URL_CUSTOMER,
        saveEdit: App.BASE_URL_CUSTOMER,
        deleteCustomer: App.BASE_URL_CUSTOMER + "/",
        saveNewProduct: App.BASE_URL_PRODUCT,
        getAllProductsByCustomerId: App.BASE_URL_PRODUCT + "/",
        getProductBySerialNumber: App.BASE_URL_PRODUCT + "/"
    }
}

var customer = customer || {};

customer.customerList = function(){
    $.ajax({
        url: page.urls.getAllCustomers,
        method:'GET',
        success: function(response){
            $('.table-customer tbody').empty();
            // response = response.sort(function(ctr1, ctr2){
            //     return ctr2.id - ctr1.id;
            // })
            $.each(response, function(index, item){
                $('.table-customer tbody').append(`
                    <tr>
                        <td>${item.id}</td>
                        <td><a href='javascript:;' class='btn btn-info btn-sm'
                                title='View product'
                                onclick="customer.getAllProductByCustomerId(${item.id})">
                                ${item.customerFullName}
                            </a></td>
                        <td>${item.customerAddress}</td>
                        <td>${item.customerPhone}</td>
                        <td><a href='javascript:;' class='btn btn-success btn-sm'
                                title='Add product'
                                onclick="customer.getCustomer(${item.id})">
                                <i class="fa fa-plus"></i>
                            </a>
                        </td>
                        <td><a href='javascript:;' class='btn btn-danger btn-sm'
                                title='Delete customer'
                                onclick="customer.removeCustomer(${item.id})">
                                <i class="fa fa-trash"></i>
                            </a>
                        </td>
                    </tr>
                    `);
            });
            if ( $.fn.dataTable.isDataTable( '.table-customer' ) ) {
                table = $('.table-customer').DataTable();
            }
            else {
                table = $('.table-customer').DataTable( {
                    paging: true
                } );
            }
        }
    })
}

customer.showModal = function(){
    customer.reset();
    $('#customerModal').modal('show');
}

customer.save = function(){
    if ($('#customerForm').valid()){
        let customerId = parseInt($('input[name="id"]').val());
        if(customerId == 0){
            let createObj = {};
            createObj.customerFullName = $('input[name="customerFullName"]').val();
            createObj.customerAddress = $('input[name="customerAddress"]').val();
            createObj.customerPhone = $('input[name="customerPhone"]').val();
            delete createObj.id;
            console.log(createObj);
            $.ajax({
                url: page.urls.saveNew,
                method: "POST",
                contentType:"application/json",
                datatype :"json",
                data: JSON.stringify(createObj),
                success: function(result){
                    if(result){
                        customer.customerList();
                        $('#customerModal').modal('hide');
                        $.notify("Customer has been created success", "success");
                    }
                    else{
                        $.notify("Something went wrong, please try again", "error");
                    }
                }
            })
        }
        else{
            let modifyObj = {};
            modifyObj.customerFullName = $('input[name="customerFullName"]').val();
            modifyObj.customerAddress = $('input[name="customerAddress"]').val();
            modifyObj.customerPhone = $('input[name="customerPhone"]').val();
            modifyObj.id = customerId;

            $.ajax({
                url: page.urls.saveEdit,
                method: "PUT",
                contentType:"application/json",
                datatype :"json",
                data: JSON.stringify(modifyObj),
                success: function(result){
                    if(result){
                        customer.customerList();
                        $('#customerModal').modal('hide');
                        $.notify("Customer has been updated success", "success");
                    }
                    else{
                        $.notify("Something went wrong, please try again", "error");
                    }
                }
            })
        }

    }
}


customer.getCustomer = function(id){
    customer.reset();
    $.ajax({
        url: page.urls.getCustomer + id,
        method:'GET',
        success: function(response){
            $('#customerFullName').text(response.customerFullName);
            $('#customerId').val(response.id);
            // $('#customerModal').find('.modal-title').text('Modify customer');
            $('#productModal').modal('show');
        }
    })
}

customer.getAllProductByCustomerId = function(id){
    $.ajax({
        url: page.urls.getAllProductsByCustomerId + id,
        method:'GET',
        success: function(response){
            if (response == null) {
                App.showErrorAlert("Khách Hàng Hiện Tại Chưa Có Sản Phẩm!");
            } else {
                $('.table-product tbody').empty();
                response = response.sort(function(ctr1, ctr2){
                    return ctr2.id - ctr1.id;
                })
                $.each(response, function(index, item){
                    $('.table-product tbody').append(`
                    <tr>
                        <td>${item.id}</td>
                        <td>${item.productName}</td>
                        <td>${item.serviceTag}</td>
                        <td>${item.serialNumber}</td>
                        <td>${item.purchaseDay}</td>
                    </tr>
                    `);
                });
                $('#viewProductModal').modal('show');
            }
        }
    })
}

// customer.confirmChangeStatus = function(productId, status){
//     bootbox.confirm({
//         title: "Change product status?",
//         message: `Do you want to ${status ? 'inactive' : 'active'} the product now?`,
//         buttons: {
//             cancel: {
//                 label: '<i class="fa fa-times"></i> Cancel'
//             },
//             confirm: {
//                 label: '<i class="fa fa-check"></i> Confirm'
//             }
//         },
//         callback: function (result) {
//             if(result){
//                 product.changeStatus(productId, status);
//             }
//         }
//     });
// }

// product.changeStatus = function(productId, status){
//     let updateStatusObj = {};
//     updateStatusObj.status = !status;
//
//     $.ajax({
//         url:`https://6100c20bbca46600171cf995.mockapi.io/product/${productId}`,
//         method: "PUT",
//         contentType:"application/json",
//         datatype :"json",
//         data: JSON.stringify(updateStatusObj),
//         success: function(result){
//             if(result){
//                 product.productList();
//                 $.notify("Product status has been changed success", "success");
//             }
//             else{
//                 $.notify("Something went wrong, please try again", "error");
//             }
//         }
//     })
// }

customer.removeCustomer = function(id){

    $.ajax({
        type : "DELETE",
        url : page.urls.deleteCustomer + id
    }).done(function (){
        customer.customerList();
        App.showSuccessAlert("Đã xóa thành công!")
    }).fail(function (){
        App.showErrorAlert("Đã xảy ra lỗi!")
    })
}

customer.reset = function(){
    // $('#customerForm').validate().resetForm();
    $('#customerForm')[0].reset();
    $('#customerModal').find('.modal-title').text('Add customer');
}

customer.init = function(){
    customer.customerList();
}

$(document).ready(function(){
    customer.init();
});