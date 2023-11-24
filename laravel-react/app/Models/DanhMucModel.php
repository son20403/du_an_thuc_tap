<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\TheLoaiModel;


class DanhMucModel extends Model
{
    use HasFactory;

    protected $table = 'Danh_Muc';
    protected $fillable = [
        "ten_danh_muc",
        "ten_danh_muc_slug",
        "is_delete",
    ];

    public function TheLoaiModel()
    {
        return $this->hasMany(TheLoaiModel::class, 'ma_danh_muc', 'id');
    }
}
