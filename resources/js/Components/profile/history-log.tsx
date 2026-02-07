import { Card } from '@/Components/ui/card'
import { Badge } from '@/Components/ui/badge'
import { Clock, FileText, Edit3, Trash2, Eye, Download, Upload } from 'lucide-react'

interface HistoryEntry {
  id: string
  timestamp: string
  action: string
  description: string
  user: string
  details: string
  icon: 'edit' | 'delete' | 'view' | 'download' | 'upload' | 'file'
  status: 'success' | 'pending' | 'failed'
}

export default function HistoryLog() {
  const historyData: HistoryEntry[] = [
    {
      id: '1',
      timestamp: '15 Jan 2025, 14:30 WIB',
      action: 'Approve Bantuan Sosial',
      description: 'Approved social assistance for Rp 500.000',
      user: 'Anshan Haso',
      details: 'ID: BNSOS-2025-001',
      icon: 'edit',
      status: 'success'
    },
    {
      id: '2',
      timestamp: '15 Jan 2025, 10:15 WIB',
      action: 'Create Letter',
      description: 'Created new official letter SURAT-001/2025',
      user: 'Anshan Haso',
      details: 'Jenis: Surat Keterangan Penduduk',
      icon: 'file',
      status: 'success'
    },
    {
      id: '3',
      timestamp: '14 Jan 2025, 16:45 WIB',
      action: 'Download Data',
      description: 'Downloaded population data export',
      user: 'Anshan Haso',
      details: 'Format: Excel, Records: 1.245',
      icon: 'download',
      status: 'success'
    },
    {
      id: '4',
      timestamp: '14 Jan 2025, 13:20 WIB',
      action: 'Update Resident',
      description: 'Updated resident data for ID: PD-2025-0523',
      user: 'Anshan Haso',
      details: 'Modified: Address, Phone Number',
      icon: 'edit',
      status: 'success'
    },
  ]

  const getIcon = (icon: string) => {
    const iconProps = 'h-4 w-4'
    switch (icon) {
      case 'edit':
        return <Edit3 className={iconProps} />
      case 'delete':
        return <Trash2 className={iconProps} />
      case 'view':
        return <Eye className={iconProps} />
      case 'download':
        return <Download className={iconProps} />
      case 'upload':
        return <Upload className={iconProps} />
      case 'file':
        return <FileText className={iconProps} />
      default:
        return <Clock className={iconProps} />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success':
        return 'bg-green-100 text-green-700'
      case 'pending':
        return 'bg-yellow-100 text-yellow-700'
      case 'failed':
        return 'bg-red-100 text-red-700'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <Card className="border-none bg-white shadow-sm">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Last History Log
          </h3>
        </div>

        <div className="space-y-1">
          {historyData.map((entry, index) => (
            <div
              key={entry.id}
              className="group relative border-l-2 border-gray-200 pl-4 py-3 hover:bg-gray-50 rounded transition-colors"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[5px] top-4 h-2.5 w-2.5 rounded-full bg-gray-400 group-hover:bg-gray-600 transition-colors" />

              {/* Content */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="p-1.5 rounded bg-gray-100 group-hover:bg-gray-200 transition-colors">
                      {getIcon(entry.icon)}
                    </div>
                    <span className="font-medium text-gray-900">{entry.action}</span>
                    <Badge className={`text-xs ${getStatusColor(entry.status)}`}>
                      {entry.status}
                    </Badge>
                  </div>

                  <p className="text-sm text-gray-600 mb-1">{entry.description}</p>

                  <div className="text-xs text-gray-500 space-y-0.5">
                    <p className="flex items-center gap-1">
                      <span className="font-medium">By:</span> {entry.user}
                    </p>
                    <p className="flex items-center gap-1">
                      <span className="font-medium">Time:</span> {entry.timestamp}
                    </p>
                    <p className="flex items-center gap-1">
                      <span className="font-medium">Details:</span> {entry.details}
                    </p>
                  </div>
                </div>
              </div>

              {/* Separator */}
              {index < historyData.length - 1 && (
                <div className="absolute -left-[1px] top-full h-3 w-0 border-l border-gray-200" />
              )}
            </div>
          ))}
        </div>

        {/* Load more */}
        <button className="mt-6 w-full py-2 text-center text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded transition-colors">
          More History
        </button>
      </div>
    </Card>
  )
}
