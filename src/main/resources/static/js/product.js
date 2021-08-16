var product = product || {};

product.productList = function () {
    $.ajax({
        url: page.urls.selectAllProduct,
        method: 'GET',
        success: function (response) {
            $('.table-product tbody').empty();
            response = response.sort(function (pdt1, pdt2) {
                return pdt2.id - pdt1.id;
            })
            $.each(response, function (index, item) {
                $('.table-product tbody').append(`
                    <tr>
                        <td>${item.id}</td>
                        <td>${item.productname}</td>
                        <td class='text-right'>${item.price}</td>
                        <td class='text-right'>${item.quantity}</td>
                        <td class='text-right'>
                            ${(item.price * item.quantity).toLocaleString('vi', {style: 'currency', currency: 'VND'})}
                        </td>
                        <td>${item.manufactory}</td>
                        <td class='text-right'>
                            ${item.status ?
                    '<span class="badge bg-primary">Active</span>' :
                    '<span class="badge bg-danger">Inactive</span>'}
                        </td>
                        <td>
                            <a href='javascript:;' class='btn btn-success btn-sm'
                                title='Modify product'
                                onclick="product.getProduct(${item.id})">
                                <i class='fa fa-pencil-alt'></i>
                            </a>
                            <a href='javascript:;' onclick="product.confirmChangeStatus(${item.id}, ${item.status})" 
                                class='btn ${item.status ? "btn-warning" : "btn-secondary"} btn-sm'
                                    title='${item.status ? "Inactive product" : "Active product"}'>
                                    <i class='fa ${item.status ? "fa-lock-open" : "fa-lock"}'></i></a>
                            <a href='javascript:;' class='btn btn-danger btn-sm' title='Remove product'
                                onclick="product.removeProduct(${item.id})">
                                <i class='fa fa-trash'></i>
                            </a>
                        </td>
                    </tr>
                    `);
            });
        }
    })
}

product.showModal = function () {
    product.reset();
    $('#productModal').modal('show');
}

product.save = function () {
    if ($('#productForm').valid()) {
        let productId = parseInt($('input[name="productId"]').val());
        if (productId == 0) {
            let createObj = {};
            createObj.productName = $('input[name="productName"]').val();
            createObj.productDescription = $('input[name="productDescription"]').val();
            createObj.serviceTag = $('input[name="serviceTag"]').val();
            createObj.serialNumber = $('input[name="serialNumber"]').val();
            createObj.customer = {"id": $("#customerId").val()};
            let numberMonth = $('input[name="numberMonth"]').val();
            $.ajax({
                url: page.urls.saveNewProduct + "/" + numberMonth,
                method: "POST",
                contentType: "application/json",
                datatype: "json",
                data: JSON.stringify(createObj),
                success: function () {
                    $('#productModal').modal('hide');
                    product.reset();
                    $.notify("Product has been created success", "success");
                },
                fail: function () {
                    $.notify("Something went wrong, please try again", "error");
                }
            })
        }

    }
}

product.reset = function () {
    $('#productForm').validate().resetForm();
    $('#productForm')[0].reset();
}

product.init = function () {
    product.productList();
}

$(document).ready(function () {
    product.init();
});