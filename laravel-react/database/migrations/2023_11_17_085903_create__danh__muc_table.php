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
        Schema::create('Danh_Muc', function (Blueprint $table) {
            $table->id();
            $table->string('ten_danh_muc');
            $table->string('ten_danh_muc_slug');
            $table->boolean('is_delete')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('Danh_Muc');
    }
};
