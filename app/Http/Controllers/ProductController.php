<?php

namespace App\Http\Controllers;

use App\Product;

use Illuminate\Http\Request;

use Illuminate\Http\Response;

class ProductController extends Controller
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
      * Return the list of Products
      * @return Illuminate\Http\Response
      */
    public function showProducts()
    {
       $products = Product::all();
       
       return response()->json($products);
    }
    /**
     * Show one Product
     * @return Illuminate\Http\Response
     */
    public function showProduct($productId)
{
        $product = Product::findOrFail($productId);
        return response()->json($product);
    }
  /**
     * Create a new product
     * @return Illuminate\Http\Response
     */
    public function createProduct(Request $request)
    {
        $rules = [
            'platform' => 'required|max:255|in:PS4,Xbox',
            'name' => 'required|max:255',
            'price' => 'required|max:255',
            'image' => 'required|max:255',

        ];

        $this->validate($request, $rules);

        $product = Product::create($request->all());

        return response()->json($product, 201);
    }
    /**
     * Update an existing product
     * @return Illuminate\Http\Response
     */
    public function updateProduct(Request $request, $productId)
    {
        $rules = [
            'platform' => 'max:255|in:PS4,Xbox',
            'name' => 'max:255',
            'price' => 'max:255',
            'image' => 'max:255',
        ];

        $this->validate($request, $rules);

        $product = Product::findOrFail($productId);

        $product->update($request->all());

        return response()->json($product, 200);

    }
    /**
     * Deleting an product
     * @return Illuminate\Http\Response
     */

    public function deleteProduct($productId)
    {
        $product = Product::findOrFail($productId);

        $product->delete();

        return response()->json($product, 200);
    }

}


