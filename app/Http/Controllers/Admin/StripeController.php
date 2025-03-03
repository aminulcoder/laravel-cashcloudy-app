<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Card;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Stripe\Stripe;
use Stripe\Customer;
use Stripe\Token;
use Stripe\PaymentMethod;
use Auth;
class StripeController extends Controller
{
    public function addCard(Request $request)
    {
        $request->validate([
            'stripe_token' => 'required',
        ]);

        // Stripe Secret Key সেট করা
        Stripe::setApiKey(env('STRIPE_SECRET'));

        // ইউজার ডাটা
        $user = Auth::user();

        // যদি ইউজারের Stripe Customer ID না থাকে, তাহলে তৈরি করবো
        if (!$user->stripe_customer_id) {
            $customer = \Stripe\Customer::create([
                'email' => $user->email,
            ]);
            $user->stripe_customer_id = $customer->id;
            $user->save();
        } else {
            $customer = \Stripe\Customer::retrieve($user->stripe_customer_id);
        }

        // Payment Method যুক্ত করা
        $paymentMethod = PaymentMethod::retrieve($request->stripe_token);
        $paymentMethod->attach(['customer' => $customer->id]);

        // Card Data Database-এ সংরক্ষণ
        Card::create([
            'user_id' => $user->id,
            'card_last4' => $paymentMethod->card->last4,
            'card_brand' => $paymentMethod->card->brand,
            'stripe_card_id' => $paymentMethod->id,
        ]);

        return redirect()->route('dashboard')->with('success', 'Card added successfully!');
    }

    // Inertia Page Show
    public function showAddCardPage()
    {


        return Inertia::render('Admin/add-card');

        // return "ok";
    }
}
