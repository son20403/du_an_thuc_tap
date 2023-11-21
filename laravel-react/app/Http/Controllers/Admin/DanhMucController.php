<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\DanhMucRequest;
use App\Models\DanhMucModel;
use Illuminate\Support\Str;
use Illuminate\Http\Request;

class DanhMucController extends Controller
{
    public function index()
    {
        return view('admin.page.DanhMuc.QuanLyDanhMuc');
    }

    public function HienThiDanhMuc() {
        $data_danhmuc = DanhMucModel::all();
        $compact = compact('data_danhmuc');

        if ($data_danhmuc->isEmpty()) {
			return response()->json( $compact );
        } else {
            return response()->json( $compact );
        }
    }

    public function ThemDanhMuc(DanhMucRequest $request) {
        $data_danhmuc = $request->all();
        $data_danhmuc['ten_danh_muc_slug'] = Str::slug($data_danhmuc['ten_danh_muc']);
        // dd($data_danhmuc);
        DanhmucModel::create($data_danhmuc);
        return redirect('/admin/danh-muc')->with('success','success');
        // return response()->json(['success' => true, 'message' => 'Dữ liệu hợp lệ.']);
    }

    public function XoaDanhMuc(Request $request) {
        DanhMucModel::where('id', $request->id)->update(
            [
                'is_delete' => 1
            ]
        );     
        return response()->json([
            'status'    =>      true,
            'message'   =>      'Đã xóa liên hệ thành công !'
        ]);
        // return redirect('/admin/danh-muc')->with('success','success');
    }

    public function CapNhatDanhMuc($id, DanhMucRequest $request) {
        $data = $request->all();
        $data = $request->except('_token');
        $data['ten_danh_muc_slug'] = Str::slug($data['ten_danh_muc']);
        DanhMucModel::where('id', $id)->update(
            $data 
        );        
        return redirect('admin/danh-muc')->with('success','success');
    }
}
