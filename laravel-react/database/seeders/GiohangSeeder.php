<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\GioHangModel;

class GiohangSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i = 1; $i <= 10; $i++) {  
                    $gio_hang_seeder = GioHangModel::create(
                    
                        [
                            "ma_san_pham"=> random_int(1, 100) ,
                            "ma_khach_hang"=> random_int(1, 100) ,
                            "so_luong"=> random_int(1, 100) ,
                            "tong_tien"=> random_int(1000, 1000000000) ,
                        ],
                    
                );
        }
    }
}
