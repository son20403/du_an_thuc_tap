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
        $data_danhmuc = DanhMucModel::orderBy('id', 'desc')->paginate(10);

        if ($data_danhmuc->isEmpty()) {
			return view('admin.page.DanhMuc.QuanLyDanhMuc', compact('data_danhmuc'));
        } else {
            return view('admin.page.DanhMuc.QuanLyDanhMuc', compact('data_danhmuc'));
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

    public function XoaDanhMuc($id) {
        DanhMucModel::where('id', $id)->update(
            [
                'is_delete' => 0
            ]
        );     
        return redirect('/admin/danh-muc')->with('success','success');
    }

    public function CapNhatDanhMuc($id, DanhMucRequest $request) {
        $data = $request->all();
        $data = $request->except('_token');
        $data['ten_danh_muc_slug'] = Str::slug($data['ten_danh_muc']);
        DanhMucModel::where('id', $id)->update(
            $data 
        );        
        return redirect('admin/danhmuc')->with('success','success');
    }
}
