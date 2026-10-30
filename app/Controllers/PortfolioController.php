<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\View\View;

class PortfolioController extends Controller
{
    public function index(): View
    {
        $portfolio = config('portfolio');

        // Path gambar dan CV di config relatif terhadap folder public/.
        $portfolio['projects'] = collect($portfolio['projects'])
            ->map(function (array $project) {
                $project['gambar'] = $project['gambar'] ? asset($project['gambar']) : null;

                return $project;
            })
            ->all();

        $portfolio['profile']['cv'] = $portfolio['profile']['cv']
            ? asset($portfolio['profile']['cv'])
            : null;

        return view('home', ['portfolio' => $portfolio]);
    }
}
