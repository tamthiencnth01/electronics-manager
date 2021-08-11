    let bill = bill || {};
    let accessory = accessory || {};

    let userId = $("#userId").val();

    bill.billList = function () {
        $.ajax({
            url: page.urls.getAllBills ,
            method:'GET',
            success: function(response){
                $('.table-technician tbody').empty();
                $.each(response, function(index, item){
                    $('.table-technician tbody').append(`
                <tr>
                    <td>${item.id}</td>
                    <td>${item.customer.customerFullName}</td>
                    <td>${item.currentAddress}</td>
                    <td>${item.currentPhone}</td>
                    <td>${item.firstStatus}</td>
                    <td>
                        <a href='javascript:;' class='btn btn-success btn-sm'
                            title='Add technician'
                            onclick="bill.showModalUpdateDoing(${item.id})">
                            <i class="fa fa-list"></i>
                        </a>
                    </td>
                </tr>
                `);
                });
            }
        })
    }
    accessory.getAccesory = function (){
        $.ajax({
            url: page.urls.getAllAccessories,
            method:'GET',
            success: function(response){
                $('#updateDoingForm').find('.accessory').empty();
                $.each(response, (i, item) => {
                    $('#updateDoingForm').find('.accessory').append(`<option value="${item.id}">${item.accessoryName}</option>`);
                })
            }
        })
    }

    bill.showModalUpdateDoing = function (id){
        bill.reset();
        $('input[name="id"]').val(id);
        $('#updateDoingModal').modal('show');
    }


    bill.updateDoing = function (){
        let repairOperation = $('input[name="repairOperation"]').val();

        let accessory = $("#accessory").val();

        let endDate = $('input[name="endDate"]').val();

        let id  =  $('input[name="id"]').val();

        $.ajax({
            url: page.urls.updateDoingBill + repairOperation + "/" + endDate + "/" + accessory + "/" + id,
            type: "PATCH",
            success: function() {
                bill.init();
                $('#updateDoingModal').modal('hide');
                $.notify("Bill has been update success", "success");
            },
            error: function (){
                $.notify("Something went wrong, please try again", "error");
            }
        })
    }
    bill.historyTechnician = function (){
        bill.historyList();
        $("#historyTechnicianModal").modal("show");
    }

    bill.historyList = function (){
        let userId = $("#userId").val();
        $.ajax({
            url: page.urls.getAllBills + "/history/" + userId,
            method:'GET',
            success: function(response){
                $('.table-history-technicians tbody').empty();
                $.each(response, function(index, item){
                    $('.table-history-technicians tbody').append(`
                        <tr>
                            <td>${item.customer.customerFullName}</td>
                            <td>${item.product.productName}</td>
                            <td>${item.repairOperation}</td>
                            <td>${item.accessory.accessoryName}</td>
                            <td>${item.total.toLocaleString('vi', {style : 'currency', currency : 'VND'})}</td>
                        </tr>
                        `);
                });
            }
        })
    }
    bill.reset = function () {
        $('#updateDoingForm')[0].reset();
    }

    bill.init = function(){
        bill.billList();
        accessory.getAccesory();
    };


    $(document).ready(function(){
        bill.init();
    });
