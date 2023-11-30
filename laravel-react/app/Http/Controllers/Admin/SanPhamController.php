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
use Session;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
class SanPhamController extends Controller
{

    public function sanpham()
	{
		$data_Loaisanpham = TheLoaiModel::all();
		$data_sanpham = SanPhamModel::orderBy('id', 'desc')->get();
		$data_hinhanh = HinhAnhModel::all();
		$SanPhamModel = SanPhamModel::with('HinhAnhModel')->get();
		$data_danhmuc = DanhMucModel::all();

    $HinhAnh = [];
		foreach ($data_sanpham as $sanpham) {
			// $sanpham->mo_ta = Str::limit($sanpham->mo_ta, $limit = 30, $end = '...');

			$hinhAnh = HinhAnhModel::where('ma_san_pham', $sanpham->id)->first();
			$HinhAnh[] = $hinhAnh;

			// Kiểm tra điều kiện is_delete trong $data_danhmuc
			$ten_danh_muc = '';
			foreach ($data_danhmuc as $danhmuc) {
				if ($danhmuc->id == $sanpham->TheLoaiModel->DanhMucModel->id && $danhmuc->is_delete == 0) {
					$ten_danh_muc = $danhmuc->ten_danh_muc;
					break; // Kết thúc vòng lặp khi tìm thấy danh mục không bị xóa
				}
			}
			$sanpham->ten_danh_muc = $ten_danh_muc;
		}

		if ($data_sanpham->isEmpty()) {
			return view(
				'admin.page.SanPham.QuanLySanPham',
				compact('data_sanpham', 'data_Loaisanpham', 'HinhAnh', 'data_hinhanh', 'data_danhmuc')
			);
		} else {
			if (!empty($HinhAnh)) {
				return view(
					'admin.page.SanPham.QuanLySanPham',
					compact('data_sanpham', 'data_Loaisanpham', 'HinhAnh', 'data_hinhanh', 'data_danhmuc')
				);
			} else {
				return view(
					'admin.page.SanPham.QuanLySanPham',
					compact('data_sanpham', 'data_Loaisanpham', 'HinhAnh', 'data_hinhanh', 'data_danhmuc')
				);
			}
		}

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

	public function them_sanpham(Request $request)
	{
		$data = $request->all();
		$data['ten_san_pham_slug'] = Str::slug($data['ten_san_pham']);

			$sanpham = SanPhamModel::create($data);

			$t_ = $sanpham->id;

			$get_image = $request->file('hinh_anh');

			if ($get_image) {
				foreach ($get_image as $image) {
					// $get_name_image = $image->getClientOriginalName();
					// $image->move("img/", $get_name_image);
                    // $x->hinh_anh = $get_name_image;
                    $uploadedImage = Cloudinary::upload($image->getRealPath(), [
                        'folder' => 'du_an_thuc_tap'
                    ])->getSecurePath();
					$x = new HinhAnhModel;
					$x->hinh_anh = $uploadedImage;
					$x->ma_san_pham = $t_;

					$x->save();
				}
			}

			// Nếu không có lỗi, chuyển hướng với thông báo thành công
      Session::flash('success', 'Sản phẩm đã được thêm thành công.!');
			return redirect('admin/san-pham');


	}

	public function xoa_sanpham()
	{
        $id = $_GET['idsp'];
        $xoa = SanPhamModel::find($id);
		$xoa->update(
			[
					'is_delete' => 1,
			]
	    );
        // Session::flash('success', 'Sản phẩm đã được xoá thành công.!');

		// return redirect('admin/san-pham');
	}

	public function cn_sanpham_($id, Request $request)
	{
		$sanpham = SanPhamModel::find($id);
		if ($sanpham == null) {
			return '<script type ="text/JavaScript">alert("loi roi, khong tim thay truong nay!");</script>';
		}

		$get_image = $request->file('hinh_anh');
		if ($get_image) {
			foreach ($get_image as $image) {
				// $get_name_image = $image->getClientOriginalName();
                // $image->move("img/", $get_name_image);
                $uploadedImage = Cloudinary::upload($image->getRealPath(), [
                    'folder' => 'du_an_thuc_tap'
                ])->getSecurePath();
				$x = new HinhAnhModel;
				// $x->hinh_anh = $get_name_image;
				$x->hinh_anh = $uploadedImage;
				$x->ma_san_pham = $id;

				$x->save();

			}
		}

		$sanpham->ten_san_pham = $request->ten_san_pham;
		$sanpham->ten_san_pham_slug = Str::slug($sanpham->ten_san_pham);
		$sanpham->ma_the_loai = $request->ma_the_loai;
		$sanpham->gia_san_pham = $request->gia_san_pham;
		$sanpham->giam_gia_san_pham = $request->giam_gia_san_pham;
		$sanpham->so_luong = $request->so_luong;
		$sanpham->luot_xem = $request->luot_xem;
		$sanpham->dat_biet = $request->dat_biet;
		$sanpham->mo_ta = $request->mo_ta;

		$sanpham->save();
    Session::flash('success', 'Sản phẩm đã được cập nhật thành công.!');

		return redirect('admin/san-pham');

	}

	public function toggleStatus()
	{
		$id = $_GET['idsta'];
		$trangthai_sanpham = SanPhamModel::find($id);
		$trangthai = $trangthai_sanpham->trang_thai;
		if ($trangthai == 1) {
			$trangthai = 0;
		} else {
			$trangthai = 1;
		}

		$trangthai_sanpham->trang_thai = $trangthai;
		$trangthai_sanpham->save();
		echo $trangthai;
	}

}
