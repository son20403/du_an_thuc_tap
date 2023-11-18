<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class HoadonModel extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $table = 'hoa_don';
    protected $primarykey = 'id';
    protected $fillable = [
        "ma_khach_hang",
        "dia_chi",
        "so_dien_thoai",
        "email",
        "tong_tien",
        "trang_thai",
        "ghi_chu",
        "created_at",
        "updated_at",
    ];
}