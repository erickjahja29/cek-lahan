// Konfigurasi Cek Lahan. Key ini memang terbaca publik (dipakai browser pengunjung untuk memuat peta);
// keamanannya dari pembatasan: hak akses Basemaps saja + Referrer URL hanya domain situs Cek Lahan.
// API key ArcGIS Location Platform (akun geoai-erick), item "Cek Lahan - basemap".
// Hak akses: Basemaps saja (basemap styles + static basemap tiles). Public application.
// Dibuat 17 Nov 2026, kedaluwarsa 17 Nov 2027 -> perpanjang (rotate) sebelum tanggal itu.
// Referrer URL: wajib dibatasi ke domain GitHub Pages situs ini (+ http://localhost:8765 untuk uji lokal).
window.CEK_LAHAN_CONFIG = {
  esriApiKey: "AAPTaW9i9q93I0xudpJJhHN-EWw..6PQWXm5Et1YD_a5eDPdTL0rWoDWHEHDEK3XmSaxSgvLcYr06DxA7YXi6Ajk6lHBo6zLl4cHcyjw0VGe7ZacpQbylHzKOOxw333t8OHgc_VBS-5g2e1jabIl5n8LSv3iYRBwopXjU9k_BIPvfNcsSpQjc1NdB5tOKrhpqRTKCuBC5tAevVNHHXjFa00wNqQ8UHsABelcpqmHWioYpN0OrD1efq5_wta_bsYTZb6SAJhlio3JwIhm_OfRi0vC1AT1_bEFexYfR",
  esriKeyExpires: "2027-11-17",
};
