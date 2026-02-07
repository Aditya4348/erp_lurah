import { Mail, Phone, MapPin, Shield } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/Components/ui/avatar";
import { Badge } from "@/Components/ui/badge";
import { Card } from "@/Components/ui/card";
import UserPreferences from "./user-preferences";

export default function ProfileSidebar() {
    return (
        <div className="space-y-6">
            {/* Profile Card */}
            <Card className="border-none bg-white dark:bg-gray-900 p-6 shadow-sm">
                <div className="flex flex-col items-center text-center">
                    <Avatar className="h-24 w-24 mb-4">
                        <AvatarImage
                            src="/images/pegawai.jpg"
                            alt="Ahmad Fauzi"
                        />
                        <AvatarFallback>AF</AvatarFallback>
                    </Avatar>

                    <div className="flex items-center gap-2">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                            Ahmad Fauzi
                        </h2>
                        <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200">
                            Operator
                        </Badge>
                    </div>

                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        Kasi Pemerintahan
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                        NIP: 1987654321
                    </p>
                </div>
            </Card>

            {/* Stats Card */}
            <Card className="border-none bg-white dark:bg-gray-900 shadow-sm">
                <div className="grid grid-cols-3 divide-x divide-gray-200 dark:divide-gray-700">
                    <div className="p-4 text-center">
                        <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                            56
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">
                            Surat
                        </div>
                    </div>
                    <div className="p-4 text-center">
                        <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                            12
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">
                            Pengaduan
                        </div>
                    </div>
                    <div className="p-4 text-center">
                        <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                            8
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">
                            Bansos
                        </div>
                    </div>
                </div>
            </Card>

            {/* Contact Information */}
            <Card className="border-none bg-white dark:bg-gray-900 p-6 shadow-sm space-y-4">
                <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-gray-400 dark:text-gray-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        ahmad.fauzi@kelurahan.go.id
                    </p>
                </div>

                <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-gray-400 dark:text-gray-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        0812-3456-7890
                    </p>
                </div>

                <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-gray-400 dark:text-gray-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Kelurahan Sukamaju
                    </p>
                </div>
            </Card>

            {/* Account Status */}
            <Card className="border-none bg-white dark:bg-gray-900 p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    Status Akun
                </h3>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
                    <div
                        className="bg-green-600 h-2 rounded-full"
                        style={{ width: "100%" }}
                    />
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                    Aktif • Login terakhir 2 jam lalu
                </p>
            </Card>

            {/* Permissions */}
            <Card className="border-none bg-white dark:bg-gray-900 p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    Hak Akses
                </h3>
                <div className="flex flex-wrap gap-2">
                    {[
                        "Kelola Penduduk",
                        "Cetak Surat",
                        "Input Pengaduan",
                        "Lihat Bantuan",
                    ].map((item) => (
                        <Badge
                            key={item}
                            variant="outline"
                            className="bg-gray-50 text-gray-700 border-gray-200 
                       dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700 
                       flex items-center gap-1"
                        >
                            <Shield className="h-3 w-3" />
                            {item}
                        </Badge>
                    ))}
                </div>
            </Card>

            <UserPreferences />
        </div>
    );
}
