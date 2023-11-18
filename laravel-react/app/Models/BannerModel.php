<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class BannerModel extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $table = 'banner';
    protected $primarykey = 'id';
    protected $fillable = [
        "ten_anh_banner",
        "link_anh_banner",
        "created_at",
        "updated_at",
    ];
}