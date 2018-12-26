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
                    //showResponse(response);

                    showProductsSucces(response);
                    addProductPageActions(response);
                    getCustomer(response);
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
var myApi = new Api();






/**
 * log response for array or object
 */
function showResponse(response) {
    if (Array.isArray(response)) {
        response.forEach(function (value) {
            console.log(value);
        });
    } else {
        console.log(response + "er is iets fout");
    }
}

//Succes
function showProductsSucces(products) {


    if (Array.isArray(products)) {
        products.forEach(function (value, key) {
            var productNaam1 = document.getElementById(("name-" + (key + 1)));
            var productPrijs1 = document.getElementById(("prijs-" + (key + 1)));
            var productImage1 = document.getElementById(("image-" + (key + 1)));
            var productPlatform1 = document.getElementById(("platform-" + (key + 1)));

            var productName = value.name;
            var productPrice = "&euro; " + value.price;
            var productPlatform = value.platform;
            var productAfbeelding = value.image;

            productNaam1.innerHTML = productName;
            productPrijs1.innerHTML = productPrice;
            productPlatform1.innerHTML = productPlatform;
            productImage1.innerHTML = productAfbeelding;
        });
    }
};


//Failed
function showProductsFailed(products) {

};


// Voor de Layout
var homeLogo = document.getElementById("home-logo");
var customerBanner = document.getElementById("banner");
var selectionImg1 = document.getElementById("selection-1");
var selectionImg2 = document.getElementById("selection-2");
var selectionImg3 = document.getElementById("selection-3");
var overlayText1 = document.getElementById("selection-1-text");
var overlayText2 = document.getElementById("selection-2-text");
var overlayText3 = document.getElementById("selection-3-text");


var homePage = document.getElementById("home-page");
var webshopPage = document.getElementById("webshop-page");
var aboutusPage = document.getElementById("aboutus-page");
var cartPage = document.getElementById("cart-page");
var productPage = document.getElementById("product-page");
var productImageContainer = document.getElementById("image-1");
var customerGegevensTest = document.getElementById("customer-page");


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
    customerGegevensTest.style.display = "none";
    cartPage.style.display = "none";

}

function fadeIn(element) {

    setTimeout(function () {
        if (element.style.display == "block") {
            element.style.opacity = 1;
        }
    }, 200);


}

function hideLogo() {
    homeLogo.style.display = "none";


}

function addHomePageActions() {

    if (homePage.style.display == "block") {
hideLogo();    }

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
        homeLogo.style.display = "block";
        switchPage(homePage, webshopPage);
        fadeIn(webshopPage);
        if (productImageContainer.innerHTML == '') {
            myApi.request = 'GET';
            myApi.route = 'products';
            myApi.send = null;
            myApi.prefix = "api/";
            myApi.execute();
        }

    });
    selectionImg2.addEventListener("click", function () {
        homeLogo.style.display = "block";
        switchPage(homePage, aboutusPage);
        fadeIn(aboutusPage);

    });

    homeLogo.addEventListener("click", function () {

        /*if (webshopPage.style.display == "block") {
            switchPage(webshopPage, homePage);
        } else if (aboutusPage.style.display == "block") {
            switchPage(aboutusPage, homePage);
        } else if (productPage.style.display == "block") {
            switchPage(productPage, homePage);
        } else if (customerGegevensTest.style.display == "block") {
            switchPage(customerGegevensTest, homePage);
        }*/
        hidePages();
        homePage.style.display = "block";

        webshopPage.style.opacity = 0;
        aboutusPage.style.opacity = 0;
        productPage.style.opacity = 0;

        homeLogo.style.display = "none";


    });

    homeLogo.addEventListener("mouseover", function () {

        homeLogo.style.opacity = 0.3;

    });
    homeLogo.addEventListener("mouseout", function () {
        homeLogo.style.opacity = 1;
    });

    customerBanner.addEventListener("click", function () {
        homeLogo.style.display = "block";
        homePage.style.display = "none";
        customerGegevensTest.style.display = "block";
    });




}

function addWebshopPageActions() {




}

function LoadInProducts(id) {
    myApi.request = 'GET';
    myApi.route = 'products/' + id;
    myApi.send = null;
    myApi.prefix = "api/";
    myApi.execute();
};
//Alle var's

var image1 = document.getElementById("image-1");
var image2 = document.getElementById("image-2");
var image3 = document.getElementById("image-3");
var image4 = document.getElementById("image-4");
var image5 = document.getElementById("image-5");
var allImages = document.getElementsByClassName("product-image");
var sendButtonCustomerInformation = document.getElementById("send-customer-information-button");


var bigImageElement = document.getElementById("big-image");
var productDetailNameElement = document.getElementById("product-name");
var productDetailPriceElement = document.getElementById("product-price");
var productDetailPlatformElement = document.getElementById("product-platform");
var productDetailDescriptionElement = document.getElementById("product-description");
var addCartButton = document.getElementById("cartadd-button");
var cartButton = document.getElementById("cart");





/*function changeImageSize(){
    for(var i = 0; allImages.length; i++){
        allImages[i].style.height = "330px";
        allImages[i].style.width = "280px";
    }
}*/

var newProduct;
var newOrder;
var totalPrice = 0;
var subtotal = 0;
var cartAmount = document.getElementById("cart-amount");
var cartSubtotal = document.getElementById("cart-subtotal");



function addProductPageActions(product) {




    productDetailDescriptionElement.innerHTML = "Amerika, 1899. Wetshandhavers hebben het gemunt op de laatste outlaw-bendes. Wie zich niet wil overgeven, wordt genadeloos afgemaakt. Arthur Morgan en de Van der Linde-bende slaan op de vlucht nadat in het plaatsje Blackwater een overval slecht afloopt. Met federale agenten en de beste premiejagers van het Westen op de hielen, trekken ze door het ruige hart van Amerika, een spoor van overvallen en vuurgevechten achter zich latend.<br><br> Als door interne strubbelingen de bende uiteen dreigt te vallen, wordt Arthur gedwongen een keuze te maken. Kiest hij voor zijn idealen of voor de bende waar hij alles aan te danken heeft?<br><br> Red Dead Redemption 2, van de makers van Grand Theft Auto V en Red Dead Redemption, is een episch verhaal over het einde van het Wilde Westen en het begin van een nieuw tijdperk.";

    function showProductDetails(number) {


        bigImageElement.innerHTML = product[number].image;
        productDetailNameElement.innerHTML = product[number].name;
        productDetailPriceElement.innerHTML = "&euro; " + product[number].price;
        productDetailPlatformElement.innerHTML = product[number].platform;


    }


    image1.addEventListener("click", function () {
        showProductDetails(0);
        LoadInProducts(0);

        switchPage(webshopPage, productPage);
        fadeIn(productPage);




    });
    image2.addEventListener("click", function () {

        showProductDetails(1);
        LoadInProducts(1);
        switchPage(webshopPage, productPage);
        fadeIn(productPage);


    });
    image3.addEventListener("click", function () {
        showProductDetails(2);
        LoadInProducts(2);
        switchPage(webshopPage, productPage);
        fadeIn(productPage);


    });
    image4.addEventListener("click", function () {
        showProductDetails(3);
        LoadInProducts(3);
        switchPage(webshopPage, productPage);
        fadeIn(productPage);


    });
    image5.addEventListener("click", function () {
        showProductDetails(4);
        LoadInProducts(4);
        switchPage(webshopPage, productPage);
        fadeIn(productPage);




    });
    addCartButton.addEventListener("click", function () {
        newOrder = new Order();
        addToCart(0);
    });

    function addToCart(number) {
        newProduct = new Product();
        var amountField = document.getElementById("amount-field").value;
        var productPrice = product[number].price;

        subtotal += (amountField * productPrice);
        cartSubtotal.innerHTML = "&euro; " + subtotal;
        console.log(subtotal);

        newProduct.setPrice(productPrice);
        newOrder.setTotalPrice(subtotal);

        console.log(newOrder.getTotalPrice());

        appendCartItem();

    }
    cartButton.addEventListener("click", function () {

        hidePages();
        homePage.style.display = "none";
        cartPage.style.display = "block";
        homeLogo.style.display = "block";
    });


}
function signUp() {

    var sendEmailButton = document.getElementById("send-email-button");
    sendEmailButton.addEventListener("click", function () {

        var emailInput = document.getElementById("email-input");
        var emailInputValue = document.getElementById("email-input").value;
        var emailFeedback = document.getElementById("newsletter-feedback");
        var emailToString = "" + emailInputValue + "";
        var reEmail = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;
        testExecute();

        if (!emailToString.match(reEmail)) {


            emailFeedback.innerHTML = "Email niet geldig. Probeer opnieuw";
            setTimeout(function () {
                emailFeedback.innerHTML = "";
                emailInput.value = ""
            }, 1000);
            console.log(emailToString);

        } else if (emailList == null) {


            myApi.request = 'POST';
            myApi.route = 'customers';
            myApi.send = {
                first_name: "",
                last_name: "",
                address: "",
                city: "",
                ["e-mail"]: emailInputValue,
            };
            myApi.prefix = "api/";
            myApi.execute();
            emailFeedback.innerHTML = "Je bent succesvol aangemeld";
            setTimeout(function () {
                emailFeedback.innerHTML = "";
                emailInput.value = ""
            }, 1000);
            emailList = [];
            testExecute();

        } else if (checkEmailExists(emailInputValue)) {
            emailFeedback.innerHTML = "Je bent al aangemeld";
            setTimeout(function () {
                emailFeedback.innerHTML = "";
                emailInput.value = ""
            }, 1000);
        } else {
            myApi.request = 'POST';
            myApi.route = 'customers';
            myApi.send = {
                first_name: "",
                last_name: "",
                address: "",
                city: "",
                ["e-mail"]: emailInputValue,
            };
            myApi.prefix = "api/";
            myApi.execute();
            emailFeedback.innerHTML = "Je bent succesvol aangemeld";
            setTimeout(function () {
                emailFeedback.innerHTML = "";
                emailInput.value = ""
            }, 1000);
            emailList = [];
            testExecute();
        }
    });
}

var idOfDuplicate;

function postCustomerInformation() {
    var emailInput = document.getElementById("input-email").value;
    var firstNameInput = document.getElementById("first-name").value;
    var lastNameInput = document.getElementById("last-name").value;
    var addressInput = document.getElementById("address").value;
    var cityInput = document.getElementById("city").value;

    testExecute();
    if (firstNameInput == "") {
        alert("Er missen gegevens");
    } else if (checkEmailExists(emailInput)) {

        myApi.request = 'PUT';
        myApi.route = 'customers/' + idOfDuplicate;
        myApi.send = {
            first_name: firstNameInput,
            last_name: lastNameInput,
            address: addressInput,
            city: cityInput,
            ["e-mail"]: emailInput,
        }
        myApi.prefix = "api/";
        myApi.execute();

        alert("Je bestelling is geplaatst");
        emailList = [];
        testExecute();

    } else {
        myApi.request = 'POST';
        myApi.route = 'customers';
        myApi.send = {
            first_name: firstNameInput,
            last_name: lastNameInput,
            address: addressInput,
            city: cityInput,
            ["e-mail"]: emailInput,
        };
        myApi.prefix = "api/";
        myApi.execute();

        alert("Je bestelling is geplaatst");

        emailList = [];
        testExecute();

    }
}





function customerPageActions() {

    sendButtonCustomerInformation.addEventListener("click", function () {
        testExecute();
        postCustomerInformation();

    });


}

function testExecute() {
    myApi.request = "GET";
    myApi.route = "customers";
    myApi.send = null;
    myApi.prefix = "api/";
    myApi.execute();

}

var emailList = [];

function getCustomer(response) {
    for (var i = 0; i < response.length; i++) {

        /*if(response[i]["e-mail"] == emailInput){

            console.log("already exists");
            idOfDuplicate = response[i].id;
            console.log(idOfDuplicate);
            break;
        }
        else{
            console.log("mail doesn't exist");
        }*/
        emailList[i] = response[i]["e-mail"];
    }
    console.log(emailList);
}

function checkEmailExists(email) {
    for (var i = 0; i < emailList.length; i++) {

        if (emailList[i] == email) {
            idOfDuplicate = i + 1;
            return true;
        } else {
            return false
        }
    }
}

function appendCartItem() {
    var amountField = document.getElementById("amount-field").value;

    for (var i = 0; i < amountField; i++) {
        var cartPage = document.getElementById("cart-page");

        var cartContainer = document.getElementById("cart-container");


        var cartItemContainer = document.createElement("div");
        cartItemContainer.setAttribute("class", "cart-item-container");



        var cartItemImage = document.createElement("p");
        cartItemImage.setAttribute("class", "cart-item-image");
        

        var cartItemPrice = document.createElement("p");
        cartItemPrice.setAttribute("class", "cart-item-price");
        


        var cartItemPlatform = document.createElement("p");
        cartItemPlatform.setAttribute("class", "cart-item-platform");
        


        var cartItemAmount = document.createElement("p");
        cartItemAmount.setAttribute("class", "cart-item-amount");
       



        cartContainer.appendChild(cartItemContainer);

        cartItemContainer.appendChild(cartItemImage);
        cartItemContainer.appendChild(cartItemPrice);
        cartItemContainer.appendChild(cartItemPlatform);
        cartItemContainer.appendChild(cartItemAmount);

        cartItemImage.innerHTML = '<img  class="product-image" src="img/GTAV_PS4.jpg" alt="webshop">';
        cartItemPrice.innerHTML = "59,98";
        cartItemPlatform.innerHTML = "PS4";
        cartItemAmount.innerHTML = "1";
    }


}
hideLogo();
signUp();
addHomePageActions();
addWebshopPageActions();
customerPageActions();
hidePages();