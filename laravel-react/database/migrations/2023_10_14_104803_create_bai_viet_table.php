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
        Schema::create('bai_viet', function (Blueprint $table) {
            $table->id();
            $table->string('ten_bai_viet');
            $table->string('ten_bai_viet_slug')->nullable();
            $table->string('mo_ta_ngan');
            $table->unsignedBigInteger('ma_khach_hang');
            $table->text('noi_dung');
            $table->string('hinh_anh');
            $table->integer('rating')->default(0);
            $table->integer('hien_thi')->default(0);
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bai_viet');
    }
};