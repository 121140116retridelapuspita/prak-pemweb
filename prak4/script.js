function hitungGanjilGenap() {
    // Mengambil bilangan dari input
    var bilangan = parseInt(document.getElementById("inputNumber").value);
    
    // Memeriksa apakah bilangan valid
    if (bilangan <= 0 || isNaN(bilangan)) {
        alert("Masukkan bilangan bulat positif yang valid.");
    } 
    else {
        // Menginisialisasi jumlah bilangan ganjil dan genap
        var jumlahGanjil = 0;
        var jumlahGenap = 0;

        // Melakukan perulangan dari 1 hingga bilangan yang dimasukkan
        for (var i = 1; i <= bilangan; i++) {
            if (i % 2 === 0) {
                // Bilangan genap
                jumlahGenap++;
            } 
            else {
                // Bilangan ganjil
                jumlahGanjil++;
            }
        }
        
        // Menampilkan hasil perhitungan di elemen dengan id "hasil"
        var hasilText = "Jumlah bilangan ganjil: " + jumlahGanjil + "<br>Jumlah bilangan genap: " + jumlahGenap;
        document.getElementById("hasil").innerHTML = hasilText;
    }
}
