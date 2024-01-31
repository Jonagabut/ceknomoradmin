function cekNomor() {
    var nomor = document.getElementById("nomor").value;
    var hasil = document.getElementById("hasil");

    // Cek apakah input kosong
    if (nomor === "") {
        hasil.innerHTML = "Mohon masukkan nomor telepon.";
    } else {
        // Cek nomor terpercaya
        if (nomor === "085173138301" || nomor === "085609003718" || nomor === "085175108301") {
            hasil.innerHTML = "Nomor " + nomor + " Asli admin.";
        } else {
            hasil.innerHTML = "Nomor " + nomor + " tidak terdaftar sebagai nomor admin.";
        }
    }
}
