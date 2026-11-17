# Cek Lahan

Alat gratis untuk mengukur luas dan keliling lahan di atas citra satelit, serta mengonversi koordinat
lintang–bujur ⇄ UTM ⇄ TM-3 (sistem koordinat BPN), khusus wilayah Indonesia.

Dibuat oleh Erick Jahja (Teknik Geodesi, UNWIM) bersama AI · GeoAI Solutions.

## Fitur
- Citra satelit (Esri World Imagery) dengan tanggal & resolusi citra di lokasi
- Cari kota/kabupaten/desa/koordinat, sorot batas wilayah (daratan)
- Gambar batas lahan → luas (m², ha, tumbak/bata, are, bau) & keliling di ellipsoid WGS84
- Koordinat titik dalam desimal, DMS, UTM, TM-3 (zona otomatis se-Indonesia)
- Input koordinat (desimal/DMS/UTM/TM-3) & unggah CSV/KML/GeoJSON
- Unduh PDF sketsa bidang (citra + skala + tabel koordinat), KML, GeoJSON, CSV

## Batasan
Hasil adalah perkiraan, **bukan pengganti pengukuran dan gambar ukur resmi BPN**. Batas wilayah administrasi
bersifat indikatif.

## Sumber data & lisensi
- Citra & label: Esri World Imagery (Esri, Vantor, Earthstar Geographics) — Powered by Esri
- Pencarian tempat: © kontributor OpenStreetMap (ODbL) via Nominatim
- Batas provinsi & kab/kota: BPS 2020 via geoBoundaries/HDX (CC BY 3.0 IGO), diolah GeoAI Solutions
- Perangkat lunak: Leaflet, proj4js, jsPDF

Situs statis (HTML/JS), dijalankan dengan GitHub Pages. Semua hitungan berjalan di browser pengunjung.
