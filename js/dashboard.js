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
  konten.innerHTML = `
  Cari <input id="lapor" type="text"></input>
  <select name="ordtype">
        <option placeholder="All"></option>
        <option value="PM01">PM01</option>
        <option value="PM02">PM02</option>
        <option value="PM03">PM03</option>
    </select>
    
    <select name="area">
      <option placeholder="All"></option>
      <option value="FL1">Finishing 1</option>
      <option value="FL2">Finishing 2</option>
      <option value="CDG1">Continuous</option>
      <option value="CDG2">Dryer</option>
      <option value="CDG3">Glycerine</option>
      <option value="CDG4">BBC Rawmat</option>
      <option value="WWTP">Waste Water Treatment Plant</option>
      <option value="IDGE">Electrical,Instrumentation, & Automation</option>
      <option value="MMFE">Support Mechanical Fabrication Static & MHE</option>
    </select>
  </div>
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
            <td class="border px-4 py-2"><input type="button" value="+"></input> 
          </tr>
        </tbody>
      </table>
      `;
   
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
            <td class="border px-4 py-2><a href="google.com">tanggal</a>
            
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
