<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/





Route::namespace('App\Http\Controllers\Api')->group(function () {
    // public routes
    Route::post('register', 'AuthController@register');
    Route::post('login', 'AuthController@login');
    Route::get('token-check', 'AuthController@checkToken');

    // auth routes
    Route::middleware('auth:sanctum')->group(function () {
        Route::post('logout', 'AuthController@logout');
    });


    Route::prefix('admin')->group(function () {
        // Admin Public Routes
        Route::post('login', 'AdminAuthController@login');

        // Admin Auth Routes
        Route::middleware(['auth:sanctum', 'isApiAdmin'])->group(function () {
        });
    });

});
