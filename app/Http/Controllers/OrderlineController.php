<?php

namespace App\Http\Controllers;

use App\Orderline;

use Illuminate\Http\Request;

use Illuminate\Http\Response;

class OrderlineController extends Controller
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
      * Return the list of Orderlines
      * @return Illuminate\Http\Response
      */
    public function showOrderlines()
    {
       $orderlines = Orderline::all();
       
       return response()->json($orderlines);
    }
    /**
     * Show one Orderline
     * @return Illuminate\Http\Response
     */
    public function showOrderline($orderlineId)
{
        $orderline = Orderline::findOrFail($orderlineId);
        return response()->json($orderline);
    }
  /**
     * Create a new orderline
     * @return Illuminate\Http\Response
     */
    public function createOrderline(Request $request)
    {
        $rules = [
            'order_id' => 'max:255',
            'product_id' => 'max:255',
            'amount' => 'max:255',
        ];

        $this->validate($request, $rules);

        $orderline = Orderline::create($request->all());

        return response()->json($orderline, 201);
    }
    /**
     * Update an existing orderline
     * @return Illuminate\Http\Response
     */
    public function updateOrderline(Request $request, $orderlineId)
    {
        $rules = [
            'order_id' => 'max:255',
            'product_id' => 'max:255',
            'amount' => 'max:255',
        ];
        
        $this->validate($request, $rules);

        $orderline = Orderline::findOrFail($orderlineId);

        $orderline->update($request->all());

        return response()->json($orderline, 200);

    }
    /**
     * Deleting an orderline
     * @return Illuminate\Http\Response
     */

    public function deleteCustomer($orderlineId)
    {
        $orderline = Orderline::findOrFail($orderlineId);

        $orderline->delete();

        return response()->json($orderline, 200);
    }

}


