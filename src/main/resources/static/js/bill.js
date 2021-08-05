let page = {
    urls: {
        getAllProducts: App.BASE_URL_PRODUCT,
        getProduct: App.BASE_URL_PRODUCT + '/getProducts/',
        saveNewBill: App.BASE_URL_BILL,
    }
}

let bill = new Bill();

bill.billList = function () {
    $.ajax({
        url: page.urls.getAllProducts,
        method: 'GET',
        success: function (response) {
            $('.table-bill tbody').empty();
            response = response.sort(function (pdt1, pdt2) {
                return pdt2.id - pdt1.id;
            })
            $.each(response, function (index, item) {
                $('.table-bill tbody').append(`
                <tr>
                     <td>${item.id}</td>
                        <td>${item.productName}</td>
                        <td>${item.serialNumber}</td>
                        <td>${item.serviceTag}</td>
                        <td>${item.purchaseDay}</td>
                        <td>${item.customer.customerFullName}</td>
                        <td>
                         <a href='javascript:;' class='btn btn-success btn-sm'
                                title='Add Bill'
                                onclick="bill.getProduct(${item.id})">
                                <i class="fa fa-plus"></i>
                            </a>
                        </td>
                    </tr>
                    `);
            });
        }
    })
}

bill.save = function () {
    if ($('#createBillForm').valid()) {
        let billId = parseInt($('input[name="billId"]').val());
        if (billId == 0) {
            let createObj = {};
            createObj.product = {"id": $('#productId').val()};
            createObj.currentAddress = $('input[name="billAddress"]').val();
            createObj.currentPhone = $('input[name="billPhoneNumber"]').val();
            createObj.firstStatus = $('input[name="firstStatus"]').val();
            createObj.customer = {"id": $("#customerId").val()};
            console.log(createObj);
            $.ajax({
                url: page.urls.saveNewBill,
                method: "POST",
                contentType: "application/json",
                dataType: "json",
                data: JSON.stringify(createObj),
                success: function (result) {
                    console.log(result)
                    if (result) {
                        bill.billList();
                        $('#billModal').modal('hide');
                        $.notify("Đã thêm mới thành công phiếu kiểm tra sơ bộ", "success");
                    } else {
                        $.notify("Đã có lỗi xảy ra, xin thử lại", "error");
                    }
                }
            })
        }
    }
}
bill.getProduct = function (id) {
    bill.reset();
    $.ajax({
        url: page.urls.getProduct + id,
        method: "GET",
        success: function (response) {
            console.log(response);
            $('#customerId').val(response.customer.id);
            $('#productId').val(response.id);
            $('#customerFullName').text(response.customer.customerFullName);
            $('#productName').text(response.productName);
            $('#productSerial').text(response.serialNumber);
            $('#billModal').modal('show')
        }
    })
}
bill.init = function () {
    bill.billList();
}
$(document).ready(function () {
    bill.init();
});

bill.showModal = function () {
    bill.reset();
    $('#billModal').modal('show');
}

bill.reset = function () {
    $('#createBillForm')[0].reset();
    $('#billModal').find('.modal-title');
}
