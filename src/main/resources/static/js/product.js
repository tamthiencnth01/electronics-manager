var product = product || {};


product.productList = function(){
    $.ajax({
        url:page.urls.selectAllProduct,
        method:'GET',
        success: function(response){
            $('.table-product tbody').empty();
            response = response.sort(function(pdt1, pdt2){
                return pdt2.id - pdt1.id;
            })
            $.each(response, function(index, item){
                $('.table-product tbody').append(`
                    <tr>
                        <td>${item.id}</td>
                        <td>${item.productName}</td>
                        <td>${item.serialNumber}</td>
                        <td>${item.serviceTag}</td>
                        <td>${item.purchaseDay}</td>
                        <td>${item.customer.customerFullName}</td>
                        <td>
                          
                        </td>
                    </tr>
                    `);
            });
            // $('.table-product').DataTable({
            //     columnDefs: [
            //         { orderable: false, targets: [6,7] },
            //         { searchable: false, targets: [0,6,7] }
            //     ],
            //     order: [[0, 'desc']]
            // });

            if ( $.fn.dataTable.isDataTable( '.table-customer' ) ) {
                table = $('.table-customer').DataTable({
                    columnDefs: [
                        // { orderable: false, targets: [6,7] },
                        // { searchable: false, targets: [1,2] }
                    ]
                });
            }
            else {
                table = $('.table-customer').DataTable( {
                    paging: true
                } );
            }
        }
    })
}

product.showModal = function(){
    product.reset();
    $('#productModal').modal('show');
}

product.save = function(){
    if($('#productForm').valid()){
        let productId = parseInt($('input[name="productId"]').val());
        if(productId == 0){
            let createObj = {};
            createObj.productName = $('input[name="productName"]').val();
            createObj.productDescription = $('input[name="productDescription"]').val();
            createObj.serviceTag = $('input[name="serviceTag"]').val();
            createObj.serialNumber = $('input[name="serialNumber"]').val();
            // createObj.purchaseDay = $('input[name="purchaseDay"]').val();
            createObj.customer = {"id": $("#customerId").val()};
            console.log(createObj);
            $.ajax({
                url:page.urls.saveNewProduct,
                method: "POST",
                contentType:"application/json",
                datatype :"json",
                data: JSON.stringify(createObj),
                success: function(result){
                    if(result){
                        $('#productModal').modal('hide');
                        product.reset();
                        $.notify("Product has been created success", "success");
                    }
                    else{
                        $.notify("Something went wrong, please try again", "error");
                    }
                }
            })
        }

    }
}


// product.getProduct = function(productId){
//     $.ajax({
//         url:`https://6100c20bbca46600171cf995.mockapi.io/product/${productId}`,
//         method:'GET',
//         success: function(response){
//             $('input[name="productname"]').val(response.productname);
//             $('input[name="price"]').val(response.price);
//             $('input[name="quantity"]').val(response.quantity);
//             $('input[name="manufactory"]').val(response.manufactory);
//             $('input[name="productId"]').val(response.id);
//             $('input[name="active"]').prop("checked", response.status);
//
//             $('#productModal').find('.modal-title').text('Modify product');
//             $('#productModal').modal('show');
//         }
//     })
// }
//
// product.confirmChangeStatus = function(productId, status){
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
//
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
//
// product.removeProduct = function(productId){
//     bootbox.confirm({
//         title: "Remove product?",
//         message: `Do you want to remove the product now? this cannot be undone.`,
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
//                 $.ajax({
//                     url:`https://6100c20bbca46600171cf995.mockapi.io/product/${productId}`,
//                     method:'DELETE',
//                     success: function(response){
//                         if(response){
//                             product.productList();
//                             $.notify("Product has been removed success", "success");
//                         }
//                         else{
//                             $.notify("Something went wrong, please try again", "error");
//                         }
//                     }
//                 })
//             }
//         }
//     });
// }

product.reset = function(){
    $('#productForm').validate().resetForm();
    $('#productForm')[0].reset();
}

product.init = function(){
    product.productList();
}

$(document).ready(function(){
    product.init();
});