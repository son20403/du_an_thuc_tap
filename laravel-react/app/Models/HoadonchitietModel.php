<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class HoadonchitietModel extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $table = 'hoa_don_chi_tiet';
    protected $primarykey = 'id';
    protected $fillable = [
        "ma_hoa_don",
        "ma_san_pham",
        "so_luong",
        "created_at",
        "updated_at",
    ];
}