<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class GiohangModel extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $table = 'gio_hang';
    protected $primarykey = 'id';
    protected $fillable = [
        "ma_san_pham",
        "ma_khach_hang",
        "so_luong",
        "created_at",
        "updated_at",
    ];
}