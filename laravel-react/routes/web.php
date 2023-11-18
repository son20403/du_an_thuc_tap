<?php

use App\Http\Controllers\Admin\DanhMucController;
use App\Http\Controllers\Admin\TheLoaiController;
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
    }); // trang chu admin

    Route::group(['prefix' => '/danh-muc'], function () {
        Route::get('/', [DanhMucController::class,'index']); // danh sach quan ly danh muc
        Route::post('/', [DanhMucController::class,'ThemDanhMuc']); // them danh muc
        Route::get('/xoa/{id}', [DanhMucController::class,'XoaDanhMuc']); // xoa danh muc
        Route::post('/cap-nhat/{id}', [DanhMucController::class,'CapNhatDanhMuc']); // cap nhat danh muc

    });

    Route::group(['prefix' => '/the-loai'], function () {
        Route::get('/', [TheLoaiController::class,'index']); // danh sach quan ly the loai
        Route::post('/', [TheLoaiController::class,'ThemTheLoai']); // them the loai
        Route::get('/xoa/{id}', [TheLoaiController::class,'XoaTheLoai']); // xoa the loai
        Route::post('/cap-nhat/{id}', [TheLoaiController::class,'CapNhatTheLoai']); // cap nhat the loai

    });

});// admin