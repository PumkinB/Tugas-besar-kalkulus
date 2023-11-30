function klik() {
    var a = parseFloat(document.getElementById("input-field").value);
    var n = parseFloat(document.getElementById("input-field2").value);

    //validasi
    if (isNaN(a) || (isNaN(n))){
      document.getElementById("output-field").value = "Yang anda masukkan adalah bukan angka";
      return;
    }

    // Menghitung turunan fungsi
    var pangkat = n - 1;
    var angka = a * n;
    var hasil = angka + "x^" + pangkat;
  
    document.getElementById("output-field").value = hasil;

    // Cara menghitung turunan fungsi (Calculation)
    document.getElementById("output-field2").value = "f(x) =" + a + "." + n + "x^" + n + "-1";

  };
    function pencet(){
    var n = parseFloat(document.getElementById("input-field2").value);

   //Pangkat doang
   var pangkatOnly = n - 1;
   var angka2 = n;
   var hasil2 = angka2 + "x^" + pangkatOnly;
   
   document.getElementById("output-field").value = hasil2;

   // Cara menghitung turunan fungsi (Calculation)
   document.getElementById("output-field2").value = "f(x) =" + n  + "x^" + n + "- 1";
      
  };

  function res(){
    var a = document.getElementById("input-field").value = "";
    var n = document.getElementById("input-field2").value = "";
    var hasil = document.getElementById("output-field").value = "0";
    document.getElementById("output-field2").value = "-";
  };





