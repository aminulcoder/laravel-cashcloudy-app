<?php
namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use Inertia\Inertia;

class TransactionController extends Controller
{
    public function transection()
    {
        return Inertia::render('Admin/Transactions/Transaction');
    }
}
