import { Card } from "@/Components/ui/card";
import { Badge } from "@/Components/ui/badge";
import {
    Clock,
    FileText,
    Edit3,
    Trash2,
    Eye,
    Download,
    Upload,
} from "lucide-react";

interface HistoryEntry {
    id: string;
    timestamp: string;
    action: string;
    description: string;
    user: string;
    details: string;
    icon: "edit" | "delete" | "view" | "download" | "upload" | "file";
    status: "success" | "pending" | "failed";
}

export default function HistoryLog() {
    const historyData: HistoryEntry[] = [
        {
            id: "1",
            timestamp: "15 Jan 2025, 14:30 WIB",
            action: "Approve Bantuan Sosial",
            description: "Approved social assistance for Rp 500.000",
            user: "Anshan Haso",
            details: "ID: BNSOS-2025-001",
            icon: "edit",
            status: "success",
        },
        {
            id: "2",
            timestamp: "15 Jan 2025, 10:15 WIB",
            action: "Create Letter",
            description: "Created new official letter SURAT-001/2025",
            user: "Anshan Haso",
            details: "Jenis: Surat Keterangan Penduduk",
            icon: "file",
            status: "success",
        },
        {
            id: "3",
            timestamp: "14 Jan 2025, 16:45 WIB",
            action: "Download Data",
            description: "Downloaded population data export",
            user: "Anshan Haso",
            details: "Format: Excel, Records: 1.245",
            icon: "download",
            status: "success",
        },
        {
            id: "4",
            timestamp: "14 Jan 2025, 13:20 WIB",
            action: "Update Resident",
            description: "Updated resident data for ID: PD-2025-0523",
            user: "Anshan Haso",
            details: "Modified: Address, Phone Number",
            icon: "edit",
            status: "success",
        },
    ];

    const getIcon = (icon: string) => {
        const iconProps = "h-4 w-4";
        switch (icon) {
            case "edit":
                return <Edit3 className={iconProps} />;
            case "delete":
                return <Trash2 className={iconProps} />;
            case "view":
                return <Eye className={iconProps} />;
            case "download":
                return <Download className={iconProps} />;
            case "upload":
                return <Upload className={iconProps} />;
            case "file":
                return <FileText className={iconProps} />;
            default:
                return <Clock className={iconProps} />;
        }
    };

    const getStatusColor = (status: string) => {
        switch (status.toLowerCase()) {
            case "success":
                return "bg-green-100 text-green-700 border-green-200";
            case "pending":
                return "bg-amber-100 text-amber-700 border-amber-200";
            case "failed":
                return "bg-red-100 text-red-700 border-red-200";
            default:
                return "bg-gray-100 text-gray-700 border-gray-200";
        }
    };

    const getDotColor = (status: string) => {
        switch (status.toLowerCase()) {
            case "success":
                return "bg-green-500";
            case "pending":
                return "bg-amber-500";
            case "failed":
                return "bg-red-500";
            default:
                return "bg-gray-400";
        }
    };

    return (
        <Card className="border-none bg-white dark:bg-gray-900 shadow-sm">
            <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                        <Clock className="h-5 w-5" />
                        Last History Log
                    </h3>
                </div>

                {/* Timeline */}
                <div className="space-y-1">
                    {historyData.map((entry, index) => (
                        <div
                            key={entry.id}
                            className="group relative border-l-2 border-border pl-4 py-3 hover:bg-muted/50 rounded transition-colors"
                        >
                            {/* dot */}
                            <div
                                className={`absolute -left-[5px] top-4 h-2.5 w-2.5 rounded-full ${getDotColor(
                                    entry.status,
                                )}`}
                            />

                            {/* content */}
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="p-1.5 rounded bg-muted">
                                            {getIcon(entry.icon)}
                                        </div>

                                        <span className="font-medium">
                                            {entry.action}
                                        </span>

                                        <Badge
                                            variant="outline"
                                            className={`text-xs ${getStatusColor(entry.status)}`}
                                        >
                                            {entry.status}
                                        </Badge>
                                    </div>

                                    <p className="text-sm text-muted-foreground mb-1">
                                        {entry.description}
                                    </p>

                                    <div className="text-xs text-muted-foreground space-y-0.5">
                                        <p>
                                            <span className="font-medium">
                                                By:
                                            </span>{" "}
                                            {entry.user}
                                        </p>
                                        <p>
                                            <span className="font-medium">
                                                Time:
                                            </span>{" "}
                                            {entry.timestamp}
                                        </p>
                                        <p>
                                            <span className="font-medium">
                                                Details:
                                            </span>{" "}
                                            {entry.details}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* connector */}
                            {index < historyData.length - 1 && (
                                <div className="absolute -left-[1px] top-full h-3 w-0 border-l border-border" />
                            )}
                        </div>
                    ))}
                </div>

                {/* load more */}
                <button className="mt-6 w-full py-2 text-center text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded transition-colors">
                    More History
                </button>
            </div>
        </Card>
    );
}
