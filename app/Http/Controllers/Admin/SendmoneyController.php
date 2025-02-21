<?php
namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class SendmoneyController extends Controller
{
    public function sendmoney()
    {

        return Inertia::render('Admin/SendMoney');

    }
}
