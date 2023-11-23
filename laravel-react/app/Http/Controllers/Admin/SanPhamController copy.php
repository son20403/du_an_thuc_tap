<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\SanPhamRequest;
use App\Models\HinhAnhModel;
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

    public function HienThiSanPham()
    {
        $data_sanpham = SanPhamModel::all();
        $data_theloai = TheLoaiModel::all();
        $data_danhmuc = DanhMucModel::all();
        $data_hinhanh = HinhAnhModel::all();

        $compact = compact('data_danhmuc', 'data_theloai', 'data_sanpham', 'data_hinhanh');

        if ($data_sanpham->isEmpty()) {
            return response()->json($compact);
        } else {
            return response()->json($compact);
        }
    }

    public function ThemSanPham(SanPhamRequest $request)
    {
        $data = $request->all();
        $data['ten_san_pham_slug'] = Str::slug($data['ten_san_pham']);

        // $sanpham = SanPhamModel::create($data);
        // $t_ = $sanpham->id;

        // Process uploaded images
        $get_images = $request->file('hinh_anh');

        // if ($get_images) {
        //     foreach ($get_images as $image) {
                $get_name_image = $get_images->getClientOriginalName();
                $get_images->move("img/", $get_name_image);
                $x = new HinhanhModel;
                $x->hinh_anh = $get_name_image;
                // $x->ma_san_pham = $t_;
                $x->save();
        //     }
        // }

        return response()->json([
            'status' => true,
            'message' => 'Thêm thành công',
            'get_images' => $get_images
        ]);
    }

    public function XoaSanPham(Request $request)
    {

        SanPhamModel::where('id', $request->id)->update(
            [
                'is_delete' => 1
            ]
        );
        return response()->json([
            'status' => true,
            'message' => 'Đã xóa thành công !'
        ]);
    }

    public function CapNhatSanPham($id, SanPhamRequest $request)
    {
        $data = $request->all();
        $data['ten_the_loai_slug'] = Str::slug($data['ten_the_loai']);

        $TheLoai = SanPhamModel::where('id', $request->id)->first();
        $TheLoai->update($data);

        return response()->json([
            'status' => true,
            'message' => 'Cap nhat thành công'
        ]);
    }

    public function toggleStatus($id)
    {
        $trangthai_sanpham = SanPhamModel::find($id);
        $trangthai = $trangthai_sanpham->trang_thai;
        if ($trangthai == 1) {
            $trangthai = 0;
        } else {
            $trangthai = 1;
        }
        $trangthai_sanpham->update(
            [
                'trang_thai' => $trangthai
            ]
        );
        $compact = compact('trangthai_sanpham');
        return response()->json($compact);
    }
}
