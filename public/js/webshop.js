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
       
var products = [ 
    { id: 1, name: "product 1"},
    { id: 2, name: "product 2"},
    { id: 3, name: "product 3"}
]; 

products.forEach(function(value) {
    console.log(value.name);
});

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
