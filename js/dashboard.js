// Cek login
window.onload = function() {
  const loggedIn = localStorage.getItem("loggedIn");
  if (!loggedIn) {
    window.location.href = "index.html";
  }
  tampilkanData();
};

// Dummy data aktivitas maintenance
let aktivitas = [
  { tanggal: "2025-10-05", equipment: "Pump A1", deskripsi: "Ganti oli & cek tekanan", status: "Selesai" },
  { tanggal: "2025-10-06", equipment: "Valve B2", deskripsi: "Periksa kebocoran", status: "Dalam Proses" },
];

// Tampilkan data di tabel
function tampilkanData() {
  const tabel = document.getElementById("tabelAktivitas");
  tabel.innerHTML = "";
  aktivitas.forEach((item, index) => {
    tabel.innerHTML += `
      <tr class="hover:bg-gray-50">
        <td class="border px-4 py-2">${item.tanggal}</td>
        <td class="border px-4 py-2">${item.equipment}</td>
        <td class="border px-4 py-2">${item.deskripsi}</td>
        <td class="border px-4 py-2">${item.status}</td>
        <td class="border px-4 py-2 text-center">
          <button onclick="hapusAktivitas(${index})" class="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">Hapus</button>
        </td>
      </tr>`;
  });
}

// Fungsi tambah aktivitas baru
function tambahAktivitas() {
  const tanggal = prompt("Tanggal (YYYY-MM-DD):");
  const equipment = prompt("Nama Equipment:");
  const deskripsi = prompt("Deskripsi Aktivitas:");
  const status = prompt("Status (Selesai/Dalam Proses):");

  if (tanggal && equipment && deskripsi && status) {
    aktivitas.push({ tanggal, equipment, deskripsi, status });
    tampilkanData();
  }
}

// Hapus aktivitas
function hapusAktivitas(index) {
  if (confirm("Yakin ingin menghapus aktivitas ini?")) {
    aktivitas.splice(index, 1);
    tampilkanData();
  }
}

// Logout
function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "index.html";
}
