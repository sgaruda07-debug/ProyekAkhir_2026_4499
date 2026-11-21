/*
 * Proyek Akhir Semester Ganjil
 * XI RPL 2 | Pemrograman Web
 */

// Data awal
const daftarKegiatan = ["Piket Kelas", "Rapat OSIS", "Kerja Bakti"];

function tampilkanKegiatan(daftar) {
  const elemenDaftar = document.getElementById("daftarKegiatan");

  if (elemenDaftar === null) {
    return;
  }

  elemenDaftar.innerHTML = "";

  // JS-01 dan JS-02
  for (let i = 0; i < daftar.length; i++) {
    const namaKegiatan = daftar[i];

    const item = document.createElement("li");
    item.textContent = namaKegiatan;
    elemenDaftar.appendChild(item);
  }
}

function perbaruiTampilan() {
  tampilkanKegiatan(daftarKegiatan);

  const elemenTotal = document.getElementById("totalKegiatan");
  if (elemenTotal !== null) {
    elemenTotal.textContent = hitungJumlahKegiatan(daftarKegiatan);
  }
}

function tampilkanStatus(pesan, berhasil) {
  const elemenStatus = document.getElementById("pesanStatus");
  if (elemenStatus === null) {
    return;
  }

  elemenStatus.textContent = pesan;
  elemenStatus.classList.remove("berhasil", "gagal");
  elemenStatus.classList.add(berhasil ? "berhasil" : "gagal");
}

// JS-03, JS-04, JS-05
function tambahKegiatan(daftar, nama) {
  let namaBersih = nama.trim();

  if (namaBersih === "") {
    return false;
  }

  if (daftar.includes(namaBersih)) {
    return false;
  }

  daftar.push(namaBersih);
  return true;
}

// JS-06
function cariKegiatan(daftar, nama) {
  let namaBersih = nama.trim();
  return daftar.indexOf(namaBersih);
}

// JS-07 dan JS-08
function hapusKegiatan(daftar, nama) {
  let indeks = cariKegiatan(daftar, nama);

  if (indeks === -1) {
    return false;
  }

  daftar.splice(indeks, 1);
  return true;
}

// JS-09
function hitungJumlahKegiatan(daftar) {
  return daftar.length;
}

// Kode penghubung antarmuka
document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("inputKegiatan");
  const btnTambah = document.getElementById("btnTambah");
  const btnCari = document.getElementById("btnCari");
  const btnHapus = document.getElementById("btnHapus");

  if (input !== null && btnTambah !== null) {
    btnTambah.addEventListener("click", function () {
      const berhasil = tambahKegiatan(daftarKegiatan, input.value);

      tampilkanStatus(
        berhasil
          ? "Kegiatan berhasil ditambahkan."
          : "Nama kegiatan kosong atau sudah terdaftar.",
        berhasil
      );

      if (berhasil) input.value = "";
      perbaruiTampilan();
    });
  }

  if (input !== null && btnCari !== null) {
    btnCari.addEventListener("click", function () {
      const indeks = cariKegiatan(daftarKegiatan, input.value);

      tampilkanStatus(
        indeks !== -1
          ? `Kegiatan ditemukan pada indeks ${indeks}.`
          : "Kegiatan tidak ditemukan.",
        indeks !== -1
      );
    });
  }

  if (input !== null && btnHapus !== null) {
    btnHapus.addEventListener("click", function () {
      const berhasil = hapusKegiatan(daftarKegiatan, input.value);

      tampilkanStatus(
        berhasil
          ? "Kegiatan berhasil dihapus."
          : "Kegiatan tidak ditemukan.",
        berhasil
      );

      if (berhasil) input.value = "";
      perbaruiTampilan();
    });
  }

  perbaruiTampilan();
});