var user = user || {};
let page = {
    urls: {
        saveNewUser: App.BASE_URL_CREATE_USER,
        getRole: App.BASE_URL_ROLES
    }
}

user.showModal = function(){
    user.reset();
    $('#productModal').modal('show');
}
user.save = function(){
    if($('#productForm').valid()){
        let productId = parseInt($('input[name="id"]').val());
        if(productId == 0){
            let createObj = {};
            createObj.username = $('input[name="username"]').val();
            createObj.password = $('input[name="password"]').val();
            createObj.fullName = $('input[name="fullName"]').val();
            createObj.address = $('input[name="address"]').val();
            createObj.phone = $('input[name="phone"]').val();
            createObj.role = {"id": $("#role").val()};
            console.log(createObj);
            $.ajax({
                url:page.urls.saveNewUser,
                method: "POST",
                contentType:"application/json",
                datatype :"json",
                data: JSON.stringify(createObj),
                success: function(result){
                    console.log(result);
                    if(result){
                        // employee.employeeList();
                        $('#productModal').modal('hide');
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
user.getRoles= function () {
    $.ajax({
        url: page.urls.getRole,
        method:'GET',
        success: function(response){
            $('#productModal').find('#role').empty();
            $.each(response, (i, item) => {
                $('#productModal').find('#role').append(`<option value="${item.id}">${item.name}</option>`);
            })
        }
    })
}

user.reset = function(){
    $('#productForm').validate().resetForm();
    $('#productForm')[0].reset();
}
user.init = function(){
    // user.employeeList();
    user.getRoles();
}

$(document).ready(function(){
    user.init();
});