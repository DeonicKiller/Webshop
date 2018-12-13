<?php

namespace App\Http\Controllers;

use App\Customer;

use Illuminate\Http\Request;

use Illuminate\Http\Response;

class CustomerController extends Controller
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
      * Return the list of Customers
      * @return Illuminate\Http\Response
      */
    public function showCustomers()
    {
       $customers = Customer::all();
       
       return response()->json($customers);
    }
    /**
     * Show one Customer
     * @return Illuminate\Http\Response
     */
    public function showCustomer($customerId)
{
        $customer = Customer::findOrFail($customerId);
        return response()->json($customer);
    }
  /**
     * Create a new customer
     * @return Illuminate\Http\Response
     */
    public function createCustomer(Request $request)
    {
        $rules = [
            'first_name' => 'max:255',
            'last_name' => 'max:255',
            'address' => 'max:255',
            'city' => 'max:255',
            'e-mail' => 'max:255',
        ];

        $this->validate($request, $rules);

        $customer = Customer::create($request->all());

        return response()->json($customer, 201);
    }
    /**
     * Update an existing customer
     * @return Illuminate\Http\Response
     */
    public function updateCustomer(Request $request, $customerId)
    {
        $rules = [
            'first_name' => 'max:255',
            'last_name' => 'max:255',
            'address' => 'max:255',
            'city' => 'max:255',
            'e-mail' => 'max:255',
        ];

        $this->validate($request, $rules);

        $customer = Customer::findOrFail($customerId);

        $customer->update($request->all());

        return response()->json($customer, 200);

    }
    /**
     * Deleting an customer
     * @return Illuminate\Http\Response
     */

    public function deleteCustomer($customerId)
    {
        $customer = Customer::findOrFail($customerId);

        $customer->delete();

        return response()->json($customer, 200);
    }

}


