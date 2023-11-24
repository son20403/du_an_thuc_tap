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
        Schema::create('San_Pham', function (Blueprint $table) {
            $table->id();
            $table->string('ten_san_pham');
            $table->string('ten_san_pham_slug');
            $table->integer('gia_san_pham');
            $table->integer('giam_gia_san_pham')->nullable();
            $table->text('mo_ta')->nullable();
            $table->integer('so_luong');
            $table->integer('ma_the_loai');
            $table->integer('luot_xem')->nullable();
            $table->boolean('dat_biet')->default(false);
            $table->boolean('trang_thai')->default(true);
            $table->boolean('is_delete')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('San_Pham');
    }
};
