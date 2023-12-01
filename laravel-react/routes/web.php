<?php

use App\Http\Controllers\Admin\DanhMucController;
use App\Http\Controllers\Admin\HinhAnhController;
use App\Http\Controllers\Admin\SanPhamController;
use App\Http\Controllers\Admin\TheLoaiController;
use App\Http\Controllers\Admin\GioHangController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MailController;
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
Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/', function () {
        // return view('dashboard');
        return view('admin.page.home.index');
    });
    Route::group(['prefix'=> 'admin'], function () {

        Route::get('/', function () {
            return view('admin.page.home.index');
        }); // url/admin
    
        Route::group(['prefix' => '/danh-muc'], function () {
            Route::get('/', [DanhMucController::class,'index']);
            Route::get('/du-lieu', [DanhMucController::class,'HienThiDanhMuc']); // url/admin/danh-muc/du-lieu
            Route::post('/', [DanhMucController::class,'ThemDanhMuc']);
            Route::post('/xoa', [DanhMucController::class,'XoaDanhMuc']);
            Route::post('/cap-nhat', [DanhMucController::class,'CapNhatDanhMuc']);
        });
    
        Route::group(['prefix' => '/the-loai'], function () {
            Route::get('/', [TheLoaiController::class,'index']);
            Route::get('/du-lieu', [TheLoaiController::class,'HienThiTheLoai']); // url/admin/the-loa/du-lieu
            Route::post('/', [TheLoaiController::class,'ThemTheLoai']);
            Route::post('/xoa', [TheLoaiController::class,'XoaTheLoai']);
            Route::post('/cap-nhat', [TheLoaiController::class,'CapNhatTheLoai']);
        });
    
        Route::group(['prefix' => '/san-pham'], function () {
            // Route::get('/', [SanPhamController::class,'index']);
            // Route::get('/du-lieu', [SanPhamController::class,'HienThiSanPham']); // url/admin/the-loa/du-lieu
            // Route::post('/', [SanPhamController::class,'ThemSanPham']);
            // Route::post('/xoa', [SanPhamController::class,'XoaSanPham']);
            // Route::post('/cap-nhat', [SanPhamController::class,'CapNhatSanPham']);
            // Route::post('/toggleStatus/{id}', [SanPhamController::class,'CapNhatSanPham']);
    
            Route::get('/', [SanphamController::class, 'sanpham']);
            Route::get('/du-lieu', [SanPhamController::class,'HienThiSanPham']); // url/admin/the-loa/du-lieu
            Route::get('/xoasanpham', [SanphamController::class, 'xoa_sanpham']);
            Route::post('/capnhatsanpham/{id}', [SanphamController::class, 'cn_sanpham_']);
            Route::get('/toggleStatus', [SanphamController::class, 'toggleStatus']);
        });
    
        // Hình Ảnh
        Route::get('/xoahinhanh', [HinhAnhController::class, 'xoa_hinhanh']);
    
        Route::group(['prefix' => '/gio-hang'], function () {
            Route::get('/', [GioHangController::class,'index']);
            Route::get('/du-lieu', [GioHangController::class,'HienThiGioHang']); // url/admin/the-loa/du-lieu
            Route::post('/', [GioHangController::class,'ThemGioHang']);
            Route::get('/xoa/{id}', [GioHangController::class,'XoaGioHang']);
            Route::get('/cap-nhat/{id}', [GioHangController::class,'CapNhatGioHang']);
        });
    });// admin
});




    

Route::post('/send-email', [MailController::class, 'sendEmail']);

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return view('dashboard');
    })->name('dashboard');
});
