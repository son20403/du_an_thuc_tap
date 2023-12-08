<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\api\UserController;
use App\Http\Controllers\API\RegisterController;
use App\Http\Controllers\API\AuthController;
use App\Actions\Fortify\CreateNewUser;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();

});



// Route::post('/register', [RegisterController::class, 'methodName']);

// Route::post('/login', [AuthController::class, 'login']);


// register
Route::post('/register', [UserController::class, 'store']);
// update user
Route::post('/update-user', [UserController::class, 'update']);
// login nhận dữ liệu user
Route::post('/login', [UserController::class, 'login']);
Route::post('/detail', [UserController::class, 'detail']);
// login nhận toker
Route::post('/login-token', [UserController::class, 'login_token']);
Route::post('/edit', [UserController::class, 'edit']);
// detail-user để lấy dữ liệu user
Route::post('/detail-user', [UserController::class, 'detailUser'])->middleware('auth:sanctum');

Route::middleware('auth:sanctum')->group( function () {
    Route::post('/logout-token', [UserController::class, 'logout_token']);
});

