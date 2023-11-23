<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\CapNhatTheLoaiRequest;
use App\Http\Requests\TheLoaiRequest;
use App\Models\DanhMucModel;
use App\Models\TheLoaiModel;
use Illuminate\Http\Request;
use Illuminate\Support\Str;


class TheLoaiController extends Controller
{
    //
    public function index()
    {
        return view('admin.page.TheLoai.QuanLyTheLoai');
    }

    public function HienThiTheLoai() {
        $data_theloai = TheLoaiModel::all();
        $data_danhmuc = DanhMucModel::all();
        $compact = compact('data_danhmuc', 'data_theloai');

        if ($data_theloai->isEmpty()) {
			return response()->json( $compact );
        } else {
            return response()->json( $compact );
        }
    }

    public function ThemTheLoai(TheLoaiRequest $request) {
        $data =  $request->all();
        $data['ten_the_loai_slug'] = Str::slug($data['ten_the_loai']);
        TheLoaiModel::create($data);
        return response()->json([
            'status'    =>  true,
            'message'   =>  'Thêm thành công'
        ]);
        
    }

    public function XoaTheLoai(Request $request) {
           
        TheLoaiModel::where('id', $request->id)->update(
            [
                'is_delete' => 1
            ]
        );     
        return response()->json([
            'status'    =>      true,
            'message'   =>      'Đã xóa thành công !'
        ]);
    }

    public function CapNhatTheLoai(CapNhatTheLoaiRequest $request) {
        $data = $request->all();
        $data['ten_the_loai_slug'] = Str::slug($data['ten_the_loai']);

        $TheLoai = TheLoaiModel::where('id', $request->id)->first();
        $TheLoai->update($data);

        return response()->json([
            'status'    =>  true,
            'message'   =>  'Cap nhat thành công'
        ]);       
    }
}
