"use strict" 
function pasanganTerbesar(num) {
    var pasangan = []
    var nomorToString = num.toString()

    for (var a=0;a<nomorToString.length-1;a++){
        pasangan.push(nomorToString[a]+nomorToString[a+1])
     }
     return Number(pasangan.sort(function(a,b){return b - a})[0])//abis di sort, langsung tampilkan index
     
}
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99 