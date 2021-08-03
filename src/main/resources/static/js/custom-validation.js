$(() => {
    $("#customerForm").validate({
        onkeyup: function(element) {$(element).valid()},
        onclick: false,
        rules: {
            customerFullName: {
                required: true,
                minlength: 2,
                maxlength: 50
            },
            customerAddress: {
                required: true,
                minlength: 2,
                maxlength: 100
            },
            customerPhone: {
                required: true,
                minlength: 10,
                maxlength: 10
            }
        },
        messages: {
            customerFullName: {
                required: "Bắt buộc nhập tên đầy đủ",
                minlength: "Hãy nhập tối thiểu 2 ký tự",
                maxlength: "Hãy nhập tối đa 50 ký tự"
            },
            customerAddress: {
                required: "Bắt buộc nhập địa chỉ đầy đủ",
                minlength: "Hãy nhập ít nhất 2 ký tự",
                maxlength: "Hãy nhập tối đã 100 ký tự"
            },
            customerPhone: {
                required: "Vui lòng nhập một số hợp lệ",
                minlength: "Hãy nhập ít nhất 10 chữ số",
                maxlength: "Hãy nhập tối đã 10 chữ số"
            }
        },
        submitHandler: function() {
            customer.save();
        }
    });

    $.validator.addMethod("validateCustomerPhone", function (value, element) {
        return this.optional(element) || /(84|0[3|5|7|8|9])+([0-9]{8})\b/g.test(value);
    }, "Hãy nhập một số điện thoại hợp lệ gồm 10 chữ số!");

    $("#productForm").validate({
        onkeyup: function(element) {$(element).valid()},
        onclick: false,
        rules: {
            productName: {
                required: true,
                minlength: 2,
                maxlength: 50
            },
            serviceTag: {
                required: true,
                minlength: 2,
                maxlength: 100
            },
            serialNumber: {
                required: true,
                minlength: 10,
                maxlength: 10
            },
            purchaseDay: {
                required: true,
                minlength: 10,
                maxlength: 10
            },
            productDescription: {
                required: true,
                minlength: 10,
                maxlength: 500
            }
        },
        messages: {
            productName: {
                required: "Bắt buộc nhập tên đầy đủ",
                minlength: "Hãy nhập tối thiểu 2 ký tự",
                maxlength: "Hãy nhập tối đa 50 ký tự"
            },
            serviceTag: {
                required: "Bắt buộc nhập tên dòng sản phẩm đầy đủ",
                minlength: "Hãy nhập tối thiểu 2 ký tự",
                maxlength: "Hãy nhập tối đa 100 ký tự"
            },
            serialNumber: {
                required: "Bắt buộc nhập số seri sản phẩm đầy đủ",
                minlength: "Hãy nhập tối thiểu 10 ký tự",
                maxlength: "Hãy nhập tối đa 10 ký tự"
            },
            purchaseDay: {
                required: "Bắt buộc nhập ngày mua đầy đủ",
                minlength: "Hãy nhập tối thiểu 10 ký tự",
                maxlength: "Hãy nhập tối đa 10 ký tự"
            },
            productDescription: {
                required: "Bắt buộc nhập mô tả sản phẩm đầy đủ",
                minlength: "Hãy nhập tối thiểu 10 ký tự",
                maxlength: "Hãy nhập tối đa 500 ký tự"
            }
        },
        submitHandler: function() {
            product.save();
        }
    });

    $.validator.addMethod("validatePassword", function (value, element) {
        return this.optional(element) || /(([\w\n?]*)\s([\w\n?]*):\s([\w\n?]*)\n?\n?\s([\w\n]*))/ig.test(value);
    }, "Hãy nhập mật khẩu từ 5 đến 16 ký tự bao gồm chữ hoa, chữ thường và ít nhất một chữ số");
});