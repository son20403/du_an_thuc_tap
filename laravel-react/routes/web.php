<?php

use App\Http\Controllers\Admin\DanhMucController;
use App\Http\Controllers\Admin\SanPhamController;
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
    }); // url/admin

    Route::group(['prefix' => '/danh-muc'], function () {
        Route::get('/', [DanhMucController::class,'index']); 
        Route::get('/du-lieu', [DanhMucController::class,'HienThiDanhMuc']); // url/admin/danh-muc/du-lieu
        Route::post('/', [DanhMucController::class,'ThemDanhMuc']); 
        Route::post('/xoa', [DanhMucController::class,'XoaDanhMuc']); 
        Route::post('/cap-nhat/{id}', [DanhMucController::class,'CapNhatDanhMuc']); 
    }); 

    Route::group(['prefix' => '/the-loai'], function () {
        Route::get('/', [TheLoaiController::class,'index']); 
        Route::get('/du-lieu', [TheLoaiController::class,'HienThiTheLoai']); // url/admin/the-loa/du-lieu
        Route::post('/', [TheLoaiController::class,'ThemTheLoai']); 
        Route::post('/xoa', [TheLoaiController::class,'XoaTheLoai']); 
        Route::post('/cap-nhat/{id}', [TheLoaiController::class,'CapNhatTheLoai']); 
    });

    Route::group(['prefix' => '/san-pham'], function () {
        Route::get('/', [SanPhamController::class,'index']); 
        Route::get('/du-lieu', [SanPhamController::class,'HienThiSanPham']); // url/admin/the-loa/du-lieu
        Route::post('/', [SanPhamController::class,'ThemSanPham']); 
        Route::post('/xoa', [SanPhamController::class,'XoaSanPham']); 
        Route::post('/cap-nhat/{id}', [SanPhamController::class,'CapNhatSanPham']); 
    });

});// admin