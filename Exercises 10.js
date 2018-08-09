function perkalianUnik(arr) {
    var hasil = arr[arr.length-1] //mengisi nilai dengan index terakhir karena agar ikut dikalikan

    //kalikan semua nilai
    for (a=0;a<arr.length-1;a++){
        hasil = hasil*arr[a]
    }   

    //bagi nilai sesuai dengan index dan push sesuai dengan indexnya
    var hasilAkhir=[]
    for (a=0;a<arr.length;a++){
        diBagi = hasil/arr[a]
        hasilAkhir.push(diBagi)
    } return (hasilAkhir)
}

// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]32, 160]