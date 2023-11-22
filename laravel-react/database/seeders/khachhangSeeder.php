<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class khachhangSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\KhachHangModel::create([
            "ho_va_ten"=> "hungpp",
            "email"=> "bhoome22@gmail.com",
            "password"=> "123456",
            "so_dien_thoai"=> "0389378927",
            "dia_chi"=> "abc ở xyz",
            "ma_bam_email"=> "",
            "ngay_sinh"=> "2000/07/07",
            "gioi_tinh"=> "1",
            "loai_tai_khoan"=> "1",
            "ma_bam_quen_mat_khau"=> "",
        ]);
    }
}
