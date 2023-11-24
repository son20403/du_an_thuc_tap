<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\HinhAnhModel;
use App\Models\TheLoaiModel;

class SanPhamModel extends Model
{
    use HasFactory;


    protected $table = 'San_Pham';

    protected $fillable = [
        "ten_san_pham",
        "ten_san_pham_slug",
        "gia_san_pham",
        "giam_gia_san_pham",
        "ma_the_loai",
        "so_luong",
        "luot_xem",
        "dat_biet", 
        "mo_ta",
        "trang_thai",
        "is_delete",
    ];

    

    public function HinhAnhModel()
    {
        return $this->hasMany(HinhAnhModel::class, 'ma_san_pham', 'id');
    }

    public function TheLoaiModel()
    {
        return $this->belongsTo(TheLoaiModel::class, 'ma_the_loai', 'id');
    }

}
