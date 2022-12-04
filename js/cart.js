// Angular js
app.controller("cart", function ($scope, $window, $rootScope) {
    // Get product and add product to cart when click add to cart
    $scope.addToCart = function (keyword) {
        $scope.Products.forEach(element => {
            if (element.keyword.indexOf(keyword) != -1) {
                $scope.product = element;
            }
        });

        $scope.productCart = {
            name: $scope.product.name,
            keyword: $scope.product.keyword,
            price: $scope.product.price,
            oldPrice: $scope.product.oldPrice,
            img: $scope.product.img,
            imgThumb: $scope.product.imgThumb,
            color: $scope.product.color[0],
            video: $scope.product.video,
            infomation: $scope.product.infomation,
            quantity: 1
        }

        $scope.ProductOnLocalStorage = ($window.localStorage.getItem("carts") != null) ? JSON.parse($window.localStorage.getItem("carts")) : [];
        $scope.ProductOnLocalStorage.push($scope.productCart);
        $window.localStorage.setItem("carts", JSON.stringify($scope.ProductOnLocalStorage));
        $scope.refreshCart();

        // Show notification add success
        const toastLiveExample = document.getElementById('liveToast');
        const toast = new bootstrap.Toast(toastLiveExample);
        toast.show();
    }

    // Remove product out of cart
    $scope.removeProductInCart = function (index) {
        $scope.ProductOnLocalStorage = ($window.localStorage.getItem("carts") != null) ? JSON.parse($window.localStorage.getItem("carts")) : [];
        if ($scope.ProductOnLocalStorage != []) {
            $scope.ProductOnLocalStorage.splice(index.$index, 1);
            $window.localStorage.setItem("carts", JSON.stringify($scope.ProductOnLocalStorage));
        }
        $scope.refreshCart();
    }

    // Total product and total price
    $scope.refreshCart = function () {
        $rootScope.carts = ($window.localStorage.getItem("carts") != null) ? JSON.parse($window.localStorage.getItem("carts")) : [];
        $rootScope.totalProduct = 0;
        $rootScope.totalPrice = 0;
        $rootScope.carts.forEach(element => {
            $rootScope.totalProduct += element.quantity;
            $rootScope.totalPrice += parseFloat(element.quantity) * parseFloat(element.price);
        });
    }

    // Update cart when change quantity product
    $scope.changeQuantity = function (index) {
        $scope.ProductOnLocalStorage = ($window.localStorage.getItem("carts") != null) ? JSON.parse($window.localStorage.getItem("carts")) : [];
        if (index.p.quantity <= 0 || index.p.quantity == undefined) {
            $scope.ProductOnLocalStorage[index.$index].quantity = 1;
        } else {
            $scope.ProductOnLocalStorage[index.$index].quantity = index.p.quantity;
        }
        $window.localStorage.setItem("carts", JSON.stringify($scope.ProductOnLocalStorage));
        $scope.refreshCart();
    }

    // Search Product By name
    $scope.searchProduct = function () {
        $scope.filterSearch = $scope.searchProductByName;
    }

    // Order by Price
    $scope.OrderByPrice = '-price';
    $scope.changeOrder = function () {
        if ($scope.OrderByPriceSelect.indexOf("giamdan") != -1) {
            $scope.OrderByPrice = '-price';
        } else {
            $scope.OrderByPrice = 'price';
        }
    }
});
