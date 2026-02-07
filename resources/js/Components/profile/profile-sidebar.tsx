import { Mail, Phone, MapPin, Shield, Pencil, Save, X, Camera } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/Components/ui/avatar";
import { Badge } from "@/Components/ui/badge";
import { Card } from "@/Components/ui/card";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import UserPreferences from "./user-preferences";
import { usePage, useForm } from "@inertiajs/react";
import { formatDateTime } from "@/lib/formatDateTime";
import { PageProps } from "@/types";
import { useState } from "react";

export default function ProfileSidebar() {
    const { auth } = usePage<PageProps>().props;
    const user = auth.user;
    const [isEditing, setIsEditing] = useState(false);

    const { data, setData, patch, processing, errors, reset } = useForm({
        name: user.name || "",
        email: user.email || "",
        nip: user.nip || "",
        phone: user.phone || "",
        address: user.address || "",
    });

    if (!auth.user) {
        return null;
    }

    const handleSave = () => {
        patch(route("profile.update"), {
            preserveScroll: true,
            onSuccess: () => setIsEditing(false),
        });
    };

    const handleCancel = () => {
        reset();
        setIsEditing(false);
    };

    return (
        <div className="space-y-6">
            {/* Profile Card */}
            <Card className="border-none bg-white dark:bg-gray-900 p-6 shadow-sm relative">
                <div className="absolute top-4 right-4">
                    {isEditing ? (
                        <div className="flex gap-2">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={handleCancel}
                                disabled={processing}
                                className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50"
                            >
                                <X className="h-4 w-4" />
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={handleSave}
                                disabled={processing}
                                className="h-8 w-8 text-green-500 hover:text-green-600 hover:bg-green-50"
                            >
                                <Save className="h-4 w-4" />
                            </Button>
                        </div>
                    ) : (
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsEditing(true)}
                            className="h-8 w-8 text-gray-400 hover:text-gray-600"
                        >
                            <Pencil className="h-4 w-4" />
                        </Button>
                    )}
                </div>

                <div className="flex flex-col items-center text-center">
                    <div className="relative">
                        <Avatar className="h-24 w-24 mb-4">
                            <AvatarImage
                                src="/images/pegawai.jpg"
                                alt={user.name}
                            />
                            <AvatarFallback>AF</AvatarFallback>
                        </Avatar>
                        {isEditing && (
                            <div className="absolute bottom-4 right-0 bg-primary text-primary-foreground p-1.5 rounded-full cursor-pointer hover:bg-primary/90 shadow-sm">
                                <Camera className="h-3 w-3" />
                            </div>
                        )}
                    </div>

                    {isEditing ? (
                        <div className="w-full space-y-3 mt-2 px-4">
                            <div className="space-y-1">
                                <Label htmlFor="name" className="sr-only">
                                    Nama
                                </Label>
                                <Input
                                    id="name"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    className="text-center h-9 font-bold"
                                    placeholder="Nama Lengkap"
                                />
                                {errors.name && (
                                    <p className="text-xs text-red-500">
                                        {errors.name}
                                    </p>
                                )}
                            </div>

                            <div className="space-y-1">
                                <Label htmlFor="nip" className="sr-only">
                                    NIP
                                </Label>
                                <Input
                                    id="nip"
                                    value={data.nip}
                                    onChange={(e) =>
                                        setData("nip", e.target.value)
                                    }
                                    className="text-center h-8 text-xs"
                                    placeholder="NIP"
                                />
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className="flex items-center gap-2">
                                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                                    {user.name}
                                </h2>
                            </div>

                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                {user.email}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                                NIP: {user.nip || "-"}
                            </p>
                        </>
                    )}
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
                    <Mail className="h-5 w-5 text-gray-400 dark:text-gray-500 flex-shrink-0 mt-2" />
                    <div className="w-full">
                        {isEditing ? (
                            <Input
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                className="h-8 text-sm"
                                placeholder="Email"
                            />
                        ) : (
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1.5">
                                {user.email}
                            </p>
                        )}
                    </div>
                </div>

                <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-gray-400 dark:text-gray-500 flex-shrink-0 mt-2" />
                    <div className="w-full">
                        {isEditing ? (
                            <Input
                                value={data.phone}
                                onChange={(e) =>
                                    setData("phone", e.target.value)
                                }
                                className="h-8 text-sm"
                                placeholder="Nomor Telepon"
                            />
                        ) : (
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1.5">
                                {user.phone || "-"}
                            </p>
                        )}
                    </div>
                </div>

                <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-gray-400 dark:text-gray-500 flex-shrink-0 mt-2" />
                    <div className="w-full">
                        {isEditing ? (
                            <Input
                                value={data.address}
                                onChange={(e) =>
                                    setData("address", e.target.value)
                                }
                                className="h-8 text-sm"
                                placeholder="Alamat"
                            />
                        ) : (
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1.5">
                                {user.address || "-"}
                            </p>
                        )}
                    </div>
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
                   {user.is_active ? "Aktif" : "Tidak Aktif"} • {formatDateTime(user.last_login_at)}
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
