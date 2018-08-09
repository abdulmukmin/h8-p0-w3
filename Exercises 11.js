function tentukanDeretAritmatika(arr) {
    //1.Tampung nilai yang dicari
    //2.Lakukan looping untuk menjumlahkan antar bilangan
    for (a=0;a<arr.length-2;a++){
        jarak1=(arr[a+1]-arr[a])
        //console.log('pembanding 1 '+jarak1)
        //3.buat looping nilai pembanding
        for (k=0;k<1;k++){
            jarak2=arr[a+2]-arr[a+1]
            //console.log('pembanding 2 '+jarak2)
        }

    //4.Bandingkan hasil looping dengan penjumlahan selanjutnya. Jika hasilnya beda lanjutkan ke 5a, jika hasilnya sama maka lanjutkan ke 5b.
        if (jarak1!=jarak2){
    //5b. Tampilkan "false" dan hentidak proses
            return (false)    
        }
    }
    //5a.Lanjut ke proses 6
    //6.Tampilkan "true"
    return (true)

}
  
// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false