<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Orderline extends Model
{
 /**
 *  The attributes that are mass assignable.
 *
 * @var array
 */
 protected $fillable = [
    'order_id',
    'product_id',
    'amount',
 ];
}
