export default function DashboardPage() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold text-foreground mb-8">Hoş Geldiniz</h1>

      <div className="flex flex-col gap-12">
        {/* Step 1 */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
              1
            </div>
            <div className="w-0.5 h-12 bg-primary/30 mx-auto mt-2" />
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Kayıt Oluştur</h2>
            <p className="text-default-500">
              Sol menüdeki &quot;Seansı Kaydet&quot; butonuna tıklayarak yeni
              bir kayıt oluşturmaya başlayın. Dikte, yükleme veya anlatım
              seçeneklerinden birini kullanabilirsiniz.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
              2
            </div>
            <div className="w-0.5 h-12 bg-primary/30 mx-auto mt-2" />
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Bilgileri Doldur</h2>
            <p className="text-default-500">
              Hasta bilgilerini, not tipini ve seans detaylarını ekleyin.
              Lokasyon ve CPT kodunu seçerek kaydınızı özelleştirin.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
              3
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">
              Özet ve Notlar Oluştur
            </h2>
            <p className="text-default-500">
              Seansınızı başlatın ve notlarınızı oluşturun. Sistem size yardımcı
              olacak ve notlarınızı düzenli bir şekilde tutmanızı sağlayacaktır.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
