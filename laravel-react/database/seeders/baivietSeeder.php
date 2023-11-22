<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class baivietSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        \App\Models\BaivietModel::create([
            'ten_bai_viet' => 'Test Tiêu Đề 2',
            'ten_bai_viet_slug' => 'Test Tiêu Đề 2',
            'mo_ta_ngan' => 'Test Tiêu Đề 2',
            'ma_khach_hang' => '2',
            'noi_dung' => 'Test Tiêu Đề',
            'hinh_anh' => 'no image',
            'rating' => '1',
            'hien_thi' => '1',
            'created_at' => '1/10/2023',
        ],
      
    );
    }
}
