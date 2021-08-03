var searchProduct = searchProduct || {};

// searchProduct.searchProductList = function(serialNumber){
//     $.ajax({
//         url: page.urls.getProductBySerialNumber + serialNumber,
//         method:'GET',
//         success: function(response){
//             $('.table-customer tbody').empty();
//             response = response.sort(function(ctr1, ctr2){
//                 return ctr2.id - ctr1.id;
//             })
//             $.each(response, function(index, item){
//                 $('.table-customer tbody').append(`
//                     <tr>
//                         <td>${item.id}</td>
//                         <td><a href='javascript:;' class='btn btn-success btn-sm'
//                                 title='View product'
//                                 onclick="customer.getAllProductByCustomerId(${item.id})">
//                                 ${item.customerFullName}
//                             </a></td>
//                         <td>${item.customerAddress}</td>
//                         <td>${item.customerPhone}</td>
//                         <td><a href='javascript:;' class='btn btn-success btn-sm'
//                                 title='Add product'
//                                 onclick="customer.getCustomer(${item.id})">
//                                 <i class="fa fa-plus"></i>
//                             </a>
//                         </td>
//                     </tr>
//                     `);
//             });
//             $('.table-customer').DataTable({
//                 // columnDefs: [
//                 //     { orderable: false, targets: [6,7] },
//                 //     { searchable: false, targets: [0,6,7] }
//                 // ],
//                 // order: [[0, 'desc']]
//             });
//         }
//     })
// }

searchProduct.searchProductList = function(){
    $.ajax({
        url: page.urls.getAllProducts,
        method:'GET',
        success: function(response){
            $('.table-product-search tbody').empty();
            response = response.sort(function(ctr1, ctr2){
                return ctr2.id - ctr1.id;
            })
            $.each(response, function(index, item){
                $('.table-product-search tbody').append(`
                    <tr>
                        <td>${item.productName}</td>
                        <td>${item.serviceTag}</td>
                        <td>${item.serialNumber}</td>
                        <td>${item.purchaseDay}</td>
                        <td>${item.productDescription}</td>
                    </tr>
                    `);
            });
            $('.table-product-search').DataTable({
                columnDefs: [
                    // { orderable: false, targets: [6,7] },
                    { searchable: false, targets: [0,1,3,4] }
                ],
                // order: [[0, 'desc']]
            });
        }
    })
}

searchProduct.init = function(){
    searchProduct.searchProductList();
}

$(document).ready(function(){
    searchProduct.init();
});