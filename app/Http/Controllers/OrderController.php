<?php

namespace App\Http\Controllers;

use App\Order;

use Illuminate\Http\Request;

use Illuminate\Http\Response;

class OrderController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

     /**
      * Return the list of Orders
      * @return Illuminate\Http\Response
      */
    public function showOrders()
    {
       $orders = Order::all();
       
       return response()->json($orders);
    }
    /**
     * Show one Order
     * @return Illuminate\Http\Response
     */
    public function showOrder($orderId)
{
        $Order = Order::findOrFail($orderId);
        return response()->json($Order);
    }
  /**
     * Create a new Order
     * @return Illuminate\Http\Response
     */
    public function createOrder(Request $request)
    {
        $rules = [
            'invoice_id' => 'max:255',
            'customer_id' => 'max:255',
        ];

        $this->validate($request, $rules);

        $Order = Order::create($request->all());

        return response()->json($Order, 201);
    }
    /**
     * Update an existing Order
     * @return Illuminate\Http\Response
     */
    public function updateOrder(Request $request, $orderId)
    {
        $rules = [
            'invoice_id' => 'max:255',
            'customer_id' => 'max:255',
        ];

        $this->validate($request, $rules);

        $Order = Order::findOrFail($orderId);

        $Order->update($request->all());

        return response()->json($Order, 200);

    }
    /**
     * Deleting an Order
     * @return Illuminate\Http\Response
     */

    public function deleteOrder($orderId)
    {
        $Order = Order::findOrFail($orderId);

        $Order->delete();

        return response()->json($Order, 200);
    }

}


