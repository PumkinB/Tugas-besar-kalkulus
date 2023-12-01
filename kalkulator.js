let inputAngka = document.getElementById("input-field");
let inputPangkat = document.getElementById("input-field2");

function klik() {
    var a = parseFloat(inputAngka.value);
    var n = parseFloat(inputPangkat.value);

    // Menghitung turunan fungsi
    var pangkat = n - 1;
    var angka = a * n;
    var hasil = angka + "x^" + pangkat;
  
    document.getElementById("output-field").value = hasil;

    // Cara menghitung turunan fungsi (Calculation)
    document.getElementById("output-field2").value = "f(x) =" + a + "." + n + "x^" + n + "-1";

  //Menghapus field
    inputAngka.value = "";
    inputPangkat.value = "";
  };





