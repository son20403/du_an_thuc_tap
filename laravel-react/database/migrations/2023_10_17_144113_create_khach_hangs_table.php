<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('khach_hangs', function (Blueprint $table) {
            $table->id();
            $table->string('ho_va_ten');
            $table->string('email');
            $table->string('password');
            $table->string('so_dien_thoai');
            $table->string('dia_chi');
            $table->string('ma_bam_email')->nullable();
            $table->string('ngay_sinh');
            $table->integer('gioi_tinh');
            $table->unsignedBigInteger('loai_tai_khoan')->default(0);
            $table->string('ma_bam_quen_mat_khau')->nullable(); // Cho phép giá trị null
            $table->softDeletes();
            $table->timestamps();
        });
    }


    
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('khach_hangs');
    }
};
