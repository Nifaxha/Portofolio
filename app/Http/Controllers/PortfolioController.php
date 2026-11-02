<?php

namespace App\Http\Controllers;

class PortfolioController extends Controller
{
    public function index()
    {
        return view('welcome', [
            'portfolio' => config('portfolio'),
            'page' => 'home',
        ]);
    }

    public function projects()
    {
        return view('welcome', [
            'portfolio' => config('portfolio'),
            'page' => 'projects',
        ]);
    }
}