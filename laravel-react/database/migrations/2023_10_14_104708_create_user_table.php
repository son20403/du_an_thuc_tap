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
        Schema::create('user', function (Blueprint $table) {
            $table->id();
            $table->string('ten_khach_hang');
            $table->string('mat_khau');
            $table->string('ho_ten');
            $table->string('kich_hoat');
            $table->string('vai_tro');
            $table->string('email');
            $table->string('hinh_anh');
            $table->unsignedBigInteger('loai_tai_khoan');
            $table->integer('so_dien_thoai');
            $table->string('dia_chi');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user');
    }
};