<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Yoeunes\Toastr\Toastr;
use App\Models\BaivietModel;
use App\Models\KhachHangModel;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Intervention\Image\ImageManagerStatic as Image;

class QLbaiVietController extends Controller
{
    public function baiviet()
    {
        $data_baiviet = BaivietModel::orderBy('created_at','desc')->paginate(5);

        foreach ($data_baiviet as $baiviet) {
            $user = KhachHangModel::find($baiviet->ma_khach_hang);
            $baiviet->ma_khach_hang = $user->ho_va_ten;
            
        }

        return view('admin.page.BaiViet.index', compact('data_baiviet'));
        
    }
    public function taobaiviet(Request $request)
    {

        $khach_hang = Auth::guard('khach_hang')->user();
        $data_form = $request->all();
        $data_form['ten_bai_viet_slug'] = Str::slug($data_form['ten_bai_viet']);
        $data_form['ma_khach_hang']  = $khach_hang->id;
        $data_form['hien_thi']  = 1;
        $get_image = $request->file('hinh_anh');
        $get_name_image = $get_image->getClientOriginalName();
        $images = Image::make($get_image->getRealPath());
       
        $images->save(public_path('img/' . $get_name_image));

        $data_form['hinh_anh']  = $get_name_image;
        BaivietModel::create($data_form);
        // toastr()->success('Tạo bài viết Thành Công');
        return redirect('admin/baiviet')->with('status','Tạo bài viết Thành Công');
        
        
    }
    public function xoa_baiviet($id)
	{
		$xoa_baiviet = BaivietModel::find($id);
		if ($xoa_baiviet == null)
			return '<script type ="text/JavaScript">alert("Lỗi!");</script>';
		$xoa_baiviet->delete();
        toastr()->success('Xoá bài viết Thành Công');
        return redirect('admin/baiviet');
        
	}

    public function capnhat_baiviet(Request $request, $id)
    {
        $capnhat = BaivietModel::find($id);
        
        
        $data_capnhat= $request->all();
        $data_capnhat['ten_bai_viet_slug'] = Str::slug($data_capnhat['ten_bai_viet']);

        $capnhat->ten_bai_viet=$data_capnhat['ten_bai_viet'];
        $capnhat->ten_bai_viet_slug=$data_capnhat['ten_bai_viet_slug'];
        $capnhat->mo_ta_ngan=$data_capnhat['mo_ta_ngan'];
        $capnhat->noi_dung=$data_capnhat['noi_dung'];
        $capnhat->loai_tin=$data_capnhat['loai_tin'];

        $get_image = $request->file('hinh_anh');
        $get_name_image = $get_image->getClientOriginalName();
        $images = Image::make($get_image->getRealPath());
        $images->save(public_path('img/' . $get_name_image));

        $capnhat->hinh_anh=$get_name_image;

        $capnhat->save();

        toastr()->success('cập nhật bài viết Thành Công');
        
        return redirect('admin/baiviet');
		
    }
    public function doitrangthai($id)
	{
		
		$baiviet = BaivietModel::where('id',$id)->first();
        if($baiviet){
            if($baiviet->hien_thi==1){
                $baiviet->hien_thi==0;
            }else{
                $baiviet->hien_thi==1;
            };
        };
        toastr()->success('cập nhật bài viết Thành Công');
        
        return redirect('admin/baiviet');
		// $hienthi = $baiviet->hien_thi;
		// if ($hienthi == 1) {
		// 	$hienthi = 0;
		// } else {
		// 	$hienthi = 1;
		// }

		// $$baiviet->hien_thi = $hienthi;
		// $baiviet->save();
		
	}
    public function restore()
	{
		$khoiphuc=BaivietModel::onlyTrashed()->get();
        foreach ($khoiphuc as $baiviet) {
            $id=$baiviet->id;
            // BaivietModel::withTrashed()->find($id)->restore();
            BaivietModel::onlyTrashed()->where('id', $id)->restore();
        }
        toastr()->success('cập nhật bài viết Thành Công');
        return redirect('admin/baiviet');
	}

public function showbaiviet($id)
    {
        $data_baiviet = BaivietModel::where('loai_tin','=',$id)
        ->orderBy('created_at','desc')->paginate(5);

        foreach ($data_baiviet as $baiviet) {
            $user = KhachHangModel::find($baiviet->ma_khach_hang);
            $baiviet->ma_khach_hang = $user->ho_va_ten;
            
        }

        return view('Trang-Khach-Hang.page.TinTuc', compact('data_baiviet'));
        //    var_dump($data_baiviet);
    }
}
