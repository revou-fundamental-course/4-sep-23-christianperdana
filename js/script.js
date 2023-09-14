// Menampilakan card
let showLuasPersegiButton = document.getElementById('show-luas-persegi');
let showKelilingPersegiButton = document.getElementById('show-keliling-persegi');

// Button kembali
let backToWelcomeFromLuasPersegiButton = document.getElementById('back-to-welcome-from-luas-persegi');
let backToWelcomeFromKelilingPersegiButton = document.getElementById('back-to-welcome-from-keliling-persegi');

// Ambil elemen card 
let welcomeCard = document.querySelector('.welcome-card');
let luasPersegiCard = document.getElementById('luas-persegi');
let kelilingPersegiCard = document.getElementById('keliling-persegi');

// Fungsi untuk menampilkan card kalkulator
function showLuasPersegi() {
    luasPersegiCard.style.display = 'block';
    kelilingPersegiCard.style.display = 'none';
    welcomeCard.style.display = 'none';
}
function showKelilingPersegi() {
    kelilingPersegiCard.style.display = 'block';
    luasPersegiCard.style.display = 'none';
    welcomeCard.style.display = 'none';
}

// Fungsi untuk kembali ke card selamat datang
function backToWelcomeFromLuasPersegi() {
    luasPersegiCard.style.display = 'none';
    welcomeCard.style.display = 'block';
}
function backToWelcomeFromKelilingPersegi() {
    kelilingPersegiCard.style.display = 'none';
    welcomeCard.style.display = 'block';
}

// Tambahkan event listener untuk button hitung
showLuasPersegiButton.addEventListener('click', showLuasPersegi);
showKelilingPersegiButton.addEventListener('click', showKelilingPersegi);

// Tambahkan event listener untuk tombol Kembali 
backToWelcomeFromLuasPersegiButton.addEventListener('click', backToWelcomeFromLuasPersegi);
backToWelcomeFromKelilingPersegiButton.addEventListener('click', backToWelcomeFromKelilingPersegi);



// Form kalkulator luas persegi
let luasPersegiForm = document.getElementById('luas-persegi-form');
let sisiInput = document.getElementById('sisi');
let luasPersegiResult = document.getElementById('luas-persegi-result');
let luasPersegiCalculation = document.getElementById('luas-persegi-calculation');
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

// Tambahkan event listener
luasPersegiForm.addEventListener('submit', hitungLuasPersegi);
resetButton.addEventListener('click', resetLuasForm);
backToWelcomeFromLuasPersegiButton.addEventListener('click', function () {
    resetLuasForm();
    backToWelcomeFromLuasPersegi();
});


// Form kalkulator keliling persegi
let kelilingPersegiForm = document.getElementById('keliling-persegi-form');
let sisiKelilingInput = document.getElementById('sisi-keliling');
let kelilingPersegiResult = document.getElementById('keliling-persegi-result');
let kelilingPersegiCalculation = document.getElementById('keliling-persegi-calculation');
let hitungKelilingButton = document.getElementById('hitung-keliling-button');
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
// Fungsi untuk mereset formulir
function resetKelilingForm() {
    kelilingPersegiForm.reset();
    kelilingPersegiResult.style.display = 'none';
}

// Tambahkan event listener 
kelilingPersegiForm.addEventListener('submit', hitungKelilingPersegi);
resetKelilingButton.addEventListener('click', resetKelilingForm);
backToWelcomeFromKelilingPersegiButton.addEventListener('click', function () {
    resetKelilingForm();
    backToWelcomeFromKelilingPersegi();
});