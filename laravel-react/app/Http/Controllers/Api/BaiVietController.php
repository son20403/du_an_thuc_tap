<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\BaivietModel;
use App\Models\KhachHangModel;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Intervention\Image\ImageManagerStatic as Image;
class BaiVietController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $data_tintuc = BaivietModel::orderBy('created_at', 'desc')->paginate(9);

        foreach ($data_tintuc as $baiviet) {
            $user = KhachHangModel::find($baiviet->ma_khach_hang);
            $baiviet['ho_va_ten'] = $user->ho_va_ten;
        }
        return response()->json(array('status'=> 'success','data_tintuc'=> $data_tintuc),200);

        // return BaivietModel::all();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        //
        $request->validate([
            'ten_bai_viet' => 'required',
            'mo_ta_ngan' => 'required',
            'noi_dung' => 'required'
        ]);
        $baiviet = BaivietModel::create($request->all());
        return response()->json(['message'=> 'tạo bài viết ', 
        'baiviet' => $baiviet]);

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $request->validate([
            'ten_bai_viet' => 'required',
            'mo_ta_ngan' => 'required',
            'noi_dung' => 'required'
        ]);
        $baiviet = BaivietModel::create($request->all());
        return response()->json(['message'=> 'tạo bài viết ', 
        'baiviet' => $baiviet]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        $baiviet = BaivietModel::find($id);
        $user = KhachHangModel::find($baiviet->ma_khach_hang);
        $baiviet['ho_va_ten'] = $user->ho_va_ten;
        return response()->json(array('status'=> 'success','baiviet'=> $baiviet),200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id,BaivietModel $capnhat )
    {
        $capnhat = BaivietModel::find($id);
        
        
        // $data_capnhat= $request->all();

        // $data_capnhat['ten_bai_viet_slug'] = Str::slug($data_capnhat['ten_bai_viet']);

        // $capnhat->ten_bai_viet=$data_capnhat['ten_bai_viet'];
        // $capnhat->ten_bai_viet_slug=$data_capnhat['ten_bai_viet_slug'];
        // $capnhat->mo_ta_ngan=$data_capnhat['mo_ta_ngan'];
        // $capnhat->noi_dung=$data_capnhat['noi_dung'];
        // // $capnhat->loai_tin=$data_capnhat['loai_tin'];

        // // $get_image = $request->file('hinh_anh');
        // // $get_name_image = $get_image->getClientOriginalName();
        // // $images = Image::make($get_image->getRealPath());
        // // $images->save(public_path('img/' . $get_name_image));

        // // $capnhat->hinh_anh=$get_name_image;
        // $capnhat= $request->all();

        $capnhat->save( $request->all());
        return response()->json(['message'=> 'tạo bài viết ', 
        'baiviet' => $capnhat]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $xoa_baiviet = BaivietModel::find($id);
		if ($xoa_baiviet == null){
            return '<script type ="text/JavaScript">alert("Lỗi!");</script>';
        }else{
            $xoa_baiviet->delete();
            return response()->json(['message'=> 'Xoá bài viết ' ]);
        }
			
		

    }

    public function TinTuc(Request $request)
    {
        $data_tintuc = BaivietModel::orderBy('created_at', 'desc')->paginate(9);

        foreach ($data_tintuc as $baiviet) {
            $user = KhachHangModel::find($baiviet->ma_khach_hang);
            $baiviet->ma_khach_hang = $user->ho_va_ten;
        }
        return response()->json(array('status'=> 'success','data_tintuc'=> $data_tintuc),200);

        // return view('Trang-Khach-Hang.page.TinTuc', compact('data_tintuc'));
        //    var_dump($data_baiviet);
    }
    public function TinTuc_theoloai($id)
    {
        $data_tintuc = BaivietModel::where('loai_tin', $id)
            ->orderBy('created_at', 'desc')
            ->paginate(9);

        foreach ($data_tintuc as $baiviet) {
            $user = KhachHangModel::find($baiviet->ma_khach_hang);
            $baiviet->ma_khach_hang = $user->ho_va_ten;
        }

        return response()->json(array('status'=> 'success','data_tintuc'=> $data_tintuc),200);
        //    var_dump($data_baiviet);

    }
    public function TinTucChiTiet($id)
    {
        $baiviet = BaivietModel::find($id);
        $user = KhachHangModel::find($baiviet->ma_khach_hang);
        $baiviet->ma_khach_hang = $user->ho_va_ten;

        $data_lastpost = BaivietModel::orderBy('created_at', 'desc')->limit(5)->get();

        foreach ($data_lastpost as $lastpost) {
            $user = KhachHangModel::find($lastpost->ma_khach_hang);
            $lastpost->ma_khach_hang = $user->ho_va_ten;
        }



        return response()->json(array('status'=> 'success','baiviet'=> $baiviet,'data_lastpost'=>$data_lastpost),200);
        // return view('Trang-Khach-Hang.page.TinTucChiTiet', compact('baiviet','data_lastpost'));
        //    var_dump($data_baiviet);
        //  return view('Trang-Khach-Hang.page.TinTucChiTiet');
    }
}
