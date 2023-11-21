<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\SanphamModel;
use App\Models\DanhMucModel;

class TheLoaiModel extends Model
{
    use HasFactory;

    protected $table = 'The_Loai';
    protected $fillable = [
        "ten_the_loai",
        "ten_the_loai_slug",
        "ma_danh_muc",
        "is_delete",
    ];

    public function SanphamModel()
    {
        return $this->hasMany(SanphamModel::class, 'ma_the_loai', 'id');
    }

    public function DanhMucModel()
    {
        return $this->belongsTo(DanhMucModel::class, 'ma_danh_muc', 'id');
    }
}
