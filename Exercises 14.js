function mengelompokkanAngka(arr) {
    //1.buat variabel untuk menampung output yang diinginkan

    var genap = []
    var ganjil = []
    var kelipatan3 = []
    var penampunganBersama = []
    //2.Lakukan looping dari nilai yang dicari
    for (var l = 0; l < arr.length; l++) {
        //3.Cek bilangan kelipatan 3 kah?
        if (arr[l] % 3 === 0) {
            kelipatan3.push(arr[l])
        }
        //3.Cek bilangan genapkah?
        else if (arr[l] % 2 === 0) {
            genap.push(arr[l])
        }
        //3.Cek bilangan ganjilkah?
        else if (arr[l] % 2 != 0) {
            ganjil.push(arr[l])
        }

    }
    //4.Memasukkan data-data ke 'penapungan bersama'
    penampunganBersama.push(genap, ganjil, kelipatan3)
    return (penampunganBersama)
}

  // TEST CASES
 console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
 console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
 console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
 console.log(mengelompokkanAngka([])); // [ [], [], [] ]