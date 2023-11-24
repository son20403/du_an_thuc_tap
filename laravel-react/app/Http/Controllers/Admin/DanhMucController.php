<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\CapNhatDanhMucRequest;
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
        $data =  $request->all();
        $data['ten_danh_muc_slug'] = Str::slug($data['ten_danh_muc']);
        DanhmucModel::create($data);
        return response()->json([
            'status'    =>  true,
            'message'   =>  'Thêm thành công'
        ]);
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

    public function CapNhatDanhMuc(CapNhatDanhMucRequest $request) {
        $data = $request->all();
        $data['ten_danh_muc_slug'] = Str::slug($data['ten_danh_muc']);

        $DanhMuc = DanhMucModel::where('id', $request->id)->first();
        $DanhMuc->update($data);  
              
        return response()->json([
            'status'    =>  true,
            'message'   =>  'Cap nhat thành công'
        ]);          
    }
}
