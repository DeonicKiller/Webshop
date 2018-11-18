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
        ['id' => 1, 'name1' => 'Grand theft auto V'],
        ['id' => 2, 'name2' => 'Call of duty IIII'],
        ['id' => 3, 'name3' => 'Rust'],
        ['id' => 4, 'name4' => 'Subnautica'],
        ['id' => 5, 'name5' => 'Cities Skylines']

    ];
    return response()->json($products);
});
