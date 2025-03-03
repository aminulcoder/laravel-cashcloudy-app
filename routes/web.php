<?php

use App\Http\Controllers\Admin\PaymentController;
use App\Http\Controllers\HomepageController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;




Route::get('/', [HomepageController::class, 'Homepage'])->name('homepage');
require __DIR__.'/admin.php';


// Auth::routes(['verify' => true]);
