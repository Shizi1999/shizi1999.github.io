var str = ""
var listProductPhone = [
    {
        tieuDe: "Xiaomi Mi 11 Lite 5G",
        giamTien: "500k",
        giaGoc: "18.990.000",
        giaKm: "16.490.000",
        daBan: 12,
        gianPhanTram: "30%",
        img: "/Assets/IMG/phone/1.jpg"
    },
    {
        tieuDe: "Xiaomi Mi 12",
        giamTien: "500k",
        giaGoc: "19.990.000",
        giaKm: "17.990.000",
        daBan: 22,
        gianPhanTram: "20",
        img: "/Assets/IMG/phone/2.jpg"
    },
    {
        tieuDe: "Xiaomi Redmi Note 11 5G",
        giamTien: "200k",
        giaGoc: "7.990.000",
        giaKm: "6.490.000",
        daBan: 36,
        gianPhanTram: "15",
        img: "/Assets/IMG/phone/3.jpg"
    },
    {
        tieuDe: "Xiaomi Redmi note 11 pro",
        giamTien: "100k",
        giaGoc: "8.990.000",
        giaKm: "6.990.000",
        daBan: 128,
        gianPhanTram: "10",
        img: "/Assets/IMG/phone/4.jpg"
    },
    {
        tieuDe: "Poco F2 Pro",
        giamTien: "200k",
        giaGoc: "11.490.000",
        giaKm: "9.990.000",
        daBan: 64,
        gianPhanTram: "35",
        img: "/Assets/IMG/phone/5.jpg"
    },
    {
        tieuDe: "Poco X3 GT",
        giamTien: "500k",
        giaGoc: "18.990.000",
        giaKm: "16.490.000",
        daBan: 12,
        gianPhanTram: "30%",
        img: "/Assets/IMG/phone/6.jpg"
    },
    {
        tieuDe: "Xiaomi Redmi Note 9S",
        giamTien: "500k",
        giaGoc: "19.990.000",
        giaKm: "17.990.000",
        daBan: 22,
        gianPhanTram: "20",
        img: "/Assets/IMG/phone/7.jpg"
    },
    {
        tieuDe: "Xiaomi Redmi 8",
        giamTien: "200k",
        giaGoc: "7.990.000",
        giaKm: "6.490.000",
        daBan: 36,
        gianPhanTram: "15",
        img: "/Assets/IMG/phone/8.jpg"
    },
    {
        tieuDe: "Xiaomi Redmi 9",
        giamTien: "100k",
        giaGoc: "8.990.000",
        giaKm: "6.990.000",
        daBan: 128,
        gianPhanTram: "10",
        img: "/Assets/IMG/phone/9.jpg"
    },
    {
        tieuDe: "Xiaomi Redmi Note 10 4GB",
        giamTien: "200k",
        giaGoc: "11.490.000",
        giaKm: "9.990.000",
        daBan: 64,
        gianPhanTram: "35",
        img: "/Assets/IMG/phone/10.jpg"
    },
    {
        tieuDe: "XXiaomi Redmi Note 10S",
        giamTien: "500k",
        giaGoc: "18.990.000",
        giaKm: "16.490.000",
        daBan: 12,
        gianPhanTram: "30%",
        img: "/Assets/IMG/phone/11.jpg"
    },
    {
        tieuDe: "Xiaomi Mi 10T",
        giamTien: "500k",
        giaGoc: "19.990.000",
        giaKm: "17.990.000",
        daBan: 22,
        gianPhanTram: "20",
        img: "/Assets/IMG/phone/12.jpg"
    },
    {
        tieuDe: "Xiaomi Mi 10T Pro",
        giamTien: "200k",
        giaGoc: "7.990.000",
        giaKm: "6.490.000",
        daBan: 36,
        gianPhanTram: "15",
        img: "/Assets/IMG/phone/13.jpg"
    },
    {
        tieuDe: "Xiaomi Mi 11 5G",
        giamTien: "100k",
        giaGoc: "8.990.000",
        giaKm: "6.990.000",
        daBan: 128,
        gianPhanTram: "10",
        img: "/Assets/IMG/phone/14.jpg"
    },
    {
        tieuDe: "Xiaomi Mi 11 128GB",
        giamTien: "200k",
        giaGoc: "11.490.000",
        giaKm: "9.990.000",
        daBan: 64,
        gianPhanTram: "35",
        img: "/Assets/IMG/phone/15.jpg"
    },
    {
        tieuDe: "Poco M3 Pro",
        giamTien: "500k",
        giaGoc: "18.990.000",
        giaKm: "16.490.000",
        daBan: 12,
        gianPhanTram: "30%",
        img: "/Assets/IMG/phone/16.jpg"
    },
    {
        tieuDe: "Poco X3 Pro",
        giamTien: "500k",
        giaGoc: "19.990.000",
        giaKm: "17.990.000",
        daBan: 22,
        gianPhanTram: "20",
        img: "/Assets/IMG/phone/17.jpg"
    },
    {
        tieuDe: "Xiaomi Redmi 9T",
        giamTien: "200k",
        giaGoc: "7.990.000",
        giaKm: "6.490.000",
        daBan: 36,
        gianPhanTram: "15",
        img: "/Assets/IMG/phone/18.jpg"
    },
    {
        tieuDe: "Xiaomi Redmi note 10",
        giamTien: "100k",
        giaGoc: "8.990.000",
        giaKm: "6.990.000",
        daBan: 128,
        gianPhanTram: "10",
        img: "/Assets/IMG/phone/19.jpg"
    },
    {
        tieuDe: "Redmi Note 10 pro 8GB",
        giamTien: "200k",
        giaGoc: "11.490.000",
        giaKm: "9.990.000",
        daBan: 64,
        gianPhanTram: "35",
        img: "/Assets/IMG/phone/20.jpg"
    }
]

var listProductPopular = [
    {
        tieuDe: "Xiaomi Mi 11 Lite 5G",
        giamTien: "500k",
        giaGoc: "18.990.000",
        giaKm: "16.490.000",
        daBan: 12,
        gianPhanTram: "30%",
        img: "/Assets/IMG/phone/1.jpg"
    },
    {
        tieuDe: "Xiaomi Mi 12",
        giamTien: "500k",
        giaGoc: "19.990.000",
        giaKm: "17.990.000",
        daBan: 22,
        gianPhanTram: "20",
        img: "/Assets/IMG/phone/2.jpg"
    },
    {
        tieuDe: "Xiaomi Redmi Note 11 5G",
        giamTien: "200k",
        giaGoc: "7.990.000",
        giaKm: "6.490.000",
        daBan: 36,
        gianPhanTram: "15",
        img: "/Assets/IMG/phone/3.jpg"
    },
    {
        tieuDe: "Xiaomi Redmi note 11 pro",
        giamTien: "100k",
        giaGoc: "8.990.000",
        giaKm: "6.990.000",
        daBan: 128,
        gianPhanTram: "10",
        img: "/Assets/IMG/phone/4.jpg"
    },
    {
        tieuDe: "Poco F2 Pro",
        giamTien: "200k",
        giaGoc: "11.490.000",
        giaKm: "9.990.000",
        daBan: 64,
        gianPhanTram: "35",
        img: "/Assets/IMG/phone/5.jpg"
    },
    {
        tieuDe: "Poco X3 GT",
        giamTien: "500k",
        giaGoc: "18.990.000",
        giaKm: "16.490.000",
        daBan: 12,
        gianPhanTram: "30%",
        img: "/Assets/IMG/phone/6.jpg"
    },
    {
        tieuDe: "Xiaomi Redmi Note 9S",
        giamTien: "500k",
        giaGoc: "19.990.000",
        giaKm: "17.990.000",
        daBan: 22,
        gianPhanTram: "20",
        img: "/Assets/IMG/phone/7.jpg"
    },
    {
        tieuDe: "Xiaomi Redmi 8",
        giamTien: "200k",
        giaGoc: "7.990.000",
        giaKm: "6.490.000",
        daBan: 36,
        gianPhanTram: "15",
        img: "/Assets/IMG/phone/8.jpg"
    },

]

var listProductNew = [
    {
        tieuDe: "Xiaomi Mi 11 Lite 5G",
        giamTien: "500k",
        giaGoc: "18.990.000",
        giaKm: "16.490.000",
        daBan: 12,
        gianPhanTram: "30%",
        img: "/Assets/IMG/phone/1.jpg"
    },
    {
        tieuDe: "Xiaomi Mi 12",
        giamTien: "500k",
        giaGoc: "19.990.000",
        giaKm: "17.990.000",
        daBan: 22,
        gianPhanTram: "20",
        img: "/Assets/IMG/phone/2.jpg"
    },
    {
        tieuDe: "Xiaomi Redmi Note 11 5G",
        giamTien: "200k",
        giaGoc: "7.990.000",
        giaKm: "6.490.000",
        daBan: 36,
        gianPhanTram: "15",
        img: "/Assets/IMG/phone/3.jpg"
    },
    {
        tieuDe: "Xiaomi Redmi note 11 pro",
        giamTien: "100k",
        giaGoc: "8.990.000",
        giaKm: "6.990.000",
        daBan: 128,
        gianPhanTram: "10",
        img: "/Assets/IMG/phone/4.jpg"
    },
    {
        tieuDe: "Poco F2 Pro",
        giamTien: "200k",
        giaGoc: "11.490.000",
        giaKm: "9.990.000",
        daBan: 64,
        gianPhanTram: "35",
        img: "/Assets/IMG/phone/5.jpg"
    },
    {
        tieuDe: "Poco X3 GT",
        giamTien: "500k",
        giaGoc: "18.990.000",
        giaKm: "16.490.000",
        daBan: 12,
        gianPhanTram: "30%",
        img: "/Assets/IMG/phone/6.jpg"
    },
    {
        tieuDe: "Xiaomi Redmi Note 9S",
        giamTien: "500k",
        giaGoc: "19.990.000",
        giaKm: "17.990.000",
        daBan: 22,
        gianPhanTram: "20",
        img: "/Assets/IMG/phone/7.jpg"
    },
    {
        tieuDe: "Xiaomi Redmi 8",
        giamTien: "200k",
        giaGoc: "7.990.000",
        giaKm: "6.490.000",
        daBan: 36,
        gianPhanTram: "15",
        img: "/Assets/IMG/phone/8.jpg"
    },
    {
        tieuDe: "Xiaomi Redmi 9",
        giamTien: "100k",
        giaGoc: "8.990.000",
        giaKm: "6.990.000",
        daBan: 128,
        gianPhanTram: "10",
        img: "/Assets/IMG/phone/9.jpg"
    },
    {
        tieuDe: "Xiaomi Redmi Note 10 4GB",
        giamTien: "200k",
        giaGoc: "11.490.000",
        giaKm: "9.990.000",
        daBan: 64,
        gianPhanTram: "35",
        img: "/Assets/IMG/phone/10.jpg"
    }
]

var listProductHome = [
    {
        tieuDe: "Cân thông minh Xiaomi",
        giamTien: "500k",
        giaGoc: "1.290.000",
        giaKm: "990.000",
        daBan: 12,
        gianPhanTram: "30%",
        img: "/Assets/IMG/mihome/1.jpg"
    },
    {
        tieuDe: "Máy lọc không khí Xiaomi",
        giamTien: "200k",
        giaGoc: "2.990.000",
        giaKm: "2.490.000",
        daBan: 36,
        gianPhanTram: "15",
        img: "/Assets/IMG/mihome/2.jpg"
    },
    {
        tieuDe: "Nồi chiên không dầu Xiaomi",
        giamTien: "100k",
        giaGoc: "3.990.000",
        giaKm: "2.990.000",
        daBan: 128,
        gianPhanTram: "20",
        img: "/Assets/IMG/mihome/3.jpg"
    },
    {
        tieuDe: "Quạt thông minh Xiaomi",
        giamTien: "200k",
        giaGoc: "2.490.000",
        giaKm: "1.990.000",
        daBan: 64,
        gianPhanTram: "35",
        img: "/Assets/IMG/mihome/4.jpg"
    }, {
        tieuDe: "Robot hút bụi Xiaomi",
        giamTien: "500k",
        giaGoc: "4.990.000",
        giaKm: "3.990.000",
        daBan: 22,
        gianPhanTram: "20",
        img: "/Assets/IMG/mihome/5.jpg"
    }, {
        tieuDe: "Poco X3 GT",
        giamTien: "500k",
        giaGoc: "18.990.000",
        giaKm: "16.490.000",
        daBan: 12,
        gianPhanTram: "30%",
        img: "/Assets/IMG/phone/6.jpg"
    },
    {
        tieuDe: "Xiaomi Redmi Note 9S",
        giamTien: "500k",
        giaGoc: "19.990.000",
        giaKm: "17.990.000",
        daBan: 22,
        gianPhanTram: "20",
        img: "/Assets/IMG/phone/7.jpg"
    },
    {
        tieuDe: "Xiaomi Redmi 8",
        giamTien: "200k",
        giaGoc: "7.990.000",
        giaKm: "6.490.000",
        daBan: 36,
        gianPhanTram: "15",
        img: "/Assets/IMG/phone/8.jpg"
    },
    {
        tieuDe: "Xiaomi Redmi 9",
        giamTien: "100k",
        giaGoc: "8.990.000",
        giaKm: "6.990.000",
        daBan: 128,
        gianPhanTram: "10",
        img: "/Assets/IMG/phone/9.jpg"
    },
    {
        tieuDe: "Xiaomi Redmi Note 10 4GB",
        giamTien: "200k",
        giaGoc: "11.490.000",
        giaKm: "9.990.000",
        daBan: 64,
        gianPhanTram: "35",
        img: "/Assets/IMG/phone/10.jpg"
    },
    {
        tieuDe: "Xiaomi Mipad 5",
        giamTien: "500k",
        giaGoc: "8.290.000",
        giaKm: "7.490.000",
        daBan: 12,
        gianPhanTram: "30%",
        img: "/Assets/IMG/tablet/2.jpg"
    },
    {
        tieuDe: "Xiaomi Mipad 4",
        giamTien: "200k",
        giaGoc: "6.990.000",
        giaKm: "4.490.000",
        daBan: 36,
        gianPhanTram: "15",
        img: "/Assets/IMG/tablet/1.jpg"
    },
]

var listProductTablet = [
    {
        tieuDe: "Xiaomi Mipad 5",
        giamTien: "500k",
        giaGoc: "8.290.000",
        giaKm: "7.490.000",
        daBan: 12,
        gianPhanTram: "30%",
        img: "/Assets/IMG/tablet/2.jpg"
    },
    {
        tieuDe: "Xiaomi Mipad 4",
        giamTien: "200k",
        giaGoc: "6.990.000",
        giaKm: "4.490.000",
        daBan: 36,
        gianPhanTram: "15",
        img: "/Assets/IMG/tablet/1.jpg"
    },
]

var listProduct = [
    {
        tieuDe: "Xiaomi Mi 11 Lite 5G",
        giamTien: "500k",
        giaGoc: "18.990.000",
        giaKm: "16.490.000",
        daBan: 12,
        gianPhanTram: "30%",
        img: "/Assets/IMG/phone/1.jpg"
    },
    {
        tieuDe: "Xiaomi Mi 12",
        giamTien: "500k",
        giaGoc: "19.990.000",
        giaKm: "17.990.000",
        daBan: 22,
        gianPhanTram: "20",
        img: "/Assets/IMG/phone/2.jpg"
    },
    {
        tieuDe: "Xiaomi Redmi Note 11 5G",
        giamTien: "200k",
        giaGoc: "7.990.000",
        giaKm: "6.490.000",
        daBan: 36,
        gianPhanTram: "15",
        img: "/Assets/IMG/phone/3.jpg"
    },
    {
        tieuDe: "Xiaomi Redmi note 11 pro",
        giamTien: "100k",
        giaGoc: "8.990.000",
        giaKm: "6.990.000",
        daBan: 128,
        gianPhanTram: "10",
        img: "/Assets/IMG/phone/4.jpg"
    },
    {
        tieuDe: "Poco F2 Pro",
        giamTien: "200k",
        giaGoc: "11.490.000",
        giaKm: "9.990.000",
        daBan: 64,
        gianPhanTram: "35",
        img: "/Assets/IMG/phone/5.jpg"
    },
    {
        tieuDe: "Cân thông minh Xiaomi",
        giamTien: "500k",
        giaGoc: "1.290.000",
        giaKm: "990.000",
        daBan: 12,
        gianPhanTram: "30%",
        img: "/Assets/IMG/mihome/1.jpg"
    },
    {
        tieuDe: "Máy lọc không khí Xiaomi",
        giamTien: "200k",
        giaGoc: "2.990.000",
        giaKm: "2.490.000",
        daBan: 36,
        gianPhanTram: "15",
        img: "/Assets/IMG/mihome/2.jpg"
    },
    {
        tieuDe: "Nồi chiên không dầu Xiaomi",
        giamTien: "100k",
        giaGoc: "3.990.000",
        giaKm: "2.990.000",
        daBan: 128,
        gianPhanTram: "20",
        img: "/Assets/IMG/mihome/3.jpg"
    },
    {
        tieuDe: "Quạt thông minh Xiaomi",
        giamTien: "200k",
        giaGoc: "2.490.000",
        giaKm: "1.990.000",
        daBan: 64,
        gianPhanTram: "35",
        img: "/Assets/IMG/mihome/4.jpg"
    },
    {
        tieuDe: "Robot hút bụi Xiaomi",
        giamTien: "500k",
        giaGoc: "4.990.000",
        giaKm: "3.990.000",
        daBan: 22,
        gianPhanTram: "20",
        img: "/Assets/IMG/mihome/5.jpg"
    }, {
        tieuDe: "Xiaomi Mipad 5",
        giamTien: "500k",
        giaGoc: "8.290.000",
        giaKm: "7.490.000",
        daBan: 12,
        gianPhanTram: "30%",
        img: "/Assets/IMG/tablet/2.jpg"
    },
    {
        tieuDe: "Xiaomi Mipad 4",
        giamTien: "200k",
        giaGoc: "6.990.000",
        giaKm: "4.490.000",
        daBan: 36,
        gianPhanTram: "15",
        img: "/Assets/IMG/tablet/1.jpg"
    },

]
function showInfo(arr, number) {
    var rows =
        document.querySelectorAll('.content__product-rows')
    var count = 0
    for (var i = 0; i < 4; i++) {
        rows[i].innerHTML = ""
        rows[i].classList.remove("show")
    }
    var check = 0
    var value = ""


    for (var i = 0; i < number; i++) {
        check = i
        for (var j = 0; j < 5; j++) {
            if (count == arr.length) {
                break;
            } else {
                str += ` <div class="content__product-item">
            <a  href="/Order.html" class="content__product-item-link">
                <div class="product__header">
                    <img src="${arr[count].img}" alt="" class="product__header-img">
                    <div class="product__header-favor">Yêu Thích</div>
                    <div class="product__header-sale">
                        <span class="product__header-sale-red">${arr[count].gianPhanTram}</span> 
                        <span class="product__header-sale-white">Giảm</span></div>
                </div>
                <h3 class="product__title">${arr[count].tieuDe}</h3>
                <div class="product__sale">
                    <span class="product__sale-voucher">Giảm ${arr[count].giamTien}</span>
                    <span class="product__sale-content">Mua để nhận quà</span>
                </div>
                <div class="product_cost">
                    <span class="product__cost-no-sale">đ${arr[count].giaGoc}</span>
                    <span class="product__cost-sale">đ${arr[count].giaKm}</span>
                    <i class="fas fa-truck-moving"></i>
                </div>
                <div class="product__rate">
                    <i class="far fa-heart"></i>
                    <div class="product__rate-icon-star">
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                    <span class="product__rate-selled">Đã bán ${arr[count].daBan}</span>
                </div>
                <div class="product__adress">TP.Hồ Chí Minh</div>
            </a>
        </div>`;
                count++;
                if (j == 4) {
                    rows[i].innerHTML = str
                    rows[i].classList.add('show')
                    str = ""
                    check = 0
                }
            }
        }
        
    }
    if ((check != 0 && arr.length % 5 != 0) || arr.length<5) {
        var n = arr.length % 5
        n = (5 - n)
        for (var i = 0; i < n; i++) {
            str += `<div class="content__product-item"></div>`
        }
        rows[check].innerHTML = str
        rows[check].classList.add('show')
        str = ""
    }
}
showInfo(listProduct, 4);

console.log(listProductHome.length,listProductNew.length,listProductPhone.length,listProductPopular.length,listProductTablet.length)
