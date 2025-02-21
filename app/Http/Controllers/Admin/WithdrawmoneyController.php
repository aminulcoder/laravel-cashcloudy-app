<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WithdrawmoneyController extends Controller
{
    public function widthdrawmoney()  {

        return Inertia::render('Admin/WidthdrawMoney');

       }
}
