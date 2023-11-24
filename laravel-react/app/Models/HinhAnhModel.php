<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\SanphamModel;


class HinhAnhModel extends Model
{
    use HasFactory;

    protected $table = 'Hinh_Anh';
    protected $fillable = [
        "hinh_anh",
        "ma_san_pham",
    ];

    public function SanPhamModel()
    {
        return $this->hasMany(SanPhamModel::class);
    }
}
