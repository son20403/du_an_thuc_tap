<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('hoa_don', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('ma_khach_hang');
            $table->string('dia_chi');
            $table->integer('so_dien_thoai');
            $table->string('email');
            $table->integer('tong_tien');
            $table->string('trang_thai');
            $table->string('ghi_chu');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('hoa_don');
    }
};