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
       
var Products = [ 
    { id: 1, name1: "Grand theft auto V"},
    { id: 2, name2: "Call of Duty IIII"},
    { id: 3, name3: "Rust"},
    { id: 4, name4: "Subnautica"},
    { id: 5, name5: "Cities Skylines"},
]; 


Products.forEach(function(value) {
    console.log(value.name1);
    console.log(value.name2);
    console.log(value.name3);
    console.log(value.name4);
    console.log(value.name5);
});

// Producten tonen op de WebShop


var p1 = document.getElementById("Product1");
var p2 = document.getElementById("Product2");
var p3 = document.getElementById("Product3");
var p4 = document.getElementById("Product4");
var p5 = document.getElementById("Product5");

function Producten(){
p1.innerHTML = (value.name1);
p2.innerHTML = (value.name2);
p3.innerHTML = (value.name3);
p4.innerHTML = (value.name4);
p5.innerHTML = (value.name5);
};

Producten();

// Voor de Layout

var selectionImg1 = document.getElementById("selection-1");
var selectionImg2 = document.getElementById("selection-2");
var overlay1 = document.getElementById("selection-overlay-1");
var overlay2 = document.getElementById("selection-overlay-2");

function showOverlay1(){

    //selectionImg1.style.opacity = 0.5;
    overlay1.style.display = inline-block;
    
}

function showOverlay2(){

    //selectionImg2.style.opacity = 0.5;
    overlay1.style.display = inline-block;

}

function addHomePageActions(){

    selectionImg1.addEventListener("mouseover", showOverlay1);
    selectionImg2.addEventListener("mouseover", showOverlay2);
}

addHomePageActions();
