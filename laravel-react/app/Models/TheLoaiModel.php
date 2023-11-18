<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
}
