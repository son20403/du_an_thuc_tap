<?php

use App\Http\Controllers\Admin\QuanLyHoaDonController;
use App\Http\Controllers\Admin\QLbaiVietController;
use App\Http\Controllers\Admin\DanhMucController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('admin.page.home.index');
});

Route::group(['prefix' => 'admin'], function () {
    Route::get('/', function () {
        return view('admin.page.home.index');
    }); // trang chu admin

    Route::group(['prefix' => '/danh-muc'], function () {
        Route::get('/', [DanhMucController::class, 'index']); // danh sach quan ly danh muc
        Route::post('/', [DanhMucController::class, 'ThemDanhMuc']); // them danh muc\
        Route::get('/xoa/{id}', [DanhMucController::class, 'XoaDanhMuc']); // xoa danh muc
        Route::post('/cap-nhat/{id}', [DanhMucController::class, 'CapNhatDanhMuc']); // them danh muc\

    });
    // hoá đơn
    Route::group(['prefix' => '/hoadon'], function () {
        Route::get('/', [QuanLyHoaDonController::class, 'index']);
    });
    //bài viết
    Route::get('/baiviet', [QLbaiVietController::class, 'baiviet']);
    Route::post('/baiviet', [QLbaiVietController::class, 'taobaiviet']);
    Route::get('/baiviet/{id}', [QLbaiVietController::class, 'xoa_baiviet']);
    Route::post('/capnhat_baiviet/{id}', [QLbaiVietController::class, 'capnhat_baiviet']);
    Route::get('/baiviet/doitrangthai', [QLbaiVietController::class, 'doitrangthai']);
    Route::post('/baiviet/khoiphuc', [QLbaiVietController::class, 'restore']);
});// admin
