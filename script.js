function showPage(page) {
    const pageContent = document.getElementById('page-content');
    switch(page) {
        case 'ekolojik-kredi':
            pageContent.innerHTML = `
                <h2>Ekolojik Kredi Nedir?</h2>
                <p>Ekolojik kredi, geri dönüşüm ve çevre dostu faaliyetlerde bulunan kişilere verilen ödülleri ifade eder. Bu sistemle, atıkları doğru şekilde ayırarak çevreye katkı sağlayanlar ödüllendirilir.</p>
            `;
            break;
        case 'hazirlayanlar':
            pageContent.innerHTML = `
                <h2>Hazırlayanlar</h2>
                <p>Danışman Öğretmen: Osman Onuk</p>
                <p>Öğrenciler: Muhammedcan Arslanparçası, Bilal Yiğit Tezcan, Yağız Efe Yılmaz</p>
            `;
            break;
        case 'geri-donusum':
            pageContent.innerHTML = `
                <h2>Geri Dönüşüm Nedir?</h2>
                <p>Geri dönüşüm, atıkların yeniden kullanılabilir hale getirilmesi işlemidir. Bu, çevreye olan zararları azaltır ve doğal kaynakların korunmasına yardımcı olur.</p>
            `;
            break;
        case 'bize-ulasin':
            pageContent.innerHTML = `
                <h2>Bize Ulaşın</h2>
                <p>Email: <a href="mailto:ekolojikkreditubitak@gmail.com">ekolojikkreditubitak@gmail.com</a></p>
                <p>Adres: Torbalı Anadolu Lisesi, İzmir Torbalı</p>
                <p>YouTube Kanalı: <a href="https://www.youtube.com" target="_blank">Torbalı Anadolu Lisesi YouTube Kanalı</a></p>
            `;
            break;
        case 'kayit':
            pageContent.innerHTML = `
                <h2>Öğrenci veya Okul Kaydı</h2>
                <button onclick="showSubPage('okul-kaydi')">Okul Kaydı</button>
                <button onclick="showSubPage('ogrenci-kaydi')">Öğrenci Kaydı</button>
            `;
            break;
        case 'veri-goruntuleme':
            pageContent.innerHTML = `
                <h2>Veri Görüntüle</h2>
                <p>Öğrencinin okul numarası ve e-posta adresini girerek puanlarını ve önceki verilerini görüntüleyebilirsiniz.</p>
                <label for="email">E-posta:</label>
                <input type="email" id="email" placeholder="E-posta adresinizi girin"><br>
                <label for="ogrenci-numara">Okul Numarası:</label>
                <input type="text" id="ogrenci-numara" placeholder="Okul numaranızı girin"><br>
                <button onclick="gosterPuanlar()">Puanlarınızı Görüntüle</button>
                <div id="puanlar"></div>
            `;
            break;
        case 'veri-giris':
            pageContent.innerHTML = `
                <h2>Veri Girişi</h2>
                <label for="okul-isimi">Okul İsmi:</label>
                <input type="text" id="okul-isimi" placeholder="Okul ismini girin"><br>
                <label for="okul-sifre">Okul Şifresi:</label>
                <input type="password" id="okul-sifre" placeholder="Okul şifresini girin"><br>
                <button onclick="okulGiris()">Veri Girişine Geç</button>
            `;
            break;
        case 'okul-kaydi':
            pageContent.innerHTML = `
                <h2>Okul Kaydı</h2>
                <form id="okul-form">
                    <label for="okul-ad">Okul Adı:</label>
                    <input type="text" id="okul-ad" required><br>
                    <label for="il">İl:</label>
                    <input type="text" id="il" required><br>
                    <label for="ilce">İlçe:</label>
                    <input type="text" id="ilce" required><br>
                    <label for="okul-sifre">Okul Şifresi:</label>
                    <input type="password" id="okul-sifre" required><br>
                    <button type="submit">Kaydı Tamamla</button>
                </form>
            `;
            document.getElementById('okul-form').addEventListener('submit', function(event) {
                event.preventDefault();
                alert('Okul kaydı başarıyla yapıldı!');
                showPage('kayit');
            });
            break;
        case 'ogrenci-kaydi':
            pageContent.innerHTML = `
                <h2>Öğrenci Kaydı</h2>
                <form id="ogrenci-form">
                    <label for="ogrenci-ad">Öğrenci Adı:</label>
                    <input type="text" id="ogrenci-ad" required><br>
                    <label for="ogrenci-soyad">Öğrenci Soyadı:</label>
                    <input type="text" id="ogrenci-soyad" required><br>
                    <label for="ogrenci-numara">Öğrenci Numarası:</label>
                    <input type="text" id="ogrenci-numara" required><br>
                    <label for="ogrenci-email">E-posta:</label>
                    <input type="email" id="ogrenci-email" required><br>
                    <label for="ogrenci-telefon">Telefon:</label>
                    <input type="tel" id="ogrenci-telefon" required><br>
                    <label for="ogrenci-okul-ad">Okul Adı:</label>
                    <input type="text" id="ogrenci-okul-ad" required><br>
                    <label for="ogrenci-il">İl:</label>
                    <input type="text" id="ogrenci-il" required><br>
                    <label for="ogrenci-ilce">İlçe:</label>
                    <input type="text" id="ogrenci-ilce" required><br>
                    <label for="ogrenci-sinif">Sınıf:</label>
                    <input type="text" id="ogrenci-sinif" required><br>
                    <button type="submit">Öğrenci Kaydını Tamamla</button>
                </form>
            `;
            document.getElementById('ogrenci-form').addEventListener('submit', function(event) {
                event.preventDefault();
                alert('Öğrenci kaydı başarıyla yapıldı!');
                showPage('kayit');
            });
            break;
    }
}

function okulGiris() {
    const okulAdi = document.getElementById('okul-isimi').value;
    const okulSifre = document.getElementById('okul-sifre').value;

    if (okulAdi && okulSifre) {
        alert('Okul giriş başarılı! Şimdi öğrenci verilerini girebilirsiniz.');
        showPage('ogrenci-kaydi');
    } else {
        alert('Okul adı veya şifre eksik!');
    }
}

function gosterPuanlar() {
    const email = document.getElementById('email').value;
    const okulNumara = document.getElementById('ogrenci-numara').value;

    if (email && okulNumara) {
        // Burada basit bir örnek puan görüntüleme işlemi yapılabilir
        document.getElementById('puanlar').innerHTML = `
            <h3>Öğrenci Puanları</h3>
            <p>E-posta: ${email}</p>
            <p>Okul Numarası: ${okulNumara}</p>
            <p>Puanlarınız: 50</p> <!-- Örnek puan değeri -->
        `;
    } else {
        alert('E-posta veya okul numarası eksik!');
    }
}
