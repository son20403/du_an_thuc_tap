<?php

use App\Http\Controllers\Admin\DanhMucController;
use App\Http\Controllers\Admin\SanPhamController;
use App\Http\Controllers\Admin\TheLoaiController;
use App\Http\Controllers\Admin\GioHangController;
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



Route::group(['prefix'=> 'admin'], function () {

    Route::get('/', function () {
        return view('admin.page.home.index');
    }); // url/admin

    Route::group(['prefix' => '/danh-muc'], function () {
        Route::get('/', [DanhMucController::class,'index']); 
        Route::get('/du-lieu', [DanhMucController::class,'HienThiDanhMuc']); // url/admin/danh-muc/du-lieu
        Route::post('/', [DanhMucController::class,'ThemDanhMuc']); 
        Route::post('/xoa', [DanhMucController::class,'XoaDanhMuc']); 
        Route::post('/cap-nhat/{id}', [DanhMucController::class,'CapNhatDanhMuc']); 
    }); 

    Route::group(['prefix' => '/gio-hang'], function () {
        Route::get('/', [GioHangController::class,'index']); 
        Route::get('/du-lieu', [GioHangController::class,'HienThiGioHang']); // url/admin/the-loa/du-lieu
        Route::post('/', [GioHangController::class,'ThemGioHang']); 
        Route::get('/xoa/{id}', [GioHangController::class,'XoaGioHang']); 
        Route::get('/cap-nhat/{id}', [GioHangController::class,'CapNhatGioHang']); 
    });

});// admin