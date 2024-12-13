"use client";

import { Card, CardBody } from "@nextui-org/react";

export function UserGuide() {
  return (
    <div className="w-full">
      <div className="max-w-2xl mb-8">
        <p className="text-default-500 mt-[-1rem]">
          Aşağıdaki adımları takip ederek hasta görüşmelerinizden profesyonel
          tıbbi raporlar oluşturmaya hemen başlayabilirsiniz.
        </p>
      </div>

      <Card className="bg-default-50 w-full">
        <CardBody className="p-8">
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
                <p className="text-default-500 max-w-4xl">
                  Sol menüdeki &quot;Seans Kaydet&quot; butonuna tıklayarak yeni
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
                <p className="text-default-500 max-w-4xl">
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
                <p className="text-default-500 max-w-4xl">
                  Seansınızı başlatın ve notlarınızı oluşturun. Sistem size
                  yardımcı olacak ve notlarınızı düzenli bir şekilde tutmanızı
                  sağlayacaktır.
                </p>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
