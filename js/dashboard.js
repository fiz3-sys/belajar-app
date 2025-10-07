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
if (jalaman=== "reppm") {
  judul.innerText = "Submission Pengantian Parts saat PM"
  konten.innerHTML = 
  <input type="file" accept="image/*" capture="camera" id="photoInput" class="mb-4">

  <!-- Tombol simpan -->
  <button id="savePhoto" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
    Simpan Foto
  </button>

  <h2 class="text-md font-semibold mt-6">📁 Daftar Foto</h2>
  <div id="photoList" class="mt-2 grid grid-cols-2 gap-2"></div>

  <script>
    const photoInput = document.getElementById("photoInput");
    const savePhoto = document.getElementById("savePhoto");
    const photoList = document.getElementById("photoList");

    // Ambil data foto yang tersimpan
    const storedPhotos = JSON.parse(localStorage.getItem("photos") || "[]");

    // Render awal
    renderPhotos();

    savePhoto.onclick = () => {
      const file = photoInput.files[0];
      if (!file) {
        alert("Pilih atau ambil foto dulu!");
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        storedPhotos.push(e.target.result);
        localStorage.setItem("photos", JSON.stringify(storedPhotos));
        renderPhotos();
        photoInput.value = "";
      };
      reader.readAsDataURL(file);
    };

    function renderPhotos() {
      photoList.innerHTML = storedPhotos
        .map((src, i) => `
          <div class="border p-2 rounded">
            <img src="${src}" class="w-full h-32 object-cover rounded" alt="Foto ${i+1}">
          </div>
        `)
        .join("");
    }
  </script>
}
    else if (halaman === "aktivitas") {
    judul.innerText = "Aktivitas Maintenance";
    konten.innerHTML = `
      <table class="min-w-full border border-gray-200">
        <thead class="bg-gray-100">
          <tr>
            <th class="px-4 py-2 border">Tanggal</th>
            <th class="px-4 py-2 border">Equipment</th>
            <th class="px-4 py-2 border">Deskripsi</th>
            <th class="px-4 py-2 border">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border px-4 py-2">2025-10-05</td>
            <td class="border px-4 py-2">Pump A1</td>
            <td class="border px-4 py-2">Cek oli dan tekanan</td>
            <td class="border px-4 py-2">Selesai</td>
          </tr>
        </tbody>
      </table>
    `;

  } else if (halaman === "riwayat") {
    judul.innerText = "Riwayat Maintenance";
    konten.innerHTML = `<p>Riwayat perawatan mesin akan muncul di sini.</p>`;

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
