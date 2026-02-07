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
        Schema::create('users', function (Blueprint $table) {
            // 1. Auth Standard
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('avatar')->nullable(); // Foto Profil

            // 2. Data Pegawai (ERP Kelurahan)
            $table->string('nip', 20)->unique()->nullable(); // NIP Pegawai
            $table->string('jabatan')->nullable(); // Contoh: Kasi Pemerintahan
            $table->string('phone', 20)->nullable();
            $table->text('address')->nullable();
            $table->boolean('is_active')->default(true); // Status Akun
            $table->timestamp('last_login_at')->nullable(); // Login Terakhir

            // 3. Tanda Tangan Digital
            $table->string('signature_path')->nullable(); // Path gambar TTE
            $table->string('certificate_status')->default('unverified'); // verified/unverified
            $table->date('certificate_expires_at')->nullable();

            // 4. Preferences
            $table->string('theme')->default('light');
            $table->string('language')->default('id');
            $table->json('notification_settings')->nullable(); // Simpan setting notifikasi disini

            $table->rememberToken();
            $table->timestamps();
        });

        Schema::create('password_reset_tokens', function (Blueprint $table) {
            $table->string('email')->primary();
            $table->string('token');
            $table->timestamp('created_at')->nullable();
        });

        Schema::create('sessions', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->foreignId('user_id')->nullable()->index();
            $table->string('ip_address', 45)->nullable();
            $table->text('user_agent')->nullable();
            $table->longText('payload');
            $table->integer('last_activity')->index();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
        Schema::dropIfExists('password_reset_tokens');
        Schema::dropIfExists('sessions');
    }
};
