//API voor de producten

function getAllProducts() {
    var xHttp = new XMLHttpRequest();
    xHttp.onreadystatechange = function () {
        if (xHttp.readyState == XMLHttpRequest.DONE) {
            if (xHttp.status == 200 || xHttp.status == 201) {
                var response = JSON.parse(xHttp.response);
                // succes
            } else {
                // failed
            }
        }
    };
    xHttp.onerror = function () {
        // failed
    };
    xHttp.open("GET", "api/products", true);
    xHttp.setRequestHeader('Content-Type', 'application/json');
    xHttp.send();
}

var Products = [{
        id: 1,
        name: "Grand theft auto V",
        prijs: 59.98,
        beschrijving: "PS4",
        image: '<img  class="product-image" src="img/GTAV_PS4.jpg" alt="webshop">'
        
    },
    {
        id: 2,
        name: "Call of Duty IIII",
        prijs: 59.98,
        beschrijving: "PS4",
        image: '<img  class="product-image" src="img/COD4_PS4.jpg" alt="webshop">'
    },
    {
        id: 3,
        name: "Assassin's Creed: Odyssey",
        prijs: 59.98,
        beschrijving: "PS4",
        image: '<img  class="product-image" src="img/ACODYSSEY_PS4.jpg" alt="webshop">'
    },
    {
        id: 4,
        name: "Red Dead Redemption II",
        prijs: 59.98,
        beschrijving: "PS4",
        image: '<img  class="product-image" src="img/RDR2_PS4.jpg" alt="webshop">'
    },
    {
        id: 5,
        name: "Spider-Man",
        prijs: 59.98,
        beschrijving: "PS4",
        image: '<img  class="product-image" src="img/Spiderman_PS4.jpg" alt="webshop">'
    },
];

var p1 = document.getElementById("Product1");
var p2 = document.getElementById("Product2");
var p3 = document.getElementById("Product3");
var p4 = document.getElementById("Product4");
var p5 = document.getElementById("Product5");
Products.forEach(function (value) {
    console.log(value.name);

    switch (value.id) {
        case 1:
            p1.innerHTML = value.name + " " + value.prijs + " " + value.beschrijving + value.image;
            break;
        case 2:
            p2.innerHTML = value.name + " " + value.prijs + " " + value.beschrijving + value.image;
            break;
        case 3:
            p3.innerHTML = value.name + " " + value.prijs + " " + value.beschrijving + value.image;
            break;
        case 4:
            p4.innerHTML = value.name + " " + value.prijs + " " + value.beschrijving + value.image;
            break;
        case 5:
            p5.innerHTML = value.name + " " + value.prijs + " " + value.beschrijving + value.image;
            break;
        default:
            error;



    }
});


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




function showOverlay1() {

    selectionImg1.style.opacity = 0.3;
    overlayText1.style.opacity = 1;
}

function showOverlay2() {

    selectionImg2.style.opacity = 0.3;
    overlayText2.style.opacity = 1;
}

function showOverlay3() {

    selectionImg3.style.opacity = 0.3;
    overlayText3.style.opacity = 1;
}

function hideOverlay1() {

    selectionImg1.style.opacity = 1;
    overlayText1.style.opacity = 0;
}

function hideOverlay2() {

    selectionImg2.style.opacity = 1;
    overlayText2.style.opacity = 0;
}

function hideOverlay3() {

    selectionImg3.style.opacity = 1;
    overlayText3.style.opacity = 0;
}

function switchPage(hidePage, showPage) {

    hidePage.style.display = "none";
    showPage.style.display = "block";

}

function hidePages() {
    webshopPage.style.display = "none";
    aboutusPage.style.display = "none";
}

function addHomePageActions() {

    selectionImg1.addEventListener("mouseover", showOverlay1);
    selectionImg2.addEventListener("mouseover", showOverlay2);
    selectionImg3.addEventListener("mouseover", showOverlay3);

    selectionImg1.addEventListener("mouseout", hideOverlay1);
    selectionImg2.addEventListener("mouseout", hideOverlay2);
    selectionImg3.addEventListener("mouseout", hideOverlay3);

    selectionImg1.addEventListener("click", function () {
        switchPage(homePage, webshopPage);

    });
    selectionImg2.addEventListener("click", function () {

        switchPage(homePage, aboutusPage);

    });

    homeLogo.addEventListener("click", function(){


        if(webshopPage.style.display == "block"){
            switchPage(webshopPage, homePage);
        }
        else if(aboutusPage.style.display == "block"){
            switchPage(aboutusPage, homePage);
        }
    });

    homeLogo.addEventListener("mouseover", function(){

        homeLogo.style.opacity = 0.3;

    });
    homeLogo.addEventListener("mouseout", function(){
        homeLogo.style.opacity = 1;
    })

}

addHomePageActions();
hidePages();