// Konfigurasi Cek Lahan. Key ini memang terbaca publik (dipakai browser pengunjung untuk memuat peta);
// keamanannya dari pembatasan: hak akses Basemaps saja + Referrer URL hanya domain situs Cek Lahan.
// API key ArcGIS Location Platform (akun geoai-erick), item "Cek Lahan - basemap".
// Hak akses: Basemaps saja (basemap styles + static basemap tiles). Public application.
// Dibuat ulang 17 Nov 2026 setelah referrer dibatasi (key lama tidak berlaku lagi), kedaluwarsa 17 Nov 2027 -> perpanjang (rotate) sebelum tanggal itu.
// Referrer URL: wajib dibatasi ke domain GitHub Pages situs ini (+ http://localhost:8765 untuk uji lokal).
window.CEK_LAHAN_CONFIG = {
  esriApiKey: "AAPTapK2u39MPKlsmpUP1PJcC_w..Ny-hxVr7lkddmAw6CMMgZ_V41_PtAcO6yYgtBrNANjv5-XlaAveEaBuM9h4v2zlyg3dqs1zzqWuJeDLCLe8EOE72is4sDIWX0dwCOs5qb6AB1euaoC0GVXHGlaHRA8CtV169u-ci_H8jWdxUyH58Hnen1fafA3Ct2wYu2GRhzwo_QeNWdeIU0hpVQHuQXSYMZS_5aKI2j7-yl0_dC4WrvEMborKoSMxadJtCHmESPFGBeTXw9Kye-j05AA24AT1_bEFexYfR",
  esriKeyExpires: "2027-11-17",
};
