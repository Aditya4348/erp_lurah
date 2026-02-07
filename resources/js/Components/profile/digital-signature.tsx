import { Upload, QrCode } from 'lucide-react'
import { Card } from '@/Components/ui/card'
import { Button } from '@/Components/ui/button'
import { Badge } from '@/Components/ui/badge'

export default function DigitalSignature() {
  const signatureData = {
    nama: 'Anshan Haso',
    jabatan: 'Kepala Seksi Pemberdayaan Masyarakat',
    signatureImage: 'https://images.unsplash.com/photo-1516214104703-d922c3123edb?w=300&h=150&fit=crop',
    qrCode: 'https://images.unsplash.com/photo-1633356713967-ecda17f76c43?w=200&h=200&fit=crop',
    sertifikatStatus: 'Verified',
    sertifikatExpiry: '31 Dec 2026'
  }

  return (
    <Card className="border-none bg-white dark:bg-gray-900 p-6 shadow-sm">
      <h2 className="text-xl font-bold mb-6">Tanda Tangan Digital</h2>
      
      <div className="space-y-6">
        {/* Signature Section */}
        <div>
          <h3 className="font-semibold mb-4">Gambar Tanda Tangan</h3>
          <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-8 text-center bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 transition">
            {signatureData.signatureImage ? (
              <div className="space-y-4">
                <img 
                  src={signatureData.signatureImage || "/placeholder.svg"}
                  alt="Signature"
                  className="h-20 mx-auto"
                />
                <div>
                  <p className="text-sm text-gray-400">Tanda Tangan Tersimpan</p>
                  <p className="text-xs text-gray-400 mt-1">Klik untuk mengubah tanda tangan</p>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <Upload className="h-8 w-8 mx-auto" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Upload Tanda Tangan</p>
                  <p className="text-xs text-gray-500">Drag and drop atau klik untuk upload</p>
                </div>
              </div>
            )}
          </div>
          <Button variant="outline" className="w-full mt-3 bg-transparent">
            <Upload className="h-4 w-4 mr-2" />
            {signatureData.signatureImage ? 'Ubah Tanda Tangan' : 'Upload Tanda Tangan'}
          </Button>
        </div>

        {/* QR Code Section */}
        <div>
          <h3 className="font-semibold mb-4">QR Code / Sertifikat Digital</h3>
          <div className="border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 rounded-lg p-4 bg-white">
            <div className="space-y-4">
              <div className="flex flex-col items-center">
                <img 
                  src={signatureData.qrCode || "/placeholder.svg"}
                  alt="QR Code"
                  className="h-32 w-32 border border-gray-200 rounded"
                />
              </div>
              
              <div className="space-y-2 text-center">
                <p className="text-sm font-medium text-gray-900">{signatureData.nama}</p>
                <p className="text-xs text-gray-600">{signatureData.jabatan}</p>
                
                <div className="flex items-center justify-center gap-2 mt-3">
                  <Badge className="bg-green-100 text-green-700">
                    {signatureData.sertifikatStatus}
                  </Badge>
                </div>
                
                <p className="text-xs text-gray-500 mt-3">
                  Berlaku Hingga: {signatureData.sertifikatExpiry}
                </p>
              </div>
            </div>
          </div>
          
          <Button variant="outline" className="w-full mt-3 bg-transparent">
            <QrCode className="h-4 w-4 mr-2" />
            Unduh QR Code
          </Button>
        </div>

        {/* Certificate Info */}
        <div className="bg-blue-50 border-blue-200 dark:bg-blue-950 border border-blue-200 rounded-lg p-4">
          <p className="text-sm ">
            <span className="font-semibold">Info:</span> Sertifikat digital Anda telah terverifikasi dan dapat digunakan untuk menandatangani dokumen resmi secara digital.
          </p>
        </div>
      </div>
    </Card>
  )
}
