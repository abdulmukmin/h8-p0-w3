function hitungJumlahKata(kalimat) {
    //buat variabel penampungan baru untuk data tipe array
    var kalimatArr = []

    //jadikan "kalimat" sebagai array, di push
    kalimatArr.push(kalimat)
    //split array dari kalimat, karena kalimat awalnya masih berada dalam 1 index
    var kalimatSplit = kalimatArr[0].split(' ')
    //cek hasil split
    //console.log(kalimatSplit)
    return (kalimatSplit.length)
}
  
  // TEST CASES
   console.log(hitungJumlahKata('I have a dream ')); // 4
   console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
   console.log(hitungJumlahKata('A song to sing')); // 4
   console.log(hitungJumlahKata('I')); // 1
   console.log(hitungJumlahKata('I believe I can code')); // 5