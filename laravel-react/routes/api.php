<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\BaiVietController;
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
// Lấy danh sách bài viết
Route::get('/baiviet', [BaiVietController::class, 'index'])->name('baiviet.index');

// Lấy thông tin bài viết theo id
Route::get('/baiviet/{id}', [BaiVietController::class, 'show'])->name('baiviet.show');

// Thêm bài viết mới
Route::post('baiviet', [BaiVietController::class, 'store'])->name('baiviet.store');

// Cập nhật thông tin bài viết theo id
# Sử dụng put nếu cập nhật toàn bộ các trường
Route::put('baiviet/{id}', [BaiVietController::class, 'update'])->name('baiviet.update');
# Sử dụng patch nếu cập nhật 1 vài trường
Route::patch('baiviet/{id}', [BaiVietController::class, 'update'])->name('baiviet.update');

// Xóa bài viết theo id
Route::delete('baiviet/{id}', [BaiVietController::class, 'destroy'])->name('baiviet.destroy');



