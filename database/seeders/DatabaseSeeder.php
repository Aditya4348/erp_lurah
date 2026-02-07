<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
     
        // Membuat 1 User Admin/Pegawai Kelurahan
        User::create([
            // 1. Auth Standard
            'name' => 'Anshan Haso',
            'email' => 'admin@lurah.id',
            'password' => Hash::make('password'), // Password default
            'email_verified_at' => now(),
            'avatar' => null, // Bisa diisi path url jika ada

            // 2. Data Pegawai
            'nip' => '198507232010011005',
            'jabatan' => 'Kepala Seksi Pemberdayaan Masyarakat',
            'phone' => '081299887766',
            'address' => 'Jl. Melati No. 45, Kelurahan Maju Jaya',
            'is_active' => true,
            
            // 3. Tanda Tangan Digital (Sesuai component DigitalSignature)
            'signature_path' => null, // Nanti diupload user
            'certificate_status' => 'verified',
            'certificate_expires_at' => '2026-12-31',

            // 4. Preferences
            'theme' => 'light',
            'language' => 'id',
            'notification_settings' => [
                'email' => true,
                'push' => false,
                'reminder' => true
            ],
        ]);
    
    }
}
