<?php
namespace App\Http\Controllers;

use Inertia\Inertia;

class HomepageController extends Controller
{
    public function Homepage()
    {

        return Inertia::render('HomePage');

    }
}
