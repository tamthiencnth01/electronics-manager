let pageSearch = {
    urls: {
        searchProductBySerialNumber: App.BASE_URL_PRODUCT + "?search="
    }
}

var productSearch = productSearch || {};

var timeout = null; // khai báo biến timeout
$("#searchProduct").keyup(function(){ // bắt sự kiện khi gõ từ khóa tìm kiếm
    clearTimeout(timeout); // clear time out
    timeout = setTimeout(function (){
        productSearch.search();
    }, 500);
});

productSearch.search = function () {
    var data = $('#searchProduct').val(); // get dữ liệu khi đang nhập từ khóa vào ô
    console.log(data);
    console.log(typeof data);
    if (typeof data === 'string') {
        $.ajax({
            type: 'GET',
            async: true,
            url: pageSearch.urls.searchProductBySerialNumber + data,
            data: {
                'action' : 'Post_filters',
                'data': data
            },
            beforeSend: function () {
            },
            success: function (data) {
                console.log(data);
                let content = "";
                for (let i = 0; i < data.length; i++) {
                    content += `<tr>
                                <td>${data[i].serialNumber}</td>
                                <td>${data[i].productName}</td>
                                <td>${data[i].serviceTag}</td>
                                <td>${data[i].purchaseDay}</td>
                                <td>${data[i].productDescription}</td>
                            </tr>`
                }
                console.log(content);
                $('#table-search-product tbody').html(content); // show dữ liệu khi trả về
                $('#viewSearchProductModal').modal('show');
            }
        });
    } else {
        $('#viewSearchProductModal').modal('hide');
    }

}

productSearch.searchProductList = function (search){
    // console.log(search);
    // $.ajax({
    //     url: pageSearch.urls.searchProductBySerialNumber + search,
    //     method:'GET',
        // success: function(){
        //     $('.table-search-product tbody').empty();
        //     $.each(function(index, item){
        //         $('.table-search-product tbody').append(`
        //             <tr>
        //                 <td>${item.serialNumber}</td>
        //                 <td>${item.productName}</td>
        //                 <td>${item.serviceTag}</td>
        //                 <td>${item.purchaseDay}</td>
        //                 <td>${item.productDescription}</td>
        //             </tr>
        //         `);
        //     });
        //     $('#viewSearchProductModal').modal('show');
        // }
    // }).done((data) => {
    //     var dataArr = data.content;
    //     let content = "";
    //     for (let i = 0; i < dataArr.length; i++) {
    //         product = dataArr[i];
    //         content += `<tr id="tr_${dataArr[i].id}">
    //                                     <td>${dataArr[i].serialNumber}</a></td>
    //                                     <td>${dataArr[i].productName}</td>
    //                                     <td>${dataArr[i].serviceTag}</td>
    //                                     <td>${dataArr[i].purchaseDay}</td>
    //                                     <td>${dataArr[i].productDescription}</td>
    //                                 </tr>`
    //     }
    //     $("#table-search-product").html(content);
    // }).fail(function () {
    //     App.showErrorAlert("Khong Load Duoc Trang!");
    // })
}

// productSearch.init = function(){
//     productSearch.search();
// }
//
// $(document).ready(function(){
//     productSearch.init();
// });