// ====== LOGIN CHECK ======
window.onload = function () {
  const loggedIn = localStorage.getItem("loggedIn");
  if (!loggedIn) window.location.href = "index.html";
};

// ====== TOGGLE SUBMENU ======
function toggleSubmenu(menu) {
  const submenu = document.getElementById(`submenu-${menu}`);
  const arrow = document.getElementById(`arrow-${menu}`);

  if (submenu.classList.contains("hidden")) {
    submenu.classList.remove("hidden");
    arrow.classList.add("rotate-180");
  } else {
    submenu.classList.add("hidden");
    arrow.classList.remove("rotate-180");
  }
}

// ====== HALAMAN KONTEN ======
function tampilkanHalaman(halaman) {
  const judul = document.getElementById("judulHalaman");
  const konten = document.getElementById("kontenHalaman");
if (halaman=== "reppm") {
  judul.innerText = "Submission Pengantian Parts saat PM"
  konten.innerHTML =
   
 }   else if (halaman === "riwayat") {
    judul.innerText = "Aktivitas Maintenance";
    konten.innerHTML = `
      <table class="min-w-full border border-gray-200">
        <thead class="bg-gray-100">
          <tr>
            <th class="px-4 py-2 border">Tanggal</th>
            <th class="px-4 py-2 border">No Job</th>
            <th class="px-4 py-2 border">Equipment</th>
            <th class="px-4 py-2 border">Deskripsi</th>
            <th class="px-4 py-2 border">Status</th>
            <th class="px-4 py-2 border">Photo</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border px-4 py-2">2025-10-05</td>
            <td class="border px-4 py-2">Job-1</td>
            <td class="border px-4 py-2">Pump A1</td>
            <td class="border px-4 py-2">Cek oli dan tekanan</td>
            <td class="border px-4 py-2">Selesai</td>
            
          </tr>
        </tbody>
      </table>
    `;

  } else if (halaman === "stok") {
    judul.innerText = "Stok Barang";
    konten.innerHTML = `<p>Daftar stok suku cadang akan ditampilkan di sini.</p>`;

  } else if (halaman === "penggunaan") {
    judul.innerText = "Penggunaan Barang";
    konten.innerHTML = `<p>Data penggunaan material dan sparepart.</p>`;

  } else if (halaman === "laporan") {
    judul.innerText = "Laporan Periodik";
    konten.innerHTML = `<p>Fitur laporan sedang dikembangkan 🚧</p>`;

  } else {
    judul.innerText = "Dashboard";
    konten.innerHTML = `<p>Selamat datang di sistem Maintenance.</p>`;
  }
  
}



// ====== LOGOUT ======
function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "index.html";
}
