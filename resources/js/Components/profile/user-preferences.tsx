import { Key, Bell, Moon, Globe } from "lucide-react";
import { Card } from "@/Components/ui/card";
import { Button } from "@/Components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";
import { Input } from "@/Components/ui/input";
import InputLabel from "@/Components/InputLabel";
import { Switch } from "@/Components/ui/switch";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function UserPreferences() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // supaya tidak mismatch SSR
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    const options = [
        { label: "Terang (Light)", value: "light" },
        { label: "Gelap (Dark)", value: "dark" },
        { label: "Sistem", value: "system" },
    ];

    return (
        <Card className="border-none bg-white dark:bg-gray-900 p-6 shadow-sm">
            <h2 className="text-xl font-bold mb-6">Preferensi Pengguna</h2>

            <div className="space-y-4">
                {/* Change Password */}
                <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                    <div className="flex items-center gap-3">
                        <Key className="h-5 w-5" />
                        <div>
                            <p className="font-medium">Ubah Password</p>
                            <p className="text-xs">Update password akun Anda</p>
                        </div>
                    </div>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="outline" size="sm">
                                Ubah
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Ubah Password</DialogTitle>
                                <DialogDescription>
                                    Masukan password lama dan password baru anda
                                    disini.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="grid gap-2">
                                    <InputLabel
                                        htmlFor="current_password"
                                        value="Password Lama"
                                    />
                                    <Input
                                        id="current_password"
                                        type="password"
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <InputLabel
                                        htmlFor="new_password"
                                        value="Password Baru"
                                    />
                                    <Input id="new_password" type="password" />
                                </div>
                                <div className="grid gap-2">
                                    <InputLabel
                                        htmlFor="confirm_password"
                                        value="Konfirmasi Password"
                                    />
                                    <Input
                                        id="confirm_password"
                                        type="password"
                                    />
                                </div>
                            </div>
                            <DialogFooter>
                                <Button type="submit">Simpan Perubahan</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>

                {/* Language Preference */}
                <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                    <div className="flex items-center gap-3">
                        <Globe className="h-5 w-5" />
                        <div>
                            <p className="font-medium">Bahasa</p>
                            <p className="text-xs mt-1">
                                Bahasa Saat Ini:{" "}
                                <span className="font-medium">
                                    Bahasa Indonesia
                                </span>
                            </p>
                        </div>
                    </div>

                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="outline" size="sm">
                                Pilih
                            </Button>
                        </DialogTrigger>

                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Pilih Bahasa</DialogTitle>
                                <DialogDescription>
                                    Tentukan bahasa yang ingin digunakan di
                                    aplikasi.
                                </DialogDescription>
                            </DialogHeader>

                            <div className="grid gap-3 py-4">
                                <Button
                                    variant="outline"
                                    className="justify-start"
                                >
                                    🇮🇩 Bahasa Indonesia
                                </Button>
                                <Button
                                    variant="outline"
                                    className="justify-start"
                                >
                                    🇺🇸 English
                                </Button>
                            </div>

                            <DialogFooter>
                                <Button>Simpan</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>

                {/* Notifications */}
                <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                    <div className="flex items-center gap-3">
                        <Bell className="h-5 w-5" />
                        <div>
                            <p className="font-medium">Notifikasi</p>
                            <p className="text-xs mt-1">
                                Status:{" "}
                                <span className="font-medium text-green-600">
                                    Aktif
                                </span>
                            </p>
                        </div>
                    </div>

                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="outline" size="sm">
                                Atur
                            </Button>
                        </DialogTrigger>

                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Pengaturan Notifikasi</DialogTitle>
                                <DialogDescription>
                                    Nyalakan atau matikan notifikasi yang ingin
                                    Anda terima.
                                </DialogDescription>
                            </DialogHeader>

                            <div className="grid gap-4 py-4">
                                <div className="flex items-center justify-between">
                                    <span>Email</span>
                                    <Switch defaultChecked />
                                </div>

                                <div className="flex items-center justify-between">
                                    <span>Push Notification</span>
                                    <Switch />
                                </div>

                                <div className="flex items-center justify-between">
                                    <span>Reminder</span>
                                    <Switch />
                                </div>
                            </div>

                            <DialogFooter>
                                <Button>Simpan</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>

                {/* Dark Mode */}
                <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                    <div className="flex items-center gap-3">
                        <Moon className="h-5 w-5" />
                        <div>
                            <p className="font-medium">Tema</p>
                            <p className="text-xs mt-1">
                                Mode Saat Ini:{" "}
                                <span className="font-medium">{theme}</span>
                            </p>
                        </div>
                    </div>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="outline" size="sm">
                                Ubah
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Pilih Tema</DialogTitle>
                                <DialogDescription>
                                    Sesuaikan tampilan aplikasi dengan
                                    preferensi anda.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                {options.map((opt) => (
                                    <div
                                        key={opt.value}
                                        onClick={() => setTheme(opt.value)}
                                        className="flex items-center justify-between p-3 border rounded-md cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800"
                                    >
                                        <span className="text-sm font-medium">
                                            {opt.label}
                                        </span>

                                        <div
                                            className={`h-4 w-4 rounded-full border ${
                                                theme === opt.value
                                                    ? "bg-gray-900 dark:bg-white"
                                                    : ""
                                            }`}
                                        />
                                    </div>
                                ))}
                            </div>
                            <DialogFooter>
                                <Button type="submit">Simpan</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>

            <div className="mt-6 rounded-lg border bg-blue-50 border-blue-200 dark:bg-blue-950 dark:border-blue-800 p-4">
                <p className="text-sm text-blue-900 dark:text-blue-200">
                    Semua perubahan preferensi akan disimpan secara otomatis dan
                    akan diterapkan pada sesi berikutnya.
                </p>
            </div>
        </Card>
    );
}
