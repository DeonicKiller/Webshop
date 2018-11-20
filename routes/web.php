<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

/**
 * Default route with information about the API
 */
$router->get('/', function () use ($router) {
    return 'Webshop API';
});

$router->get('/products', function () use ($router) {
    $products = [
        ['id' => 1, 'name' => 'Grand theft auto V', 'prijs' => 59.98, 'beschrijving' => 'PS4', 'image' => '<img id="product-image-1" src="img/GTAV_PS4.jpg" alt="webshop">'],
        ['id' => 2, 'name' => 'Call of duty IIII', 'prijs' => 59.98, 'beschrijving' => 'PS4', 'image' => '<img id="product-image-2" src="img/COD4_PS4.jpg" alt="webshop">'], 
        ['id' => 3, 'name' => "Assassin's Creed: Odyssey", 'prijs' => 59.98, 'beschrijving' => 'PS4', 'image' => '<img id="product-image-3" src="img/ACODYSSEY_PS4.jpg" alt="webshop">'],
        ['id' => 4, 'name' => 'Red Dead Redemption II', 'prijs' => 59.98, 'beschrijving' => 'PS4', 'image' => '<img id="product-image-4" src="img/RDR2_PS4.jpg" alt="webshop">'],
        ['id' => 5, 'name' => 'Spider-Man', 'prijs' => 59.98, 'beschrijving' => 'PS4', 'image' => '<img id="product-image-5" src="img/Spiderman_PS4.jpg" alt="webshop">']

    ];
    return response()->json($products);
});
