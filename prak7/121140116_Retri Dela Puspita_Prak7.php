<?php

//Nama  : RETRI DELA PUSPITA
//NIM   : 121140116
//Kelas : RB

class Mahasiswa {
    private $nama;
    private $nim;
    private $prodi;

    // Konstruktor untuk inisialisasi objek
    public function __construct($nama, $nim, $prodi) {
        $this->nama = $nama;
        $this->nim = $nim;
        $this->prodi = $prodi;
        echo "Objek Mahasiswa dengan NIM {$this->nim} telah dibuat.<br><br>";
    }

    // Getter untuk mendapatkan nilai atribut
    public function getNama() {
        return $this->nama;
    }

    public function getNim() {
        return $this->nim;
    }

    public function getProdi() {
        return $this->prodi;
    }

    // Setter untuk mengubah nilai atribut
    public function setNama($nama) {
        $this->nama = $nama;
    }

    public function setNim($nim) {
        $this->nim = $nim;
    }

    public function setProdi($prodi) {
        $this->prodi = $prodi;
    }

    // Metode untuk menampilkan data mahasiswa
    public function tampilkanDataMahasiswa() {
        echo "Nama: " . $this->nama . "<br>";
        echo "NIM: " . $this->nim . "<br>";
        echo "Prodi: " . $this->prodi . "<br>";
    }

    // Destruktor untuk membersihkan atau melakukan tindakan sebelum objek dihapus
    public function __destruct() {
        echo "<br>Objek Mahasiswa dengan NIM {$this->nim} akan dihapus.<br>";
    }
}

// Membuat objek mahasiswa dengan menggunakan konstruktor
$mahasiswa = new Mahasiswa("Retri Dela", "123456789", "Sistem Informasi");

// Menampilkan data mahasiswa awal
echo "Data Mahasiswa Awal:<br>";
$mahasiswa->tampilkanDataMahasiswa();

// Mengubah nilai atribut menggunakan setter
$mahasiswa->setNama("Retri Dela");
$mahasiswa->setNim("121140116");
$mahasiswa->setProdi("Teknik Informatika");

// Menampilkan data mahasiswa setelah perubahan
echo "<br>Data Mahasiswa Setelah Perubahan:<br>";
$mahasiswa->tampilkanDataMahasiswa();

// Objek akan dihapus secara otomatis saat keluar dari lingkup
unset($mahasiswa);

?>
