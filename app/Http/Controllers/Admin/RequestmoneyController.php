<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RequestmoneyController extends Controller
{
   public function requestmoney()  {

    return Inertia::render('Admin/RequestMoney');
   }
}
