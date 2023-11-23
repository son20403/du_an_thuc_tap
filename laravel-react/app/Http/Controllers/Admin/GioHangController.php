<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\SanPhamRequest;
use App\Models\GioHangModel;
use App\Models\SanPhamModel;
use Illuminate\Http\Request;
use App\Models\DanhMucModel;
use App\Models\TheLoaiModel;
use Illuminate\Support\Str;

class GioHangController extends Controller
{
    public function index()
    {
        $data_giohang = GioHangModel::all();
        return view('admin.page.GioHang.QuanLyGioHang', compact('data_giohang'));
    }

    //ok
    public function HienThiGioHang(){
        $data_giohang = GioHangModel::all();
        return view('admin.page.GioHang.QuanLyGioHang', compact('data_giohang'));
    }
    

    public function ThemGioHang(Request $request) {
        $data_giohang = $request->all();
        // dd($data_giohang);
        GioHangModel::create($data_giohang);
        return redirect('/admin/gio-hang')->with('success','success');
        return response()->json(['success' => true, 'message' => 'Dữ liệu hợp lệ.']);
    }

    public function XoaGioHang($id) {
        GioHangModel::where('id', $id)->delete();     
        return redirect('/admin/gio-hang')->with('success','success');
    }

    public function CapNhatGioHang($id, Request $request) {
        $data = $request->all();
        $data = $request->except('_token');
        // $data['ten_danh_muc_slug'] = Str::slug($data['ten_danh_muc']);
        GioHangModel::where('id', $id)->update(
            $data 
        );        
        return redirect('admin/gio-hang')->with('success','success');
    }
}
