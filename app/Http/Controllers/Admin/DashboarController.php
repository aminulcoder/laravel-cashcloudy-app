<?php

namespace App\Http\Controllers\Admin;

use App\Services\ExchangeRateService;
use Inertia\Inertia;
use App\Http\Controllers\Controller;
use Exception;

class DashboardController extends Controller
{
    protected $exchangeRateService;

    public function __construct(ExchangeRateService $exchangeRateService)
    {
        $this->exchangeRateService = $exchangeRateService;
    }

    public function index()
    {
        try {
            // Get the exchange rate for USD to BDT
            $rate = $this->exchangeRateService->getRate('USD', 'BDT');

            // return $rate;
        } catch (Exception $e) {
            // Handle the error gracefully
            $rate = null; // Or a default value like 110.0
            \Log::error('Exchange rate fetch failed: ' . $e->getMessage());
        }

        // Pass the rate to Inertia (React component)
        return Inertia::render('Admin/Dashboard', [
            'rate' => $rate,
        ]);
    }
}
