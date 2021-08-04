let page = {
    urls: {
        getAllProducts: App.BASE_URL_PRODUCT,
        getProduct: App.BASE_URL_PRODUCT + '/view/',
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
                                onclick="bill.addBill(${item.id})">
                                <i class="fa fa-plus"></i>
                            </a>
                        </td>
                    </tr>
                    `);
            });
            $('.table-bill').DataTable({
                // columnDefs: [
                //     { orderable: false, targets: [6,7] },
                //     { searchable: false, targets: [0,6,7] }
                // ],
                // order: [[0, 'desc']]
            })
        }
    })
}

bill.showModal = function () {
    bill.reset();
    $('#billModal').modal('show');
}
bill.reset = function () {
    $('#billForm').validate().resetForm();
    $('#billForm')[0].reset();
}

bill.save = function () {
    if ($('#billForm').valid()) {
        let billId = parseInt($('input[name="billId"]').val());
        if (billId == 0) {
            let createObj = {};
            createObj.product = {"id": $('#productId').val()};
            this.serialNumber = $('input[name="serialNumber"]').val();
            this.address = $('input[name="billAddress"]').val();
            this.phoneNumber = $('input[name="billPhoneNumber"]').val();
            this.statusDescription = $('input[name="statusDescription"]').val();
            this.customer = {"id": $("#customerId").val()};
            console.log(createObj);
            $.ajax({
                url: page.urls.saveNewBill,
                method: "POST",
                contentType: "application/json",
                dataType: "json",
                data: JSON.stringify(createObj),
                success: function (result) {
                    if (result) {
                        $('#billModal').modal('hide');
                        bill.reset();
                        $.notify("Đã thêm mới thành công phiếu kiểm tra sơ bộ", "success");
                    } else {
                        $.notify("Đã có lỗi xảy ra, xin thử lại", "error");
                    }
                }
            })
        }
    }
}
bill.addBill = function (billId) {
    $.ajax({
        url: page.urls.getAllProductsByCustomerId,
        method: "GET",
        success: function (response) {
            $('input[name="serialNumber"]').val(response.serialNumber);
            $('input[name="billAddress"]').val(response.address);
            $('input[name="billPhoneNumber"]').val(response.phoneNumber);
            $('input[name="statusDescription"]').val(response.statusDescription);

            $('#billModal').find('.modal-title');
            $('#billModal').modal('show');
        }
    })
}
bill.init = function () {
    bill.billList();
}
$(document).ready(function () {
    bill.init();
});

