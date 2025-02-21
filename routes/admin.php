<?php

use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\DashboarController;
use App\Http\Controllers\Admin\EarnmoneyController;
use App\Http\Controllers\Admin\RoleController;
use App\Http\Controllers\Admin\SettingController;
use App\Http\Controllers\Admin\TransactionController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\ProfileController;

Route::middleware('auth')->prefix('admin')->group(function () {
    Route::get('dashboard', [DashboarController::class, 'index'])->name('dashboard');
    Route::get('transection',[TransactionController::class,'transection'])->name('transection');
    Route::get('earnmoney',[EarnmoneyController::class,'earnmoney'])->name('earnmoney');
    Route::resource('category', CategoryController::class);
    Route::resource('role',  RoleController::class);
    Route::get('settings', [SettingController::class, 'index'])->name('settings');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
