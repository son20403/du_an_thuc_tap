<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\DanhmucModel;
use Illuminate\Database\Eloquent\SoftDeletes;
class LoaisanphamModel extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $table = 'loai_san_pham';
    protected $fillable = [
        "ten_loai",
        "ten_loai_slug",
        "ma_danh_muc",
        "created_at",
        "updated_at",
    ];

    public function SanphamModel()
    {
        return $this->hasMany(SanphamModel::class, 'ma_loai', 'id');
    }

    public function DanhmucModel()
    {
        return $this->belongsTo(DanhmucModel::class, 'ma_danh_muc', 'id');
    }
}