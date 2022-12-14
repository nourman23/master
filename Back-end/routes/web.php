<?php

use Ramsey\Uuid\Math\RoundingMode;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\DriverController;
use App\Http\Controllers\TestimonialsController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('pages.home');
});

Route::get('/signup', function () {
    return view('pages.user-signup');
});

Route::get('/login', function () {
    return view('pages.login');
});

Route::get('/contact', function () {
    return view('pages.contact');
});
Route::get('/services', function () {
    return view('pages.services');
});

Route::get('/profile', function () {
    return view('pages.profile');
})->middleware('auth');

Route::get('/about', function () {
    return view('pages.about');
});
Route::get('/driver_signup', function () {
    return view('pages.driver_signup');
});
Route::get('/driver_conditions', function () {
    return view('pages.driver_conditions');
});
Route::get('/move_order_request', function () {
    return view('pages.move_order_request');
});
Route::post('/user_signup', [UserController::class, 'store']);
Route::post('/driver_signup', [DriverController::class, 'store']);
Route::post('/user_login', [UserController::class, 'login']);
Route::get('/user_logout', [UserController::class, 'logout']);
Route::post('/testimonial', [TestimonialsController::class, 'store']);

// Route::get('*', function () {
//     return view('pages.notFound');
// });