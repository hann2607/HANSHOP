// Angular js
app.controller("products", function ($scope, $window) {
    $scope.Products = [
        {
            name: "Điện thoại Samsung Galaxy A73 5G",
            keyword: "Dien-thoai-Samsung-Galaxy-A73-5G",
            price: 11990000,
            oldPrice: 13990000,
            color: ["Xanh", "Xám", "Trắng"],
            img: [
                "https://cdn.tgdd.vn/Products/Images/42/246195/samsung-galaxy-a73-5g-xanh-thumb-200x200.jpg",
                "https://cdn.tgdd.vn/Products/Images/42/246195/samsung-galaxy-a73-5g-xanh-1.jpg",
                "https://cdn.tgdd.vn/Products/Images/42/246195/samsung-galaxy-a73-1-1.jpg",
                "https://cdn.tgdd.vn/Products/Images/42/246195/samsung-galaxy-a73-5g-1.jpg"
            ],
            imgThumb: [
                "https://cdn.tgdd.vn/Products/Images/42/246195/samsung-galaxy-a73-5g-xanh-thumb-200x200.jpg",
                "https://cdn.tgdd.vn/Products/Images/42/246195/samsung-galaxy-a73-5g-xam-thumb-200x200.jpg",
                "https://cdn.tgdd.vn/Products/Images/42/246195/samsung-galaxy-a73-5g-trang-thumb-200x200.jpg"
            ],
            video: "",
            infomation: {
                screen: "Super AMOLED Plus6.7\"Full HD+",
                operatingSystem: "Android 12",
                rearCamera: "Chính 108 MP & Phụ 12 MP, 5 MP, 5 MP",
                frontCamera: "32 MP",
                Chip: "Snapdragon 778G 5G",
                CPUSpeed: "4 nhân 2.4 GHz & 4 nhân 1.8 GHz",
                GPU: "Adreno 642L",
                RAM: "8 GB",
                hardDrive: "128 GB",
                sim: "2 Nano SIM (SIM 2 chung khe thẻ nhớ)Hỗ trợ 5G",
                pin: "5000 mAh25 W",
                wifi: "Wi-Fi Direct, Wi-Fi hotspot, Dual-band (2.4 GHz/5 GHz)",
                bluetooth: "A2DP, LE, v5.0",
                USB: "Type-C",
                headphoneJack: "Type-C"
            }
        },
        {
            name: "Điện thoại iPhone 11 64GB",
            keyword: "Dien-thoai-iPhone-11-64GB",
            price: 11990000,
            oldPrice: 14990000,
            color: ["Trắng", "Đen", "Vàng"],
            img: [
                "https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-trang-200x200.jpg",
                "https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-trang-1-2-org.jpg",
                "https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-den-1-1-1-org.jpg",
                "https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-vang-1-2-org.jpg"
            ],
            imgThumb: [
                "https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-trang-200x200.jpg",
                "https://cdn.tgdd.vn/Products/Images/42/153856/iphone-xi-den-200x200.jpg",
                "https://cdn.tgdd.vn/Products/Images/42/153856/iphone-xi-vang-200x200.jpg"
            ],
            video: "",
            infomation: {
                screen: "IPS LCD6.1\", Liquid Retina",
                operatingSystem: "iOS 15",
                rearCamera: "2 camera 12 MP",
                frontCamera: "12 MP",
                Chip: "Apple A13 Bionic",
                CPUSpeed: "2 nhân 2.65 GHz & 4 nhân 1.8 GHz",
                GPU: "Apple A13 Bionic 6 nhân",
                RAM: "4 GB",
                hardDrive: "64 GB",
                sim: "1 Nano SIM & 1 eSIM",
                pin: "3110 mAh, Li-Ion, hỗ trợ sạc tối đa 18 W",
                wifi: "Wi-Fi hotspot, Dual-band (2.4 GHz/5 GHz), Wi-Fi 802.11 a/b/g/n/ac/ax",
                bluetooth: "A2DP, LE, v5.0",
                USB: "Lightning",
                headphoneJack: "Lightning"
            }
        },
        {
            name: "Điện thoại OPPO Reno8 Z 5G",
            keyword: "Dien-thoai-OPPO-Reno8-Z-5G",
            price: 10490000,
            oldPrice: 13990000,
            color: ["Vàng đồng", "Đen"],
            img: [
                "https://cdn.tgdd.vn/Products/Images/42/282901/oppo-reno8-z-5g-vang-thumb-2-200x200.jpg",
                "https://cdn.tgdd.vn/Products/Images/42/282901/oppo-reno8-z-5g-vang-dong-1.jpg",
                "https://cdn.tgdd.vn/Products/Images/42/282901/oppo-reno8-z-5g-1.jpg",
                "https://cdn.tgdd.vn/Products/Images/42/282901/oppo-reno8-z-5g-vang-dong-1.jpg"
            ],
            imgThumb: [
                "https://cdn.tgdd.vn/Products/Images/42/282901/oppo-reno8-z-5g-vang-thumb-2-200x200.jpg",
                "https://cdn.tgdd.vn/Products/Images/42/282901/oppo-reno8z-5g-den-thumb-200x200.jpg",
                "https://cdn.tgdd.vn/Products/Images/42/282901/oppo-reno8-z-5g-vang-thumb-2-200x200.jpg"
            ],
            video: "",
            infomation: {
                screen: "AMOLED, 6.43\", Full HD+",
                operatingSystem: "Android 12",
                rearCamera: "Chính 64 MP & Phụ 2 MP, 2 MP",
                frontCamera: "16 MP",
                Chip: "Snapdragon 695 5G",
                CPUSpeed: "2.2 GHz",
                GPU: "dreno 619",
                RAM: "8 GB",
                hardDrive: "256 GB",
                sim: "2 Nano SIM",
                pin: "Li-Po, 4500 mAh, hỗ trợ sạc tối đa 33 W, sạc siêu nhanh SuperVOOC",
                wifi: "Dual-band (2.4 GHz/5 GHz), Wi-Fi 802.11 a/b/g/n/ac",
                bluetooth: "v5.1",
                USB: "Type-C",
                headphoneJack: "Type-C, 3.5 mm"
            }
        },
        {
            name: "Điện thoại Vivo V25 5G 64GB",
            keyword: "Dien-thoai-Vivo-V25-5G-64GB",
            price: 10490000,
            oldPrice: 12990000,
            color: ["Xanh", "Đen"],
            img: [
                "https://cdn.tgdd.vn/Products/Images/42/282389/vivo-v25-pro-5g-xanh-thumb-1-200x200.jpg",
                "https://cdn.tgdd.vn/Products/Images/42/282389/vivo-v25-pro-5g-sld-xanh-1.jpg",
                "https://cdn.tgdd.vn/Products/Images/42/282389/vivo-v25-pro-5g-den-1.jpg",
                "https://cdn.tgdd.vn/Products/Images/42/282389/vivo-v25-pro-5g-sld-xanh-1.jpg"
            ],
            imgThumb: [
                "https://cdn.tgdd.vn/Products/Images/42/282389/vivo-v25-pro-5g-xanh-thumb-1-200x200.jpg",
                "https://cdn.tgdd.vn/Products/Images/42/282389/vivo-v25-pro-5g-den-thumb-1-200x200.jpg",
                "https://cdn.tgdd.vn/Products/Images/42/282389/vivo-v25-pro-5g-xanh-thumb-1-200x200.jpg"
            ],
            video: "",
            infomation: {
                screen: "AMOLED, 6.56\", Full HD+",
                operatingSystem: "Android 12",
                rearCamera: "Chính 64 MP & Phụ 8 MP, 2 MP",
                frontCamera: "32 MP",
                Chip: "MediaTek Dimensity 1300",
                CPUSpeed: "1 nhân 3 GHz, 3 nhân 2.6 GHz & 4 nhân 2 GHz",
                GPU: "Mali-G77",
                RAM: "8 GB",
                hardDrive: "128 GB",
                sim: "2 Nano SIM, Hỗ trợ 5G",
                pin: "4830 mAh, 66 W",
                wifi: "Dual-band (2.4 GHz/5 GHz), Wi-Fi hotspot, Wi-Fi Direct, Wi-Fi 802.11 a/b/g/n/ac",
                bluetooth: "v5.2",
                USB: "Type-C",
                headphoneJack: "Type-C"
            }
        },
        {
            name: "Điện thoại Samsung Galaxy A53 5G 128GB",
            keyword: "Dien-thoai-Samsung-Galaxy-A53-5G-128GB",
            price: 9990000,
            oldPrice: 11990000,
            color: ["Xanh", "Đen", "Cam"],
            img: [
                "https://cdn.tgdd.vn/Products/Images/42/246196/Samsung-Galaxy-A53-xanh-thumb-200x200.jpg",
                "https://cdn.tgdd.vn/Products/Images/42/246196/samsung-galaxy-a53-1-1.jpg",
                "https://cdn.tgdd.vn/Products/Images/42/246196/samsung-galaxy-a53-den-1.jpg",
                "https://cdn.tgdd.vn/Products/Images/42/246196/samsung-galaxy-a53-cam-1-1.jpg"
            ],
            imgThumb: [
                "https://cdn.tgdd.vn/Products/Images/42/246196/Samsung-Galaxy-A53-xanh-thumb-200x200.jpg",
                "https://cdn.tgdd.vn/Products/Images/42/246196/Samsung-Galaxy-A53-den-thumb-1-200x200.jpg",
                "https://cdn.tgdd.vn/Products/Images/42/246196/Samsung-Galaxy-A53-cam-thumb-200x200.jpg"
            ],
            video: "",
            infomation: {
                screen: "Super AMOLED, 6.5\", Full HD+",
                operatingSystem: "Android 12",
                rearCamera: "Chính 64 MP & Phụ 12 MP, 5 MP, 5 MP",
                frontCamera: "32 MP",
                Chip: "Exynos 1280",
                CPUSpeed: "2 nhân 2.4 GHz & 6 nhân 2 GHz",
                GPU: "Mali-G68",
                RAM: "8 GB",
                hardDrive: "128 GB",
                sim: "2 Nano SIM (SIM 2 chung khe thẻ nhớ)Hỗ trợ 5G",
                pin: "5000 mAh25 W",
                wifi: "Wi-Fi 802.11 a/b/g/n/ac, Wi-Fi Direct, Wi-Fi hotspot, Dual-band (2.4 GHz/5 GHz)",
                bluetooth: "v5.1",
                USB: "Type-C",
                headphoneJack: "Type-C"
            }
        },
        {
            name: "Điện thoại POCO C40 128GB",
            keyword: "Dien-thoai-POCO-C40-128GB",
            price: 2990000,
            oldPrice: 3490000,
            color: ["Đen", "Xanh", "Vàng"],
            img: [
                "https://cdn.tgdd.vn/Products/Images/42/277057/xiaomi-poco-c40-den-thumb-1-200x200.jpg",
                "https://cdn.tgdd.vn/Products/Images/42/277057/poco-c40-black-1.jpg",
                "https://cdn.tgdd.vn/Products/Images/42/277057/poco-c40-green-1.jpg",
                "https://cdn.tgdd.vn/Products/Images/42/277057/poco-c40-0.jpg"
            ],
            imgThumb: [
                "https://cdn.tgdd.vn/Products/Images/42/277057/xiaomi-poco-c40-den-thumb-1-200x200.jpg",
                "https://cdn.tgdd.vn/Products/Images/42/277057/xiaomi-poco-c40-xanh-thumb-200x200.jpg",
                "https://cdn.tgdd.vn/Products/Images/42/277057/xiaomi-poco-c40-thumb-vang-200x200.jpg"
            ],
            video: "",
            infomation: {
                screen: "IPS LCD, 6.71\", HD+",
                operatingSystem: "Android 11",
                rearCamera: "Chính 13 MP & Phụ 2 MP",
                frontCamera: "5 MP",
                Chip: "JLQ JR510",
                CPUSpeed: "4 nhân 2.0 GHz & 4 nhân 1.5 GHz",
                GPU: "Mali-G52",
                RAM: "4 GB",
                hardDrive: "64 GB",
                sim: "2 Nano SIM, Hỗ trợ 4G",
                pin: "6000 mAh18 W",
                wifi: "Wi-Fi 802.11 a/b/g/n/ac, Wi-Fi Direct, Wi-Fi hotspot, Dual-band (2.4 GHz/5 GHz)",
                bluetooth: "v5.0",
                USB: "Type-C",
                headphoneJack: "Type-C"
            }
        },
        {
            name: "Điện thoại Samsung Galaxy A33 5G 6GB",
            keyword: "Dien-thoai-Samsung-Galaxy-A33-5G-6GB",
            price: 6890000,
            oldPrice: 7290000,
            color: ["Xanh", "Đen", "Trắng"],
            img: [
                "https://cdn.tgdd.vn/Products/Images/42/246199/samsung-galaxy-a33-5g-xanh-thumb-200x200.jpg",
                "https://cdn.tgdd.vn/Products/Images/42/246199/samsung-galaxy-a33-5g-xanh-1.jpg",
                "https://cdn.tgdd.vn/Products/Images/42/246199/samsung-galaxy-a33-5g-1.jpg",
                "https://cdn.tgdd.vn/Products/Images/42/246199/samsung-galaxy-a33-1-1.jpg"
            ],
            imgThumb: [
                "https://cdn.tgdd.vn/Products/Images/42/246199/samsung-galaxy-a33-5g-xanh-thumb-200x200.jpg",
                "https://cdn.tgdd.vn/Products/Images/42/246199/samsung-galaxy-a33-5g-thumb-new-1-200x200.jpg",
                "https://cdn.tgdd.vn/Products/Images/42/246199/samsung-galaxy-a33-5g-trang-thumb-200x200.jpg"
            ],
            video: "",
            infomation: {
                screen: "Super AMOLED, 6.4\", Full HD+",
                operatingSystem: "Android 12",
                rearCamera: "Chính 48 MP & Phụ 8 MP, 5 MP, 2 MP",
                frontCamera: "13 MP",
                Chip: "Exynos 1280",
                CPUSpeed: "2 nhân 2.4 GHz & 6 nhân 2 GHz",
                GPU: "Mali-G68",
                RAM: "6 GB",
                hardDrive: "128 GB",
                sim: "2 Nano SIM (SIM 2 chung khe thẻ nhớ)Hỗ trợ 5G",
                pin: "5000 mAh, 25 W",
                wifi: "Wi-Fi 802.11 a/b/g/n/ac, Wi-Fi Direct, Wi-Fi hotspot, Dual-band (2.4 GHz/5 GHz)",
                bluetooth: "A2DP, LE, v5.1",
                USB: "Type-C",
                headphoneJack: "Type-C"
            }
        },
        {
            name: "Điện thoại iPhone 12 64GB",
            keyword: "Dien-thoai-iPhone-12-64GB",
            price: 16990000,
            oldPrice: 19990000,
            color: ["Đen", "Xanh lá", "Xanh dương"],
            img: [
                "https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-den-new-2-200x200.jpg",
                "https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-den-1-1-org.jpg",
                "https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-xanh-la-1-1-org.jpg",
                "https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-xanh-duong-1-1-org.jpg"
            ],
            imgThumb: [
                "https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-den-new-2-200x200.jpg",
                "https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-xanh-la-new-2-200x200.jpg",
                "https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-xanh-duong-new-2-200x200.jpg"
            ],
            video: "",
            infomation: {
                screen: "Super AMOLED Plus6.7\"Full HD+",
                operatingSystem: "Android 12",
                rearCamera: "Chính 108 MP & Phụ 12 MP, 5 MP, 5 MP",
                frontCamera: "32 MP",
                Chip: "Snapdragon 778G 5G",
                CPUSpeed: "4 nhân 2.4 GHz & 4 nhân 1.8 GHz",
                GPU: "Adreno 642L",
                RAM: "8 GB",
                hardDrive: "128 GB",
                sim: "2 Nano SIM (SIM 2 chung khe thẻ nhớ)Hỗ trợ 5G",
                pin: "5000 mAh25 W",
                wifi: "Wi-Fi Direct, Wi-Fi hotspot, Dual-band (2.4 GHz/5 GHz)",
                bluetooth: "A2DP, LE, v5.0",
                USB: "Type-C",
                headphoneJack: "Type-C"
            }
        }
    ];
});