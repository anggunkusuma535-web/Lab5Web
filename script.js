
"use strict";

// LATIHAN 1 - MENAMPILKAN OUTPUT
document.getElementById("pesan").textContent = "Hello World";
console.log("Hello World");


// LATIHAN 2 - ALERT DAN PROMPT
function sapaPengguna() {
    const namaPengguna = prompt("Masukkan nama Anda:", "");

    if (namaPengguna && namaPengguna.trim() !== "") {
        alert("Halo, " + namaPengguna + "!");
        document.getElementById("pesan").textContent =
            "Selamat datang, " + namaPengguna + ".";
    } else {
        alert("Nama belum diisi.");
    }
}


// LATIHAN 3 - FUNCTION DAN OPERASI ARITMETIKA
function operasiDasar(a, b) {
    console.log("Penjumlahan:", a + b);
    console.log("Pengurangan:", a - b);
    console.log("Perkalian:", a * b);
    console.log(
        "Pembagian:",
        b !== 0 ? a / b : "Tidak dapat dibagi nol"
    );
    console.log("Modulus:", a % b);
}

operasiDasar(9, 4);

// LATIHAN 4 - SELEKSI KONDISI IF-ELSE
function cekNilai() {
    const inputNilai = prompt("Masukkan nilai (0-100):");
    const nilaiMahasiswa = Number(inputNilai);

    if (
        inputNilai === null ||
        inputNilai.trim() === "" ||
        Number.isNaN(nilaiMahasiswa) ||
        nilaiMahasiswa < 0 ||
        nilaiMahasiswa > 100
    ) {
        alert("Input nilai tidak valid.");
    } else if (nilaiMahasiswa >= 60) {
        alert("Lulus");
    } else {
        alert("Belum lulus");
    }
}

// LATIHAN 5 - SELEKSI KONDISI SWITCH
function pilihBilangan() {
    const inputPilihan = prompt("Masukkan angka 1-5:");

    switch (inputPilihan) {
        case "1":
            alert("Bilangan satu");
            break;
        case "2":
            alert("Bilangan dua");
            break;
        case "3":
            alert("Bilangan tiga");
            break;
        case "4":
            alert("Bilangan empat");
            break;
        case "5":
            alert("Bilangan lima");
            break;
        default:
            alert("Pilihan tidak tersedia");
    }
}

// LATIHAN 6 - FORM BILANGAN GENAP ATAU GANJIL
function cekBilangan() {
    const input = document.getElementById("bilangan").value;
    const angka = Number(input);
    const hasil = document.getElementById("hasilBilangan");

    if (input.trim() === "" || !Number.isInteger(angka)) {
        hasil.textContent = "Masukkan bilangan bulat yang valid.";
    } else if (angka % 2 === 0) {
        hasil.textContent = "Bilangan genap";
    } else {
        hasil.textContent = "Bilangan ganjil";
    }
}

// LATIHAN 7 - MENGUBAH WARNA HALAMAN
function ubahWarnaLatar(warna) {
    document.body.style.backgroundColor = warna;
}

// LATIHAN 8 - DOM DAN CHECKBOX MENU MAKANAN
const daftarMenu = document.querySelectorAll(".menu");

daftarMenu.forEach((item) => {
    item.addEventListener("change", hitungTotal);
});

function hitungTotal() {
    let total = 0;

    daftarMenu.forEach((item) => {
        if (item.checked) {
            total += Number(item.value);
        }
    });

    document.getElementById("total").textContent =
        total.toLocaleString("id-ID");
}

// MINI PROJECT - KALKULATOR NILAI MAHASISWA

function hitungNilaiAkhir() {
    const tugasInput = document.getElementById("nilaiTugas").value;
    const utsInput = document.getElementById("nilaiUTS").value;
    const uasInput = document.getElementById("nilaiUAS").value;
    const hasil = document.getElementById("hasilNilaiAkhir");

    if (
        tugasInput.trim() === "" ||
        utsInput.trim() === "" ||
        uasInput.trim() === ""
    ) {
        hasil.textContent = "Semua nilai harus diisi.";
        return;
    }

    const tugas = Number(tugasInput);
    const uts = Number(utsInput);
    const uas = Number(uasInput);

    if (
        tugas < 0 || tugas > 100 ||
        uts < 0 || uts > 100 ||
        uas < 0 || uas > 100
    ) {
        hasil.textContent = "Nilai harus berada antara 0 dan 100.";
        return;
    }

    const nilaiAkhir = (tugas * 0.30) + (uts * 0.30) + (uas * 0.40);
    let nilaiHuruf;

    if (nilaiAkhir >= 85) {
        nilaiHuruf = "A";
    } else if (nilaiAkhir >= 75) {
        nilaiHuruf = "B";
    } else if (nilaiAkhir >= 60) {
        nilaiHuruf = "C";
    } else if (nilaiAkhir >= 50) {
        nilaiHuruf = "D";
    } else {
        nilaiHuruf = "E";
    }

    hasil.textContent =
        "Nilai Akhir: " + nilaiAkhir.toFixed(2) +
        " | Nilai Huruf: " + nilaiHuruf;
}


function eksperimenOperasiDasar() {
    const inputA = prompt("Masukkan bilangan pertama:");
    const inputB = prompt("Masukkan bilangan kedua:");

    if (
        inputA === null || inputA.trim() === "" ||
        inputB === null || inputB.trim() === ""
    ) {
        alert("Kedua bilangan harus diisi.");
        return;
    }

    const a = Number(inputA);
    const b = Number(inputB);

    if (Number.isNaN(a) || Number.isNaN(b)) {
        alert("Masukkan angka yang valid.");
        return;
    }

    console.log("Penjumlahan:", a + b);
    console.log("Pengurangan:", a - b);
    console.log("Perkalian:", a * b);
    console.log("Pembagian:", b !== 0 ? a / b : "Tidak dapat dibagi nol");
    console.log("Modulus:", a % b);
}


function tampilkanPerkalian7() {
    let hasil = "";

    for (let i = 1; i <= 10; i++) {
        hasil += "7 x " + i + " = " + (7 * i) + "<br>";
    }

    document.getElementById("hasilPerkalian7").innerHTML = hasil;
}


function cekGenap(angka) {
    return angka % 2 === 0;
}

function ujiCekGenap() {
    const input = document.getElementById("angkaGenap").value;
    const hasil = document.getElementById("hasilCekGenap");

    if (input.trim() === "" || !Number.isInteger(Number(input))) {
        hasil.textContent = "Masukkan bilangan bulat yang valid.";
        return;
    }

    const angka = Number(input);

    if (cekGenap(angka)) {
        hasil.textContent = angka + " adalah bilangan genap. (true)";
    } else {
        hasil.textContent = angka + " adalah bilangan ganjil. (false)";
    }
}


function validasiForm() {
    const nama = document.getElementById("namaValidasi").value.trim();
    const hasil = document.getElementById("hasilValidasi");

    if (nama === "") {
        hasil.textContent = "Nama tidak boleh kosong.";
        return false;
    }

    hasil.textContent = "Halo, " + nama + "! Form berhasil dikirim.";
    return false;
}


const menuEksperimen = document.querySelectorAll(".menuEksperimen");

function hitungTotalEksperimen() {
    let total = 0;

    menuEksperimen.forEach(function(menu) {
        if (menu.checked) {
            total += Number(menu.value);
        }
    });

    document.getElementById("totalEksperimen").textContent =
        total.toLocaleString("id-ID");
}

menuEksperimen.forEach(function(menu) {
    menu.addEventListener("change", hitungTotalEksperimen);
});


function sembunyikanTeks() {
    document.getElementById("teksEksperimen").style.display = "none";
}

function tampilkanTeks() {
    document.getElementById("teksEksperimen").style.display = "block";
}
