<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
class Card extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'card_last4',
        'card_brand',
        'stripe_card_id',
    ];
}
