<?php

use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\EarnmoneyController;
use App\Http\Controllers\Admin\ExchangeRateController;
use App\Http\Controllers\Admin\RequestmoneyController;
use App\Http\Controllers\Admin\RoleController;
use App\Http\Controllers\Admin\SendmoneyController;
use App\Http\Controllers\Admin\SettingController;
use App\Http\Controllers\Admin\StripeController;
use App\Http\Controllers\Admin\TransactionController;
use App\Http\Controllers\Admin\WithdrawmoneyController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::middleware('auth','verified')->prefix('admin')->group(function () {
    Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('transection', [TransactionController::class, 'transection'])->name('transection');
    Route::get('earnmoney', [EarnmoneyController::class, 'earnmoney'])->name('earnmoney');
    Route::get('sendmoney', [SendmoneyController::class, 'sendmoney'])->name('sendmoney');
    Route::get('widthdraw-money', [WithdrawmoneyController::class, 'widthdrawmoney'])->name('widthdraw.money');
    Route::get('request-money', [RequestmoneyController::class, 'requestmoney'])->name('request.money');

    //stripe payment
    Route::get('/add-card', [StripeController::class, 'showAddCardPage'])->name('card.add');
    Route::post('/add-card', [StripeController::class, 'addCard'])->name('stripe.add-card');


    Route::resource('category', CategoryController::class);
    Route::resource('role', RoleController::class);
    Route::get('settings', [SettingController::class, 'index'])->name('settings');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');


});



require __DIR__ . '/auth.php';
