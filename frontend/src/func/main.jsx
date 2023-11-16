/*------------------
    Preloader
--------------------*/
window?.addEventListener('load', function () {
    // document.querySelector(".loader").style.display = "none";
    // document.querySelector("#preloder").style.display = "none";

    /*------------------
        Product filter
    --------------------*/
    var filterItems = document.querySelectorAll('.filter__controls li');
    filterItems.forEach(function (item) {
        item?.addEventListener('click', function () {
            filterItems.forEach(function (el) {
                el.classList.remove('active');
            });
            this.classList.add('active');
        });
    });

    var propertyGallery = document.querySelector('.property__gallery');
    if (propertyGallery) {
        // var mixer = mixitup(propertyGallery);
    }
});

/*------------------
    Background Set
--------------------*/
var setBgItems = document.querySelectorAll('.set-bg');
setBgItems.forEach(function (item) {
    var bg = item.getAttribute('data-setbg');
    item.style.backgroundImage = 'url(' + bg + ')';
});

//Search Switch
document.querySelector('.search-switch')?.addEventListener('click', function () {
    document.querySelector('.search-model').style.display = 'block';
});

document.querySelector('.search-close-switch')?.addEventListener('click', function () {
    var searchModel = document.querySelector('.search-model');
    searchModel.style.display = 'none';
    document.querySelector('#search-input').value = '';
});

//Canvas Menu
document.querySelector(".canvas__open")?.addEventListener('click', function () {
    document.querySelector(".offcanvas-menu-wrapper").classList.add("active");
    document.querySelector(".offcanvas-menu-overlay").classList.add("active");
});

var overlayClose = document.querySelectorAll(".offcanvas-menu-overlay, .offcanvas__close");
overlayClose.forEach(function (item) {
    item?.addEventListener('click', function () {
        document.querySelector(".offcanvas-menu-wrapper").classList.remove("active");
        document.querySelector(".offcanvas-menu-overlay").classList.remove("active");
    });
});

/*------------------
    Navigation
--------------------*/
// Your code here for header__menu using JavaScript library or vanilla JavaScript alternative

/*------------------
    Accordin Active
--------------------*/
var collapseItems = document.querySelectorAll('.collapse');
collapseItems.forEach(function (collapse) {
    collapse?.addEventListener('shown.bs.collapse', function () {
        this.previousElementSibling.classList.add('active');
    });

    collapse?.addEventListener('hidden.bs.collapse', function () {
        this.previousElementSibling.classList.remove('active');
    });
});

/*--------------------------
    Banner Slider
----------------------------*/
// Your code here for banner__slider using JavaScript library or vanilla JavaScript alternative

/*--------------------------
    Product Details Slider
----------------------------*/
// Your code here for product__details__pic__slider using JavaScript library or vanilla JavaScript alternative

// Function to handle product thumbnails
function product_thumbs(num) {
    var thumbs = document.querySelectorAll('.product__thumb a');
    thumbs.forEach(function (e) {
        e.classList.remove("active");
        if (e.hash.split("-")[1] == num) {
            e.classList.add("active");
        }
    });
}

/*------------------
    Magnific
--------------------*/
// Your code here for image-popup using JavaScript library or vanilla JavaScript alternative

// Your code here for nice-scroll using JavaScript library or vanilla JavaScript alternative

/*------------------
    CountDown
--------------------*/
// Your code here for countdown using JavaScript library or vanilla JavaScript alternative

/*-------------------
    Range Slider
--------------------- */
// Your code here for price-range using JavaScript library or vanilla JavaScript alternative

/*------------------
    Single Product
--------------------*/
var productThumb = document.querySelectorAll('.product__thumb .pt');
productThumb.forEach(function (thumb) {
    thumb?.addEventListener('click', function () {
        var imgurl = this.getAttribute('data-imgbigurl');
        var bigImg = document.querySelector('.product__big__img').getAttribute('src');
        if (imgurl !== bigImg) {
            document.querySelector('.product__big__img').setAttribute('src', imgurl);
        }
    });
});

/*-------------------
    Quantity change
--------------------- */
var proQty = document.querySelectorAll('.pro-qty');
proQty.forEach(function (item) {
    item.insertAdjacentHTML('afterbegin', '<span class="dec qtybtn">-</span>');
    item.insertAdjacentHTML('beforeend', '<span class="inc qtybtn">+</span>');

    item?.addEventListener('click', function (event) {
        if (event.target.classList.contains('qtybtn')) {
            var button = event.target;
            var oldValue = parseFloat(button.parentElement.querySelector('input').value);
            if (button.classList.contains('inc')) {
                var newVal = oldValue + 1;
            } else {
                newVal = (oldValue > 0) ? oldValue - 1 : 0;
            }
            button.parentElement.querySelector('input').value = newVal;
        }
    });
});

/*-------------------
    Radio Btn
--------------------- */
var sizeBtnLabels = document.querySelectorAll(".size__btn label");
sizeBtnLabels.forEach(function (label) {
    label?.addEventListener('click', function () {
        sizeBtnLabels.forEach(function (item) {
            item.classList.remove('active');
        });
        this.classList.add('active');
    });
});
