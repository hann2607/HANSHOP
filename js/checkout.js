// Angular js
app.controller("checkOut", function ($scope, $window, $rootScope) {
    // Get current Time
    $scope.currentTime = new Date();

    // Create random OrderID
    $scope.getRandomInt = function (max) {
        return Math.floor(Math.random() * max);
    }
    document.getElementById("OrderID").innerText = "DH" + $scope.getRandomInt(1000000000);

    $scope.PaySuccess = true;
    $scope.PayFail = false;
    $scope.pay = function (index) {
        if (index.FormCheckOut.$valid) {
            // Show notification add success
            $scope.showNotification(true, false);
        } else {
            $scope.showNotification(false, true);
        }
    }

    $scope.showNotification = function (PaySuccess, PayFail) {
        $scope.PaySuccess = PaySuccess;
        $scope.PayFail = PayFail;
        const toastLiveExample = document.getElementById('liveToast');
        const toast = new bootstrap.Toast(toastLiveExample);
        toast.show();
    }

    var province = document.getElementById("province").value;
    $scope.changeProvince = function () {
        province = document.getElementById("province").value;
    }

    // Payment with paypal 
    function initPayPalButton() {
        var USDToVND = 24364;
        paypal.Buttons({
            style: {
                shape: 'rect',
                color: 'blue',
                layout: 'vertical',
                label: 'paypal',

            },

            createOrder: function (data, actions) {
                var price = 0;
                if (province == "HCM") {
                    price = $rootScope.totalPrice + 40000;
                } else {
                    price = $rootScope.totalPrice + 80000;
                }
                return actions.order.create({
                    purchase_units: [{ "amount": { "currency_code": "USD", "value": (price / USDToVND).toFixed(2) } }]
                });
            },

            onApprove: function (data, actions) {
                return actions.order.capture().then(function (orderData) {

                    // Full available details
                    console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

                    // Show a success message within this page, e.g.
                    const element = document.getElementById('paypal-button-container');
                    element.innerHTML = '';
                    element.innerHTML = '<h3>Thanh toán thành công!</h3>';
                    $scope.showNotification(true, false);

                    // Or go to another URL:  actions.redirect('thank_you.html');

                });
            },

            onError: function (err) {
                console.log(err);
            }
        }).render('#paypal-button-container');
    }
    initPayPalButton();
});

