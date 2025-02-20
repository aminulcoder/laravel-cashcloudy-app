<?php

use App\Http\Controllers\HomepageController;
use Illuminate\Support\Facades\Route;




Route::get('/', [HomepageController::class, 'Homepage'])->name('homepage');
require __DIR__.'/admin.php';

