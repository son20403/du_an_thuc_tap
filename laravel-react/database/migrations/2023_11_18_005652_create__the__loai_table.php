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
        Schema::create('The_Loai', function (Blueprint $table) {
            $table->id();
            $table->string('ten_the_loai');
            $table->string('ten_the_loai_slug');
            $table->bigInteger('ma_danh_muc');
            $table->boolean('is_delete')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('The_Loai');
    }
};
