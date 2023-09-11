// Ambil elemen tombol Luas Persegi
let showLuasPersegiButton = document.getElementById('show-luas-persegi');

// Ambil elemen tombol Keliling Persegi
let showKelilingPersegiButton = document.getElementById('show-keliling-persegi');

// Ambil elemen tombol Kembali dari card kalkulator luas persegi
let backToWelcomeFromLuasPersegiButton = document.getElementById('back-to-welcome-from-luas-persegi');

// Ambil elemen tombol Kembali dari card kalkulator keliling persegi
let backToWelcomeFromKelilingPersegiButton = document.getElementById('back-to-welcome-from-keliling-persegi');

// Ambil elemen card selamat datang
let welcomeCard = document.querySelector('.welcome-card');

// Ambil elemen card kalkulator luas persegi
let luasPersegiCard = document.getElementById('luas-persegi');

// Ambil elemen card kalkulator keliling persegi
let kelilingPersegiCard = document.getElementById('keliling-persegi');

// Fungsi untuk menampilkan card kalkulator luas persegi
function showLuasPersegi() {
    luasPersegiCard.style.display = 'block';
    kelilingPersegiCard.style.display = 'none';
    welcomeCard.style.display = 'none';
}

// Fungsi untuk menampilkan card kalkulator keliling persegi
function showKelilingPersegi() {
    kelilingPersegiCard.style.display = 'block';
    luasPersegiCard.style.display = 'none';
    welcomeCard.style.display = 'none';
}

// Fungsi untuk kembali ke card selamat datang dari card kalkulator luas persegi
function backToWelcomeFromLuasPersegi() {
    luasPersegiCard.style.display = 'none';
    welcomeCard.style.display = 'block';
}

// Fungsi untuk kembali ke card selamat datang dari card kalkulator keliling persegi
function backToWelcomeFromKelilingPersegi() {
    kelilingPersegiCard.style.display = 'none';
    welcomeCard.style.display = 'block';
}

// Tambahkan event listener untuk tombol Luas Persegi
showLuasPersegiButton.addEventListener('click', showLuasPersegi);

// Tambahkan event listener untuk tombol Keliling Persegi
showKelilingPersegiButton.addEventListener('click', showKelilingPersegi);

// Tambahkan event listener untuk tombol Kembali dari card kalkulator luas persegi
backToWelcomeFromLuasPersegiButton.addEventListener('click', backToWelcomeFromLuasPersegi);

// Tambahkan event listener untuk tombol Kembali dari card kalkulator keliling persegi
backToWelcomeFromKelilingPersegiButton.addEventListener('click', backToWelcomeFromKelilingPersegi);



// Ambil elemen form kalkulator luas persegi
let luasPersegiForm = document.getElementById('luas-persegi-form');

// Ambil elemen input sisi
let sisiInput = document.getElementById('sisi');

// Ambil elemen hasil luas persegi
let luasPersegiResult = document.getElementById('luas-persegi-result');

// Ambil elemen perhitungan luas persegi
let luasPersegiCalculation = document.getElementById('luas-persegi-calculation');

// Ambil elemen tombol reset
let resetButton = document.getElementById('reset-button');

// Fungsi untuk menghitung luas persegi
function hitungLuasPersegi(event) {
    event.preventDefault(); 

    let sisi = parseFloat(sisiInput.value);

    if (!isNaN(sisi)) {
        let luas = sisi * sisi;
        luasPersegiCalculation.textContent = sisi + ' * ' + sisi + ' = ' + luas;
        luasPersegiResult.style.display = 'block';
    } else {
        alert('Panjang sisi harus berupa angka positif.');
    }
}

// Fungsi untuk mereset formulir
function resetLuasForm() {
    luasPersegiForm.reset();
    luasPersegiResult.style.display = 'none';
}

// Tambahkan event listener untuk form submit
luasPersegiForm.addEventListener('submit', hitungLuasPersegi);

// Tambahkan event listener untuk tombol reset
resetButton.addEventListener('click', resetLuasForm);

// Tambahkan event listener untuk tombol Kembali dari card kalkulator luas persegi
backToWelcomeFromLuasPersegiButton.addEventListener('click', function () {
    resetLuasForm();
    backToWelcomeFromLuasPersegi();
});


// Ambil elemen form kalkulator keliling persegi
let kelilingPersegiForm = document.getElementById('keliling-persegi-form');

// Ambil elemen input sisi keliling
let sisiKelilingInput = document.getElementById('sisi-keliling');

// Ambil elemen hasil keliling persegi
let kelilingPersegiResult = document.getElementById('keliling-persegi-result');

// Ambil elemen perhitungan keliling persegi
let kelilingPersegiCalculation = document.getElementById('keliling-persegi-calculation');

// Ambil elemen tombol hitung keliling
let hitungKelilingButton = document.getElementById('hitung-keliling-button');

// Ambil elemen tombol reset keliling
let resetKelilingButton = document.getElementById('reset-keliling-button');

// Fungsi untuk menghitung keliling persegi
function hitungKelilingPersegi(event) {
    event.preventDefault(); 

    let sisiKeliling = parseFloat(sisiKelilingInput.value);

    if (!isNaN(sisiKeliling)) {
        let keliling = 4 * sisiKeliling;
        kelilingPersegiCalculation.textContent = '4 * ' + sisiKeliling + ' = ' + keliling;
        kelilingPersegiResult.style.display = 'block';
    } else {
        alert('Panjang sisi harus berupa angka positif.');
    }
}

// Fungsi untuk mereset formulir keliling
function resetKelilingForm() {
    kelilingPersegiForm.reset();
    kelilingPersegiResult.style.display = 'none';
}

// Tambahkan event listener untuk form submit keliling
kelilingPersegiForm.addEventListener('submit', hitungKelilingPersegi);

// Tambahkan event listener untuk tombol reset keliling
resetKelilingButton.addEventListener('click', resetKelilingForm);

// Tambahkan event listener untuk tombol Kembali dari card kalkulator keliling persegi
backToWelcomeFromKelilingPersegiButton.addEventListener('click', function () {
    resetKelilingForm();
    backToWelcomeFromKelilingPersegi();
});