<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\ExchangeRateService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ExchangeRateController extends Controller
{
    protected $exchangeRateService;

    // Dependency Injection ব্যবহার করা
    public function __construct(ExchangeRateService $exchangeRateService)
    {
        $this->exchangeRateService = $exchangeRateService;
    }

    public function convert(Request $request)
    {
        $amount = $request->input('amount', 1); // ডিফল্ট $1
        $rate = $this->exchangeRateService->getRate('USD', 'BDT');

        if (!$rate) {
            return response()->json(['error' => 'Exchange rate not available'], 500);
        }

        $convertedAmount = $amount * $rate;

        return response()->json([
            'amount_in_usd' => $amount,
            'exchange_rate' => $rate,
            'amount_in_bdt' => round($convertedAmount, 2),
        ]);
    }

    public function showExchangeRate()
{
    $rate = $this->exchangeRateService->getRate('USD', 'BDT');

    // Pass the dynamic rate to Inertia view

    // return $rate;
    return Inertia::render('Admin/Dashboard', [
        'rate' => $rate,
    ]);
}


}
