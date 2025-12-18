<?php

use Illuminate\Support\Facades\Route;

// Root renders the SPA shell
Route::get('/', function () {
    return view('welcome');
});

// Catch-all for SPA routes, excluding the API prefix
Route::get('/{any}', function () {
return view('welcome');
})->where('any', '^(?!api).*');
