<?php

use App\Http\Controllers\Admin\ExchangeRateController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::get('/admin/exchange-rate', [ExchangeRateController::class, 'convert']);

