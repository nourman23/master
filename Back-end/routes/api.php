<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\DriverController;
use App\Http\Controllers\RequestsController;
use App\Http\Controllers\TestimonialsController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


// get all users , drivers , requests and testimonials from database
Route::get('/showUsers', [UserController::class, 'index']);
Route::get('/showUser/{id}', [UserController::class, 'singleUser']);
Route::get('/showDrivers', [DriverController::class, 'index']);
Route::get('/showRequests', [RequestsController::class, 'index']);
Route::get('/showTesimonials', [TestimonialsController::class, 'index']);
Route::get('/userOrders/{id}', [UserController::class, 'orders']);

// user and driver register
Route::post('/reactUserRegister', [UserController::class, 'storeFromReact']);
Route::post('/reactDriverRegister', [DriverController::class, 'storeFromReact']);

// user and admin login
Route::post('/reactUserLogin', [UserController::class, 'LoginFromReact']);
Route::post('/DriverLogin', [DriverController::class, 'login']);
Route::post('/googleUserLogin', [UserController::class, 'LoginByGoogle']);

//create a new testimonial and request
Route::post('/newTestmonial', [TestimonialsController::class, 'storeFromReact']);
Route::post('/newRequest', [RequestsController::class, 'storeFromReact']);

// update user info
Route::post('/edit-profile', [UserController::class, 'update']);


// delete user , driver , testimonial and request by admin
Route::delete('/delete_driver/{id}', [DriverController::class, 'destroy']);
Route::delete('/delete_user/{id}', [UserController::class, 'destroy']);
Route::delete('/delete_testmonial/{id}', [TestimonialsController::class, 'destroy']);
Route::delete('/delete_request/{id}', [RequestsController::class, 'destroy']);


// ============= Dashboard work ==============

// request and testimonial approving
Route::get('/AdminShowTesimonials', [TestimonialsController::class, 'AdminIndex']);
Route::get('/AdminShowRequests', [RequestsController::class, 'AdminIndex']);

// testimonial status
Route::post('/changeTestimonialStatus', [TestimonialsController::class, 'status']);
Route::post('/changeRequestStatus', [RequestsController::class, 'status']);
Route::post('/changeDriverStatus', [DriverController::class, 'status']);