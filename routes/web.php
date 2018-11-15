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
        ['id' => 1, 'name' => 'Product 1'],
        ['id' => 2, 'name' => 'Product 2'],
        ['id' => 3, 'name' => 'Product 3']
    ];
    return response()->json($products);
});
