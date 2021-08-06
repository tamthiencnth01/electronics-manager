var bill = bill || {};

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
                url: page.urls.saveNewBills,
                method: "POST",
                contentType: "application/json",
                dataType: "json",
                data: JSON.stringify(createObj),
                success: function (result) {
                    // console.log(result);
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
            $('#customerId').val(response.customer.id);
            $('#productId').val(response.id);
            $('#customerFullName').text(response.customer.customerFullName);
            $('#productName').text(response.productName);
            $('#productSerial').text(response.serialNumber);
            $('#billModal').modal('show')
        }
    })
}


bill.showModal = function () {
    bill.reset();
    $('#billModal').modal('show');
}

bill.reset = function () {
    $('#createBillForm')[0].reset();
    $('#billModal').find('.modal-title');
}


bill.doingList = function(){
    $.ajax({
        url: page.urls.getAllBillsDoing,
        method:'GET',
        success: function(response){
            $('.table-doing tbody').empty();
            $.each(response, function(index, item){
                $('.table-doing tbody').append(`
                    <tr>
                        <td>${item.id}</td>
                        <td>${item.product.productName}</td>
                        <td>${item.product.serialNumber}</td>
                        <td>${item.currentAddress}</td>
                        <td>${item.startDate}</td>
                        <td>${item.firstStatus}</td>
                        <td>
                            <select id="technician" class="form-select form-select-lg technician"></select>
                            <a href='javascript:;' class='btn btn-success btn-sm'
                                title='Add technician'
                                onclick="bill.addTechnician(${item.id})">
                                <i class="fa fa-check"></i>
                            </a>
                        </td>
                    </tr>
                    `);
            });
        }
    })
}


bill.doneList = function(){
    $.ajax({
        url: page.urls.getAllBillsDone,
        method:'GET',
        success: function(response){
            $('.table-done tbody').empty();
            $.each(response, function(index, item){
                $('.table-done tbody').append(`
                    <tr>
                        <td>${item.id}</td>
                        <td>${item.user.fullName}</td>
                        <td>${item.product.productName}</td>
                        <td>${item.repairOperation}</td>
                        <td>${item.accessory.accessoryName}</td>
                        <td>${item.currentAddress}</td>
                        <td>
                            <input type="number" id="kilometer">
                            <a href='javascript:;' class='btn btn-success btn-sm'
                                title='Calculator'
                                onclick="bill.calculalorKilometer(${item.id})">
                                <i class="fa fa-calculator"></i>
                            </a>
                        </td>
                    </tr>
                    `);
            });
        }
    })
}
bill.calculalorKilometer = function (id){
    let kilometer = $("#kilometer").val();
    $.ajax({
        url: page.urls.saveNewBills + "/kilometer/" + kilometer + "/" + id,
        type: "PATCH",
        success: function() {
            bill.init();
            // $('#customerModal').modal('hide');
            $.notify("Bill has been update success", "success");
        },
        error: function (){
            $.notify("Something went wrong, please try again", "error");
        }
    })
}
bill.addTechnician = function (id){
    let userId = $("#technician").val();
    $.ajax({
        url: page.urls.saveNewBills + "/" + userId + "/" + id,
        type: "PATCH",
        success: function() {
            bill.init();
            // $('#customerModal').modal('hide');
            $.notify("Bill has been update success", "success");
        },
        error: function (){
            $.notify("Something went wrong, please try again", "error");
        }
    })
}

bill.getTechnicians= function () {
    $.ajax({
        url: page.urls.getAllTechnicians,
        method:'GET',
        success: function(response){
            $('.table-doing').find('.technician').empty();
            $.each(response, (i, item) => {
                $('.table-doing').find('.technician').append(`<option value="${item.id}">${item.fullName}</option>`);
            })
        }
    })
}

bill.search = function () {
    let serialNumber = $('#search').val();
    console.log(serialNumber);
    if (serialNumber === "") {
        bill.billList();
    } else {
        $.ajax({
            url: page.urls.searchProductBySerialNumber + serialNumber,
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
}

bill.init = function(){
    bill.billList();
    bill.doingList();
    bill.doneList();
    bill.getTechnicians();
}

$(document).ready(function(){
    bill.init();
});