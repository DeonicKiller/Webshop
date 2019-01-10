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

    executeProduct() {
        var xHttp = new XMLHttpRequest();
        xHttp.onreadystatechange = function () {
            if (xHttp.readyState == XMLHttpRequest.DONE) {
                if (xHttp.status == 200 || xHttp.status == 201) {
                    var response = JSON.parse(xHttp.response);
                    //appendProducts(response);
                    //showProductsSucces(response);
                    addProductPageActions(response);
                    getImages(response);


                   


                } else {
                    showProductsFailed();
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

    executeCustomer() {
        var xHttp = new XMLHttpRequest();
        xHttp.onreadystatechange = function () {
            if (xHttp.readyState == XMLHttpRequest.DONE) {
                if (xHttp.status == 200 || xHttp.status == 201) {
                    var response = JSON.parse(xHttp.response);

                    getCustomerEmail(response);
                    //getCustomer(response);

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
    executeOrder() {
        var xHttp = new XMLHttpRequest();
        xHttp.onreadystatechange = function () {
            if (xHttp.readyState == XMLHttpRequest.DONE) {
                if (xHttp.status == 200 || xHttp.status == 201) {
                    var response = JSON.parse(xHttp.response);
                    
                    getOrders(response);
                    


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
    executeOrderlines() {
        var xHttp = new XMLHttpRequest();
        xHttp.onreadystatechange = function () {
            if (xHttp.readyState == XMLHttpRequest.DONE) {
                if (xHttp.status == 200 || xHttp.status == 201) {
                    var response = JSON.parse(xHttp.response);


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








/**
 * shows all products on page
 * @param {array} products product array received from api
 */
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
}




/**
 * shows message when loading in products fails
 */
function showProductsFailed() {

    alert("er is iets fout gegaan met het laden van de producten. Herlaad de pagina");

}



var homeLogo = document.getElementById("home-logo");
var customerBanner = document.getElementById("banner");
var selectionImg1 = document.getElementById("selection-1");
var selectionImg2 = document.getElementById("selection-2");
var selectionImg3 = document.getElementById("selection-3");
var overlayText1 = document.getElementById("selection-1-text");
var overlayText2 = document.getElementById("selection-2-text");
var overlayText3 = document.getElementById("selection-3-text");
var headerImage = document.getElementById("middle-banner");

var homePage = document.getElementById("home-page");
var webshopPage = document.getElementById("webshop-page");
var aboutusPage = document.getElementById("aboutus-page");
var cartPage = document.getElementById("cart-page");
var productPage = document.getElementById("product-page");
var productImageContainer = document.getElementById("image-1");
var customerPage = document.getElementById("customer-page");
var overviewPage = document.getElementById("overview-page");


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
var sendEmailButton = document.getElementById("send-email-button");
var cartEmptyText = document.getElementById("cart-empty-text");
var finalizeOrderButton = document.getElementById("finalize-button");
var orderNumberText = document.getElementById("order-number");

/**
 * function to show text on nav bar images on mouse over
 * @param {element} image image that fades out to 0.3 opacity
 * @param {element} text text that fades in
 */
function showOverlay(image, text) {

    image.style.opacity = 0.3;
    text.style.opacity = 1;
}
/**
 * function that hides text on nav bar images on mouse out
 * @param {element} image image that fades in to 1 opacity
 * @param {element} text text that fades out 
 */
function hideOverlay(image, text) {

    image.style.opacity = 1;
    text.style.opacity = 0;
}

/**
 * function that switches pages
 * @param {element} hidePage page that gets hidden
 * @param {element} showPage page that gets shown
 */
function switchPage(hidePage, showPage) {

    hidePage.style.display = "none";
    showPage.style.display = "block";

}
/**
 * function that hides all pages
 */
function hidePages() {
    webshopPage.style.display = "none";
    aboutusPage.style.display = "none";
    productPage.style.display = "none";
    customerPage.style.display = "none";
    cartPage.style.display = "none";
    overviewPage.style.display = 'none';
}
/**
 * function that fades in element 
 * @param {element} element element that gets faded in
 */
function fadeIn(element) {
    element.style.transition = "1s ease";
    element.style.opacity = 0;
    setTimeout(function () {
        if (element.style.display == "block") {
            element.style.opacity = 1;
        }
    }, 200);


}
/**
 * function that hides particular elements when the windows width is 
 * 480px or lower
 */
function hideMobileCartAmount() {
    const mobileView = window.matchMedia("(max-width: 480px)");
    const browserView = window.matchMedia("min-width:481px");


    if (mobileView.matches) {
        cartAmountMobile.style.display = "block";
        headerImage.style.display = "none";
    }


}
/**
 * function that hides logo
 */
function hideLogo() {
    homeLogo.style.display = "none";


}
/**
 * function that initiates all functions pertaining to the home page
 */
function addHomePageActions() {


    if (homePage.style.display == "block") {
        hideLogo();
    }
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
        headerImage.style.display = "none";
        switchPage(homePage, webshopPage);
        fadeIn(webshopPage);
            if(productFilled == false){
            myApi.request = "GET";
            myApi.route = "products";
            myApi.send = null;
            myApi.prefix = "api/";
            myApi.executeProduct();
            }
       // }

    });
    selectionImg2.addEventListener("click", function () {
        homeLogo.style.display = "block";
        headerImage.style.display = "none";
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
        hideHeaderImage();
        hidePages();
        fadeIn(homePage);
        homePage.style.display = "block";
        headerImage.style.display = "block";
        webshopPage.style.opacity = 0;
        aboutusPage.style.opacity = 0;
        productPage.style.opacity = 0;

        homeLogo.style.display = "none";
        hideHeaderImage();



    });

    homeLogo.addEventListener("mouseover", function () {

        homeLogo.style.opacity = 0.3;

    });
    homeLogo.addEventListener("mouseout", function () {
        homeLogo.style.opacity = 1;
    });


    sendEmailButton.addEventListener("click", function () {
        establishCustomerConnection();
        signUp();




    });
    /**
     * Execute on click
     */
    cartButton.addEventListener("click", function () {

        hidePages();
        headerImage.style.display = "none";
        fadeIn(cartPage);
        homePage.style.display = "none";
        cartPage.style.display = "block";
        homeLogo.style.display = "block";
        removeItem();

    });




}

function addWebshopPageActions() {


}








function getImages(product){
    //productDetailDescriptionElement.innerHTML = "Amerika, 1899. Wetshandhavers hebben het gemunt op de laatste outlaw-bendes. Wie zich niet wil overgeven, wordt genadeloos afgemaakt. Arthur Morgan en de Van der Linde-bende slaan op de vlucht nadat in het plaatsje Blackwater een overval slecht afloopt. Met federale agenten en de beste premiejagers van het Westen op de hielen, trekken ze door het ruige hart van Amerika, een spoor van overvallen en vuurgevechten achter zich latend.<br><br> Als door interne strubbelingen de bende uiteen dreigt te vallen, wordt Arthur gedwongen een keuze te maken. Kiest hij voor zijn idealen of voor de bende waar hij alles aan te danken heeft?<br><br> Red Dead Redemption 2, van de makers van Grand Theft Auto V en Red Dead Redemption, is een episch verhaal over het einde van het Wilde Westen en het begin van een nieuw tijdperk.";
/**
 * function that shows individual products when clicked
 * @param {int} number index of clicked product
 */
function showProductDetails(number) {


    bigImageElement.innerHTML = product[number].image;
    productDetailNameElement.innerHTML = product[number].name;
    productDetailPriceElement.innerHTML = "&euro; " + product[number].price;
    productDetailPlatformElement.innerHTML = product[number].platform;
    productDetailDescriptionElement.innerHTML = product[number].description;


}

    for(var i = 0; i < product.length; i++){
        
    // creates product containers
    var productContainer = document.createElement("div");
    productContainer.setAttribute("class","product");

    var productContainerName = document.createElement("p")
    productContainerName.setAttribute("class","product-name");

    var productContainerPrice= document.createElement("p")
    productContainerPrice.setAttribute("class","product-price");

    var productContainerImage= document.createElement("p");
    productContainerImage.setAttribute("class","product-image");

    var productContainerPlatform = document.createElement("p")
    productContainerPlatform.setAttribute("class","product-platform");


   //appends created containers into parent div
    productParentContainer.appendChild(productContainer);
    productContainer.appendChild(productContainerImage);
    productContainer.appendChild(productContainerName);
    productContainer.appendChild(productContainerPrice);
    productContainer.appendChild(productContainerPlatform);

    //populates every element with corresponding attribute from api
    productContainerImage.innerHTML = product[i].image;
    productContainerName.innerHTML = product[i].name;
    productContainerPrice.innerHTML = "&euro;" + product[i].price;
    productContainerPlatform.innerHTML = product[i].platform;

    
    

}
//defining variable as true to prevent showing duplicate products when clicking on webshop page
productFilled = true;


    
    var productContainers = document.getElementsByClassName("product");
    function selectItems(){
    for(let i = 0; product.length; i++){


        productContainers[i].addEventListener("click",function(){
         showProductDetails(i);
         idSelectedProduct = i;

         switchPage(webshopPage, productPage);
         fadeIn(productPage);


     });
    }
}
selectItems();
}
var itemString = "";
var idSelectedProduct = 0;
var indexOfProduct = 0;
var newProduct;
var newOrderline;
var newOrder;
var cartItems = [];
var orderlines = [];
var totalPrice = 0;
var subtotal = 0;
var cartAmount = document.getElementById("cart-amount");
var cartSubtotal = document.getElementById("cart-subtotal");
var cartAmountMobile = document.getElementById("cart-amount-mobile");
var totalAmount = 0;
var productParentContainer = document.getElementById("products-container");
var productFilled = false;

function cartAddActions(){

}
/**
 * function that initiates all functions pertaining to products
 * @param {api response} product response that is received from api
 */
function addProductPageActions(product) {
    /**
     * Execute on click
     */

    /**
     * function that adds selected product to cart
     * @param {int} number index of visible product
     */
    function addToCart(number) {
        var cartFeedback = document.getElementById("cart-feedback");
        var amountField = parseInt(document.getElementById("amount-field").value, 10);
        var productId = product[number].id;
        var productPrice = parseFloat(product[number].price).toFixed(2);
        var productName = product[number].name;
        var productPlatform = product[number].platform;
        var productImage = product[number].image;
        var productDescription = product[number].description;

        itemString = " ITEMS";

        if (amountField > 0) {



            subtotal += (amountField * productPrice);
            cartSubtotal.innerHTML = "&euro; " + parseFloat(subtotal).toFixed(2);
            //totalPriceText.innerHTML = "SUBTOTAL " + "&euro;" + subtotal;
            totalAmount += amountField;

            if (totalAmount <= 1) {
                itemString = " ITEM";
            }
            if (totalAmount >= 1) {
                cartEmptyText.style.display = "none";
            }

            cartAmount.innerHTML = totalAmount + itemString;
            cartAmountMobile.innerHTML = totalAmount;

            //console.log(subtotal);
            newOrderline = new Orderline();
            newProduct = new Product();

            newProduct.setId(productId);
            newProduct.setPrice(productPrice);
            newOrder.setTotalPrice(subtotal);
            newProduct.setName(productName);
            newProduct.setPlatform(productPlatform);
            newProduct.setImage(productImage);
            newProduct.setDescription(productDescription);
            newOrderline.setAmount(amountField);
            newOrderline.setProductId(productId);


            cartItems.push(newProduct);
            orderlines.push(newOrderline);
            console.log(cartItems);
            console.log(orderlines);




            appendCartItem(newProduct.getName(), newProduct.getPlatform(), (newOrderline.getAmount() * newProduct.getPrice()), newOrderline.getAmount(), newProduct.getImage());


        } else {
            cartFeedback.innerHTML = "please select an amount";
            setTimeout(function () {
                cartFeedback.innerHTML = "";
            }, 1000);
        }

    }
    addCartButton.addEventListener("click", function () {
        newOrder = new Order();
        addToCart(idSelectedProduct);
        goToSelectedImage();
        
        if(totalAmount >= 1){
        addElementsToCart();
        }
        addCheckoutPageActions();
    
        var finalPrice = document.getElementById("final-price");
        finalPrice.innerHTML = "SUBTOTAL " + "&euro;" + parseFloat(subtotal).toFixed(2);
    
        console.log(newOrder.getTotalPrice());
    
    });
    
}

/**
 * definition of all functions pertaining checkout page
 */
function addCheckoutPageActions() {
    var checkoutButton = document.getElementById("checkout-button");

    checkoutButton.addEventListener("click", function () {

        hidePages();
        fadeIn(customerPage);
        customerPage.style.display = "block";
    });
}
/**
 * definition of all functions pertaining checkout page
 */
function addOverviewPageActions() {
    var finalizeOrderButton = document.getElementById("finalize-button");

    finalizeOrderButton.addEventListener("click", function () {
        headerImage.style.display = 'block';
        fadeIn(homePage);
        switchPage(overviewPage, homePage);

    });
}
var button = document.getElementsByClassName('remove-item-button');
var parentDiv = document.getElementsByClassName('cart-item-container');
/**
 * Removes cart item from page and from cart item array
 */
function removeItem() {

    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener("click", showID);
        goToSelectedImage();
    }

    for (var i = 0; i < button.length; i++) {
        button[i].addEventListener('click', function (e) {


            e.currentTarget.parentNode.remove();
            goToSelectedImage();



        }, false);
    }
}
/**
 * function that gets clicked element and checks if it matches
 * the cart remove button
 * @param {element} evt clicked element
 */
function showID(evt) {
    var newSubtotal = 0;
    var newAmount = 0;
    var finalPrice = document.getElementById("final-price");
    var checkoutButton = document.getElementById("checkout-button");
    for (let i = 0; i < button.length; i++) {
        if (button[i] == evt.target) {
            totalAmount = totalAmount - orderlines[i].getAmount();
            subtotal = subtotal - (orderlines[i].getAmount() * cartItems[i].getPrice());

            newSubtotal = subtotal;
            newAmount = totalAmount;

            if (newAmount <= 1) {
                itemString = " ITEM";
            } else if (newAmount == 0) {
                itemString = "";

            }
            cartItems.splice(i, 1);
            orderlines.splice(i, 1);
            if (newAmount == 0) {
                cartAmount.innerHTML = " ";
                cartAmountMobile.innerHTML = " ";
                cartSubtotal.innerHTML = " ";
                fadeIn(cartEmptyText);
                cartEmptyText.style.display = "block";
                finalPrice.innerHTML = "";
                finalPrice.remove();
                checkoutButton.remove();
                exists = false;
            } else {

                cartAmount.innerHTML = newAmount + " " + itemString;
                cartSubtotal.innerHTML = "&euro;" + parseFloat(newSubtotal).toFixed(2);
                cartAmountMobile.innerHTML = newAmount;
                finalPrice.innerHTML = "SUBTOTAL " + "&euro;" + parseFloat(newSubtotal).toFixed(2);
            }


            console.log(cartItems);
            console.log(orderlines);



        }

    }
}
var cartImageDiv = document.getElementsByClassName('cart-item-image');
/**
 * function to go back to particular product from cart page
 */
function goToSelectedImage() {

    var cartImageDiv = document.getElementsByClassName('cart-item-image');
    var cartImage = document.querySelectorAll('.cart-item-image .product-image');


    for (let i = 0; i < cartImageDiv.length; i++) {


        cartImageDiv[i].addEventListener("click", function (evt) {
            for (let i = 0; i < cartImageDiv.length; i++) {

                if (cartImage[i] == evt.target) {
                    idSelectedProduct = (cartItems[i].getId() - 1);
                    bigImageElement.innerHTML = cartItems[i].getImage();
                    productDetailNameElement.innerHTML = cartItems[i].getName();
                    productDetailPriceElement.innerHTML = "&euro; " + cartItems[i].getPrice();
                    productDetailPlatformElement.innerHTML = cartItems[i].getPlatform();
                    productDetailDescriptionElement.innerHTML = cartItems[i].getDescription();


                    console.log(cartItems[i].getId());
                    fadeIn(productPage);
                    cartPage.style.display = "none";
                    productPage.style.display = "block";
                }
            }

        });
    }




}






/**
 * function that gets email from input and sends it to API
 */
function signUp() {
    var emailInput = document.getElementById("email-input");
    var emailInputValue = document.getElementById("email-input").value;
    var emailFeedback = document.getElementById("newsletter-feedback");
    var emailToString = "" + emailInputValue + "";
    var reEmail = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;

    var emailToString = ""+emailInputValue+"";
    var emailToLower =  emailToString.toLowerCase();
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
            ["e-mail"]: emailToLower,
        };
        myApi.prefix = "api/";
        myApi.executeCustomer();
        emailFeedback.innerHTML = "Je bent succesvol aangemeld";
        setTimeout(function () {
            emailFeedback.innerHTML = "";
            emailInput.value = "";
        }, 1000);

        console.log(emailList);
        establishCustomerConnection();
        customerList = [];





    } else if (checkEmailExists(emailInputValue)) {
        emailFeedback.innerHTML = "Je bent al aangemeld";
        setTimeout(function () {
            emailFeedback.innerHTML = "";
            emailInput.value = "";
        }, 1000);
        console.log(emailList);
    } else {
        myApi.request = 'POST';
        myApi.route = 'customers';
        myApi.send = {
            first_name: "",
            last_name: "",
            address: "",
            city: "",
            ["e-mail"]: emailToLower,
        };
        myApi.prefix = "api/";
        myApi.executeCustomer();
        emailFeedback.innerHTML = "Je bent succesvol aangemeld";
        setTimeout(function () {
            emailFeedback.innerHTML = "";
            emailInput.value = "";
        }, 1000);
        console.log(emailList);
        establishCustomerConnection();
        customerList = [];





    }

}

var idOfDuplicate;
/**
 * function that sends customer information to api
 */
function postCustomerInformation() {

    var finalPrice = document.getElementById("final-price");
    var checkoutButton = document.getElementById("checkout-button");
    const mobileView = window.matchMedia("(max-width: 480px)");
    var cartItemContainer = document.querySelectorAll(".cart-item-container");
    var bottomCart = document.getElementById("bottom-cart");

    var orderFeedback = document.getElementById("order-feedback");
    var emailInput = document.getElementById("input-email").value;
    var firstNameInput = document.getElementById("first-name").value;
    var lastNameInput = document.getElementById("last-name").value;
    var addressInput = document.getElementById("address").value;
    var cityInput = document.getElementById("city").value;

    var emailField = document.getElementById("input-email");
    var firstNameField = document.getElementById("first-name");
    var lastNameField = document.getElementById("last-name");
    var addressField = document.getElementById("address");
    var cityField = document.getElementById("city");

    var emailToString = ""+emailInput+"";
    var emailToLower = emailToString.toLowerCase();

    var reEmail = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;



    if (firstNameInput == "" || emailInput == "" || lastNameInput == "" || addressInput == "" || cityInput == "") {
        orderFeedback.innerHTML = "A field is empty";
        setTimeout(function () {
            orderFeedback.innerHTML = "";

        }, 1000);
    } else if (!emailInput.match(reEmail)) {
        orderFeedback.innerHTML = "Email niet geldig, probeer opnieuw.";
        setTimeout(function () {
            orderFeedback.innerHTML = "";
            emailField.value = "";

        }, 1000);
    } else if (checkEmailExists(emailInput)) {

        myApi.request = 'PUT';
        myApi.route = 'customers/' + idOfDuplicate;
        myApi.send = {
            first_name: firstNameInput,
            last_name: lastNameInput,
            address: addressInput,
            city: cityInput,
            ["e-mail"]: emailToLower,
        };
        myApi.prefix = "api/";
        myApi.executeCustomer();


        orderFeedback.innerHTML = "Je bestelling is geplaatst";
        setTimeout(function () {
            orderFeedback.innerHTML = "";
            emailField.value = "";
            firstNameField.value = "";
            lastNameField.value = "";
            addressField.value = "";
            cityField.value = "";

        }, 1000);


        myApi.request = 'POST';
        myApi.route = 'orders';
        myApi.send = {
            customer_id: idOfDuplicate,
        };
        myApi.prefix = 'api/';
        myApi.executeOrder();

        establishOrderConnection();
        
        for (let i = 0; i < orderlines.length; i++) {
            myApi.request = "POST";
            myApi.route = 'orderlines';
            myApi.send = {
                order_id: mostRecentOrderIndex,
                product_id: orderlines[i].getProductId(),
                amount: orderlines[i].getAmount(),

            };
            myApi.prefix = 'api/';
            myApi.executeOrderlines();
        }



        orderlines = [];
        cartItems = [];
        subtotal = 0;
        totalAmount = 0;
        cartAmount.innerHTML = " ";
        cartAmountMobile.innerHTML = " ";
        cartSubtotal.innerHTML = " ";
        fadeIn(cartEmptyText);
        cartEmptyText.style.display = "block";
        finalPrice.innerHTML = "";
        finalPrice.remove();
        checkoutButton.remove();
        bottomCart.remove();
        for (let i = 0; i < cartItemContainer.length; i++) {
            cartItemContainer[i].remove();
        }


        exists = false;

        homeLogo.style.display = "none";
        fadeIn(overviewPage);
        switchPage(customerPage, overviewPage);

        orderNumberText.innerHTML = "Your order number is " + mostRecentOrderIndex;

        establishCustomerConnection();


    } else {
        myApi.request = 'POST';
        myApi.route = 'customers';
        myApi.send = {
            first_name: firstNameInput,
            last_name: lastNameInput,
            address: addressInput,
            city: cityInput,
            ["e-mail"]: emailToLower,
        };
        myApi.prefix = "api/";
        myApi.executeCustomer();

        orderFeedback.innerHTML = "Je bestelling is geplaatst";
        setTimeout(function () {
            orderFeedback.innerHTML = "";
            emailField.value = "";
            firstNameField.value = "";
            lastNameField.value = "";
            addressField.value = "";
            cityField.value = "";

        }, 1000);
        establishCustomerConnection();

        myApi.request = 'POST';
        myApi.route = 'orders';
        myApi.send = {
            customer_id: (emailList.length + 1),
        };
        myApi.prefix = 'api/';
        myApi.executeOrder();

        establishOrderConnection();

        for (let i = 0; i < orderlines.length; i++) {
            myApi.request = "POST";
            myApi.route = 'orderlines';
            myApi.send = {
                order_id: mostRecentOrderIndex,
                product_id: orderlines[i].getProductId(),
                amount: orderlines[i].getAmount(),

            };
            myApi.prefix = 'api/';
            myApi.executeOrderlines();
        }

        orderlines = [];
        cartItems = [];
        subtotal = 0;
        totalAmount = 0;
        cartAmount.innerHTML = " ";
        cartAmountMobile.innerHTML = " ";
        cartSubtotal.innerHTML = " ";
        fadeIn(cartEmptyText);
        cartEmptyText.style.display = "block";
        finalPrice.innerHTML = "";
        finalPrice.remove();
        checkoutButton.remove();
        bottomCart.remove();

        for (let i = 0; i < cartItemContainer.length; i++) {
            cartItemContainer[i].remove();
        };
        exists = false;

        homeLogo.style.display = "none";

        fadeIn(overviewPage);
        switchPage(customerPage, overviewPage);
        orderNumberText.innerHTML = "Your order number is " + mostRecentOrderIndex;

        establishCustomerConnection();




    }
}




/**
 * function that initiates all functions pertaining to the customer
 */
function customerPageActions() {

    sendButtonCustomerInformation.addEventListener("click", function () {
        establishCustomerConnection();
        postCustomerInformation();


    });


}
/**
 * function that establishes connection with customer api
 */
function establishCustomerConnection() {
    myApi.request = "GET";
    myApi.route = "customers";
    myApi.send = null;
    myApi.prefix = "api/";
    myApi.executeCustomer();

}
/**
 * executes API connection with Orders tables
 */
function establishOrderConnection() {
    myApi.request = "GET";
    myApi.route = "orders";
    myApi.send = null;
    myApi.prefix = "api/";
    myApi.executeOrder();

}
var mostRecentOrderIndex = 0;
/**
 * gets all orders
 * @param {array} response response received from API 
 */
function getOrders(response) {

    if(response.length == 0){
        mostRecentOrderIndex = 1;
    }
    else{
        mostRecentOrderIndex = (response.length + 1)
    }
    console.log(mostRecentOrderIndex);
    console.log(response);
}
/**
 * executes API connection with Orderlines tables
 */
function establisOrderlinesConnection() {
    myApi.request = "GET";
    myApi.route = "orderlines";
    myApi.send = null;
    myApi.prefix = "api/";
    myApi.executeOrderlines();

}

var emailList = [];
/**
 * function that gets all customers from api and saves it in array
 * @param {response} response 
 */
function getCustomerEmail(response) {



    if (emailList != null) {
        for (var i = 0; i < response.length; i++) {

            emailList[i] = response[i]["e-mail"];
        }


        console.log(emailList);

    }
}

var customerList = [];

function getCustomer(customer) {
    for (var i = 0; i < customer.length; i++) {
        var customerCheck = new Customer();



        customerCheck.setFirstName(customer[i].first_name);
        customerCheck.setLastName(customer[i].last_name);
        customerCheck.setAddress(customer[i].address);
        customerCheck.setCity(customer[i].city);
        customerCheck.setEmail(customer[i]["e-mail"]);

        customerList.push(customerCheck);
    }
    console.log(customerList);

}
/**
 * function that compares list of emails to filled in email
 * @param {string} email 
 */
function checkEmailExists(email) {

    establishCustomerConnection();
    for (var i = 0; i < emailList.length; i++) {

        if (emailList[i] == email.toLowerCase()) {
            idOfDuplicate = i + 1;
            return true;
        }
    }
}

function checkCustomerExists(firstName, lastName, address, city, email) {

    establishCustomerConnection();
    for (var i = 0; i < emailList.length; i++) {

        if (customerList[i].firstName == firstName) {
            idOfDuplicate = i + 1;
            return true;
        }
    }

}
/**
 * function that creates cart item in cart page
 * @param {string} name name of cart item product
 * @param {string} platform platform of cart item product
 * @param {string} price price of cart item product
 * @param {int} amount amount of cart item product
 * @param {string} image image of cart item product
 */
function appendCartItem(name, platform, price, amount, image) {
    var amountField = document.getElementById("amount-field").value;


    var cartPage = document.getElementById("cart-page");

    var cartContainer = document.getElementById("cart-container");


    var cartItemContainer = document.createElement("div");
    cartItemContainer.setAttribute("class", "cart-item-container");

    var cartItemSubContainer1 = document.createElement("div");
    cartItemSubContainer1.setAttribute("class", "cart-item-subcontainer1");

    var cartItemSubContainer2 = document.createElement("div");
    cartItemSubContainer2.setAttribute("class", "cart-item-subcontainer2");


    var cartItemName = document.createElement("p");
    cartItemName.setAttribute("class", "cart-item-name");

    var cartItemImage = document.createElement("p");
    cartItemImage.setAttribute("class", "cart-item-image");


    var cartItemPrice = document.createElement("p");
    cartItemPrice.setAttribute("class", "cart-item-price");



    var cartItemPlatform = document.createElement("p");
    cartItemPlatform.setAttribute("class", "cart-item-platform");



    var cartItemAmount = document.createElement("p");
    cartItemAmount.setAttribute("class", "cart-item-amount");

    var removeItemButton = document.createElement("button");
    removeItemButton.setAttribute("class", "remove-item-button");
    removeItemButton.innerHTML = "remove";




    cartContainer.appendChild(cartItemContainer);
    cartItemContainer.appendChild(cartItemImage);
    cartItemContainer.appendChild(cartItemSubContainer1);
    cartItemContainer.appendChild(cartItemSubContainer2);
    cartItemContainer.appendChild(removeItemButton);


    cartItemSubContainer1.appendChild(cartItemName);
    cartItemSubContainer1.appendChild(cartItemPlatform);


    cartItemSubContainer2.appendChild(cartItemPrice);
    cartItemSubContainer2.appendChild(cartItemAmount);


    cartItemImage.innerHTML = image;
    cartItemPrice.innerHTML = "&euro;" + parseFloat(price).toFixed(2);
    cartItemPlatform.innerHTML = platform;
    cartItemAmount.innerHTML = amount;
    cartItemName.innerHTML = name;
}
var exists = false;
/**
 * appends subtotal and checkout button once an item has been added to cart
 */
function addElementsToCart() {


    var cartPage = document.getElementById("cart-page");

    var bottomCart = document.createElement("div");
    bottomCart.setAttribute('id', 'bottom-cart');

    var checkoutButton = document.createElement("button");
    checkoutButton.setAttribute("id", "checkout-button");

    var finalPrice = document.createElement("p");
    finalPrice.setAttribute("id", "final-price");

    if (exists == false) {
        cartPage.appendChild(bottomCart);
        bottomCart.appendChild(finalPrice);

        bottomCart.appendChild(checkoutButton);

        checkoutButton.innerHTML = "CHECKOUT";
        exists = true;

    }
}

/**
 * hides banner image on mobile devices
 */
function hideHeaderImage() {
    const mobileView = window.matchMedia("(max-width: 480px)");

    if (mobileView.matches) {
        headerImage.style.display = "none";
    }

}
//initialize on load
establishOrderConnection();
establishCustomerConnection();
hideMobileCartAmount();
addWebshopPageActions();
hideLogo();
hideHeaderImage();
addOverviewPageActions();
addHomePageActions();
customerPageActions();
hidePages();