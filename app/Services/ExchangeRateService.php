<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;

class ExchangeRateService
{
    protected $apiUrl;

    public function __construct()
    {
        // আপনার API URL এখানে বসান
        $this->apiUrl = env('EXCHANGE_RATE_API_URL', 'https://api.exchangerate-api.com/v4/latest/USD');
    }

    public function getRate($from = 'USD', $to = 'BDT')
    {
        // ক্যাশে রেট চেক করুন, যদি না পাওয়া যায় API থেকে ফেচ করুন
        return Cache::remember("exchange_rate_{$from}_{$to}", 3600, function () use ($from, $to) {
            $response = Http::get($this->apiUrl);

            if ($response->successful()) {
                $data = $response->json();
                return $data['rates'][$to] ?? null;
            }

            return null;
        });
    }



}
