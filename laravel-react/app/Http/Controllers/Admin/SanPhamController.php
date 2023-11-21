<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\SanPhamRequest;
use App\Models\SanPhamModel;
use Illuminate\Http\Request;
use App\Models\DanhMucModel;
use App\Models\TheLoaiModel;
use Illuminate\Support\Str;

class SanPhamController extends Controller
{
    public function index()
    {
        return view('admin.page.SanPham.QuanLySanPham');
    }

    public function HienThiSanPham() {
        $data_sanpham = SanPhamModel::orderBy('created_at','desc')->get();
        $data_theloai = TheLoaiModel::all();
        $data_danhmuc = DanhMucModel::all();
        $compact = compact('data_danhmuc', 'data_theloai', 'data_sanpham');

        if ($data_sanpham->isEmpty()) {
			return response()->json( $compact );
        } else {
            return response()->json( $compact );
        }
    }

    public function ThemSanPham(SanPhamRequest $request) {
        $data = $request->all();
        $data['ten_the_loai_slug'] = Str::slug($data['ten_the_loai']);

        // dd($data_danhmuc);
        TheLoaiModel::create($data);
        return redirect('/admin/the-loai')->with('success','success');
        // return response()->json(['success' => true, 'message' => 'Dữ liệu hợp lệ.']);
    }

    public function XoaSanPham(Request $request) {
           
        TheLoaiModel::where('id', $request->id)->update(
            [
                'is_delete' => 1
            ]
        );     
        return response()->json([
            'status'    =>      true,
            'message'   =>      'Đã xóa liên hệ thành công !'
        ]);
        // return redirect('/admin/the-loai')->with('success','success');
    }

    public function CapNhatSanPham($id, SanPhamRequest $request) {
        $data = $request->all();
        $data = $request->except('_token');
        $data['ten_the_loai_slug'] = Str::slug($data['ten_the_loai']);
        TheLoaiModel::where('id', $id)->update(
            $data 
        );        
        return redirect('admin/the-loai')->with('success','success');
    }
}
