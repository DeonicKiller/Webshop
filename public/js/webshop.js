/*
 * Api Class
*/
class Api {
    constructor(request = 'GET',
        route = '',
        content = 'application/json',
        send = null,
        prefix = '') {
        this.request = request;
        this.route = route;
        this.content = content;
        this.send = send;
        this.prefix = prefix;
    }

    execute() {
        var xHttp = new XMLHttpRequest();
        xHttp.onreadystatechange = function () {
            if (xHttp.readyState == XMLHttpRequest.DONE) {
                if (xHttp.status == 200 || xHttp.status == 201) {
                    var response = JSON.parse(xHttp.response);
                    showResponse(response);
                } else {
                    console.log('error: ' + xHttp.status);
                }
            }
        };
        xHttp.onerror = function () {
            console.log(xHttp.statusText);
        };
        xHttp.open(this.request, this.prefix + this.route, true);
        xHttp.setRequestHeader('Content-Type', this.content);
        xHttp.send(JSON.stringify(this.send));
    }
}
 


/**
 * log response for array or object
 */
function showResponse(response) {
    if (Array.isArray(response)) {
        response.forEach(function (value) {
            console.log(value);
        });
    } else {
        console.log(response);
    }
}
 

//API voor de producten

function getAllProducts() {
    var xHttp = new XMLHttpRequest();
    xHttp.onreadystatechange = function () {
        if (xHttp.readyState == XMLHttpRequest.DONE) {
            if (xHttp.status == 200 || xHttp.status == 201) {
                var response = JSON.parse(xHttp.response);
                showProductsSucces(response);
                addProductPageActions(response);
            } else {
                showProductsFailed(response);
            }
        }
    };
    xHttp.onerror = function () {
        // failed
    };
    xHttp.open("GET", "api/products", true);
    xHttp.setRequestHeader('Content-Type', 'application/json');
    xHttp.send(JSON.stringify(null));
}

//Succes
function showProductsSucces(products) {


    products.forEach(function (value, key) {
        var productNaam1 = document.getElementById(("name-" + (key + 1)));
        var productPrijs1 = document.getElementById(("prijs-" + (key + 1)));
        var productImage1 = document.getElementById(("image-" + (key + 1)));
        var productPlatform1 = document.getElementById(("platform-" + (key + 1)));

        var productName = value.name;
        var productPrice = "&euro; " + value.prijs;
        var productPlatform = value.platform;
        var productAfbeelding = value.image;



        productNaam1.innerHTML = productName;
        productPrijs1.innerHTML = productPrice;
        productPlatform1.innerHTML = productPlatform;
        productImage1.innerHTML = productAfbeelding;
    });
};


//Failed
function showProductsFailed(products) {

};
/*
function producten (){
var p1 = document.getElementById("Product1");
var p2 = document.getElementById("Product2");
var p3 = document.getElementById("Product3");
var p4 = document.getElementById("Product4");
var p5 = document.getElementById("Product5");

var productNaam1 = document.getElementById("name-1");
var productNaam2 = document.getElementById("name-2");
var productNaam3 = document.getElementById("name-3");
var productNaam4 = document.getElementById("name-4");
var productNaam5 = document.getElementById("name-5");
var productPrijs1 = document.getElementById("prijs-1");
var productPrijs2 = document.getElementById("prijs-2");
var productPrijs3 = document.getElementById("prijs-3");
var productPrijs4 = document.getElementById("prijs-4");
var productPrijs5 = document.getElementById("prijs-5");
var productBeschrijving1 = document.getElementById("beschrijving-1");
var productBeschrijving2 = document.getElementById("beschrijving-2");
var productBeschrijving3 = document.getElementById("beschrijving-3");
var productBeschrijving4 = document.getElementById("beschrijving-4");
var productBeschrijving5 = document.getElementById("beschrijving-5");
var productImage1 = document.getElementById("image-1");
var productImage2 = document.getElementById("image-2");
var productImage3 = document.getElementById("image-3");
var productImage4 = document.getElementById("image-4");
var productImage5 = document.getElementById("image-5");
};
*/
// Voor de Layout
var homeLogo = document.getElementById("home-logo");
var selectionImg1 = document.getElementById("selection-1");
var selectionImg2 = document.getElementById("selection-2");
var selectionImg3 = document.getElementById("selection-3");
var overlayText1 = document.getElementById("selection-1-text");
var overlayText2 = document.getElementById("selection-2-text");
var overlayText3 = document.getElementById("selection-3-text");


var homePage = document.getElementById("home-page");
var webshopPage = document.getElementById("webshop-page");
var aboutusPage = document.getElementById("aboutus-page");
var productPage = document.getElementById("product-page");
var productContainer = document.getElementById("product-container");


function showOverlay(image, text) {

    image.style.opacity = 0.3;
    text.style.opacity = 1;
}

function hideOverlay(image, text) {

    image.style.opacity = 1;
    text.style.opacity = 0;
}


function switchPage(hidePage, showPage) {

    hidePage.style.display = "none";
    showPage.style.display = "block";

}

function hidePages() {
    webshopPage.style.display = "none";
    aboutusPage.style.display = "none";
    productPage.style.display = "none";
}

function addHomePageActions() {

    selectionImg1.addEventListener("mouseover", function () {
        showOverlay(selectionImg1, overlayText1);

    });
    selectionImg2.addEventListener("mouseover", function () {
        showOverlay(selectionImg2, overlayText2);

    });
    selectionImg3.addEventListener("mouseover", function () {
        showOverlay(selectionImg3, overlayText3);

    });

    selectionImg1.addEventListener("mouseout", function () {
        hideOverlay(selectionImg1, overlayText1);
    });
    selectionImg2.addEventListener("mouseout", function () {
        hideOverlay(selectionImg2, overlayText2);
    });
    selectionImg3.addEventListener("mouseout", function () {
        hideOverlay(selectionImg3, overlayText3);
    });

    selectionImg1.addEventListener("click", function () {
        switchPage(homePage, webshopPage);
        setTimeout(function(){if(webshopPage.style.display == "block"){
            console.log("success");
            webshopPage.style.opacity = 1;
        }},200);

        

    });
    selectionImg2.addEventListener("click", function () {

        switchPage(homePage, aboutusPage);


    });

    homeLogo.addEventListener("click", function () {


        if (webshopPage.style.display == "block") {
            switchPage(webshopPage, homePage);
            webshopPage.style.opacity = 0;
        } else if (aboutusPage.style.display == "block") {
            switchPage(aboutusPage, homePage);
        }
        else if (productPage.style.display == "block"){
            switchPage(productPage, homePage);
        }
    });

    homeLogo.addEventListener("mouseover", function () {

        homeLogo.style.opacity = 0.3;

    });
    homeLogo.addEventListener("mouseout", function () {
        homeLogo.style.opacity = 1;
    });

}

function addWebshopPageActions(){
 

}
var image1 = document.getElementById("image-1");
var image2 = document.getElementById("image-2");
var image3 = document.getElementById("image-3");
var image4 = document.getElementById("image-4");
var image5 = document.getElementById("image-5");

var bigImageElement = document.getElementById("big-image");
var productDetailNameElement = document.getElementById("product-name");
var productDetailPriceElement = document.getElementById("product-price");
var productDetailPlatformElement = document.getElementById("product-platform");
//var productDetailDescriptionElement = document.getElementById("product-description");
//



function addProductPageActions(product){

    function showProductDetails(number){

        
    bigImageElement.innerHTML = product[number].image;
    productDetailNameElement.innerHTML = product[number].name;
    productDetailPriceElement.innerHTML = product[number].prijs;
    productDetailPlatformElement.innerHTML = product[number].platform;
    //productDetailDescription.innerHTML = products[number].description;

    }



    image1.addEventListener("click", function(){
        showProductDetails(0);
        switchPage(webshopPage,productPage);

        //bigImageElement.innerHTML = product[1].name;
        

    });
    image2.addEventListener("click", function(){

        showProductDetails(1);
        switchPage(webshopPage,productPage);

    });
    image3.addEventListener("click", function(){
        showProductDetails(2);
        switchPage(webshopPage,productPage);
    });
    image4.addEventListener("click", function(){
        showProductDetails(3);
        switchPage(webshopPage,productPage);
    });
    image5.addEventListener("click", function(){
        showProductDetails(4);
        switchPage(webshopPage,productPage);
    });

}


addHomePageActions();
addWebshopPageActions();
hidePages();
getAllProducts();

/*
var euroTeken = "<p>&euro;</p>";

var Products = [{
        id: 1,
        name: "Grand theft auto V",
        prijs: euroTeken + 59.98,
        beschrijving: "PS4",
        image: '<img  class="product-image" src="img/GTAV_PS4.jpg" alt="webshop">'
        
    },
    {
        id: 2,
        name: "Call of Duty IIII",
        prijs: euroTeken + 59.98,
        beschrijving: "PS4",
        image: '<img  class="product-image" src="img/COD4_PS4.jpg" alt="webshop">'
    },
    {
        id: 3,
        name: "Assassin's Creed: Odyssey",
        prijs: euroTeken + 59.98,
        beschrijving: "PS4",
        image: '<img  class="product-image" src="img/ACODYSSEY_PS4.jpg" alt="webshop">'
    },
    {
        id: 4,
        name: "Red Dead Redemption II",
        prijs: euroTeken + 59.98,
        beschrijving: "PS4",
        image: '<img  class="product-image" src="img/RDR2_PS4.jpg" alt="webshop">'
    },
    {
        id: 5,
        name: "Spider-Man",
        prijs: euroTeken + 59.98,
        beschrijving: "PS4",
        image: '<img  class="product-image" src="img/Spiderman_PS4.jpg" alt="webshop">'
    },
];
*/