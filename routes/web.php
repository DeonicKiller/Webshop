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
//Products Routes
$router->get('/products', 'ProductController@showProducts');
$router->get('/products/{productID}', 'ProductController@showProduct');
$router->post('/products', 'ProductController@createProduct');
$router->put('/products/{productID}', 'ProductController@updateProduct');
$router->delete('/products/{productID}', 'ProductController@deleteProduct');
//Customers Routes
$router->get('/customers', 'CustomerController@showCustomers');
$router->get('/customers/{customerID}', 'CustomerController@showCustomer');
$router->post('/customers', 'CustomerController@createCustomer');
$router->put('/customers/{customerID}', 'CustomerController@updateCustomer');
$router->delete('/customers/{customerID}', 'CustomerController@deleteCustomer');
//Orders Routes
$router->get('/orders', 'OrderController@showOrders');
$router->get('/orders/{orderID}', 'OrderController@showOrder');
$router->post('/orders', 'OrderController@createOrder');
$router->put('/orders/{orderID}', 'Orderontroller@updateOrder');
$router->delete('/orders/{orderID}', 'OrderController@deleteOrder');
//Orderlines Routes
$router->get('/orderlines', 'OrderlineController@showOrderlines');
$router->get('/orderlines/{orderlineId}', 'OrderlineController@showOrderline');
$router->post('/orderlines', 'OrderlineController@createOrderline');
$router->put('/orderlines/{orderlineId}', 'Orderlineontroller@updateOrderline');
$router->delete('/orderlines/{orderlineId}', 'OrderlineController@deleteOrderline');
/*
$router->get('/customers', function () use ($router) {
    $customers = [ 
        
        ['id' => 1, 'name' => 'Grand theft auto V', 'prijs' => 59.98,'platform' => 'PS4', 'image' => '<img class="customer-image" src="img/GTAV_PS4.jpg" alt="webshop">'],
        ['id' => 2, 'name' => 'Call of duty IIII', 'prijs' => 59.98, 'platform' => 'PS4', 'image' => '<img class="customer-image" src="img/COD4_PS4.jpg" alt="webshop">'], 
        ['id' => 3, 'name' => "Assassin's Creed: Odyssey", 'prijs' => 59.98, 'platform' => 'PS4', 'image' => '<img class="customer-image" src="img/ACODYSSEY_PS4.jpg" alt="webshop">'],
        ['id' => 4, 'name' => 'Red Dead Redemption II', 'prijs' => 59.98, 'platform' => 'PS4', 'image' => '<img class="customer-image" src="img/RDR2_PS4.jpg" alt="webshop">'],
        ['id' => 5, 'name' => 'Spider-Man', 'prijs' => 59.98, 'platform' => 'PS4', 'image' => '<img class="customer-image" src="img/Spiderman_PS4.jpg" alt="webshop">']

    ];
   
   return response()->json($customers);
});
*/