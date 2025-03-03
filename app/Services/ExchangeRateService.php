<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class ExchangeRateService
{
    // Example: Fixer.io API, you can use any API service
    protected $apiUrl = 'https://api.exchangerate-api.com/v4/latest/USD'; // Replace with the correct API

    public function getRate($fromCurrency, $toCurrency)
    {
        // Make the API request
        $response = Http::get($this->apiUrl);

        if ($response->successful()) {
            $data = $response->json();
            return $data['rates'][$toCurrency] ?? null;
        }

        return null;
    }
}
