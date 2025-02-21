<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EarnmoneyController extends Controller
{
    public function earnmoney() {

        return Inertia::render('Admin/Earnmoney/Earnmoney');
    }
}
