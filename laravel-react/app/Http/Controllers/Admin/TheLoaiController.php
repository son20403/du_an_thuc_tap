<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\TheLoaiRequest;
use App\Models\DanhMucModel;
use App\Models\TheLoaiModel;
use Illuminate\Http\Request;

class TheLoaiController extends Controller
{
    //
    public function index()
    {
        $data_theloai = TheLoaiModel::orderBy('id', 'desc')->paginate(10);
        $data_danhmuc = DanhMucModel::all();

        if ($data_theloai->isEmpty()) {
			return view('admin.page.TheLoai.QuanLyTheLoai', compact('data_theloai', 'data_danhmuc'));
        } else {
            return view('admin.page.TheLoai.QuanLyTheLoai', compact('data_theloai', 'data_danhmuc'));
        }
    }

    public function ThemTheLoai(TheLoaiRequest $request) {
        $data = $request->all();
        $data['ten_the_loai_slug'] = Str::slug($data['ten_the_loai']);

        // dd($data_danhmuc);
        TheLoaiModel::create($data);
        return redirect('/admin/the-loai')->with('success','success');
        // return response()->json(['success' => true, 'message' => 'Dữ liệu hợp lệ.']);
    }

    public function XoaTheLoai($id) {
        TheLoaiModel::where('id', $id)->update(
            [
                'is_delete' => 0
            ]
        );     
        return redirect('/admin/the-loai')->with('success','success');
    }

    public function CapNhatTheLoai($id, TheLoaiRequest $request) {
        $data = $request->all();
        $data = $request->except('_token');
        $data['ten_the_loai_slug'] = Str::slug($data['ten_the_loai']);
        TheLoaiModel::where('id', $id)->update(
            $data 
        );        
        return redirect('admin/the-loai')->with('success','success');
    }
}
