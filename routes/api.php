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
// Route::group(['middleware' => ['web']], function () {
Route::post('/reactUserLogin', [UserController::class, 'LoginFromReact']);
// Route::get('/AdminLogin', [AdminController::class, 'index']);
// Route::post('/reactAdminLogin', [AdminController::class, 'LoginFromReact']);
Route::post('/reactUserRegister', [UserController::class, 'storeFromReact']);
Route::post('/reactDriverRegister', [DriverController::class, 'storeFromReact']);
Route::post('/newTestmonial', [TestimonialsController::class, 'storeFromReact']);
Route::get('/showUsers', [UserController::class, 'index']);
Route::get('/showDrivers', [DriverController::class, 'index']);
Route::post('/newRequest', [RequestsController::class, 'storeFromReact']);
// });
