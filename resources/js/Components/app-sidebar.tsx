import * as React from "react";
import {
  Archive,
    BarChart3,
    BookOpen,
    Bot,
    Command,
    FileText,
    Frame,
    Gift,
    Home,
    LifeBuoy,
    Map,
    MessageSquare,
    PieChart,
    Send,
    Settings2,
    Shield,
    SquareTerminal,
    UserCog,
    Users,
    Wallet,
} from "lucide-react";

import { NavMain } from "@/Components/nav-main";
import { NavProjects } from "@/Components/nav-projects";
import { NavSecondary } from "@/Components/nav-secondary";
import { NavUser } from "@/Components/nav-user";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
        {
            title: "Dashboard",
            url: "/dashboard",
            icon: Home,
        },
        {
            title: "Kependudukan",
            url: "#",
            icon: Users,
            isActive: true,
            items: [
                { title: "Data Penduduk", url: "/penduduk" },
                { title: "Kartu Keluarga", url: "/kk" },
                { title: "Mutasi Datang/Pindah", url: "/mutasi" },
                { title: "Kelahiran", url: "/kelahiran" },
                { title: "Kematian", url: "/kematian" },
            ],
        },
        {
            title: "Surat Menyurat",
            url: "#",
            icon: FileText,
            items: [
                { title: "Buat Surat", url: "/surat/create" },
                { title: "Daftar Surat", url: "/surat" },
                { title: "Template Surat", url: "/surat/template" },
                { title: "Nomor Surat", url: "/surat/nomor" },
            ],
        },
        {
            title: "Bantuan Sosial",
            url: "#",
            icon: Gift,
            items: [
                { title: "Data Penerima", url: "/bansos/penerima" },
                { title: "Pengajuan", url: "/bansos/pengajuan" },
                { title: "Verifikasi", url: "/bansos/verifikasi" },
                { title: "Riwayat", url: "/bansos/riwayat" },
            ],
        },
        {
            title: "Pengaduan Warga",
            url: "#",
            icon: MessageSquare,
            items: [
                { title: "Pengaduan Masuk", url: "/pengaduan" },
                { title: "Dalam Proses", url: "/pengaduan/proses" },
                { title: "Selesai", url: "/pengaduan/selesai" },
            ],
        },
        {
            title: "Arsip & Dokumen",
            url: "/arsip",
            icon: Archive,
        },
        {
            title: "Laporan",
            url: "#",
            icon: BarChart3,
            items: [
                { title: "Statistik Penduduk", url: "/laporan/penduduk" },
                { title: "Surat", url: "/laporan/surat" },
                { title: "Bantuan Sosial", url: "/laporan/bansos" },
                { title: "Keuangan", url: "/laporan/keuangan" },
            ],
        },
        {
            title: "Keuangan",
            url: "#",
            icon: Wallet,
            items: [
                { title: "Pemasukan", url: "/keuangan/pemasukan" },
                { title: "Pengeluaran", url: "/keuangan/pengeluaran" },
                { title: "Buku Kas", url: "/keuangan/kas" },
            ],
        },
        {
            title: "Pegawai",
            url: "/pegawai",
            icon: UserCog,
        },
    ],

    navSecondary: [
        {
            title: "Bantuan / Panduan",
            url: "/help",
            icon: LifeBuoy,
        },
        {
            title: "Audit Log",
            url: "/audit",
            icon: Shield,
        },
    ],
    projects: [],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar variant="inset" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <a href="#">
                                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                                    <Command className="size-4" />
                                </div>
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate font-semibold">
                                        Acme Inc
                                    </span>
                                    <span className="truncate text-xs">
                                        Enterprise
                                    </span>
                                </div>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
                <NavProjects projects={data.projects} />
                <NavSecondary items={data.navSecondary} className="mt-auto" />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
        </Sidebar>
    );
}
