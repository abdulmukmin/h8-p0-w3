function groupAnimals(animals) {
    /*
    1.Masukkan nilai yang dicari
    2.looping huruf awal pada kata yang dicari (untuk mencari huruf apa aja yang ada)
    3.tampung huruf2 awal dalam variabel huruf
    4.lakukan sort pada penampungan huruf2 awal
    5.looping kembali huruf2 awal, lalu bandingkan 
    6.simpan index kata dari animals untuk setiap huruf yang sama
    7.push hasilnya ke variabel yang sudah disusun
    */

    //var animals=['cacing', 'ayam', 'kuda', 'anoa', 'kancil']
    var huruf=[]
    var hurufDiCek=[]
    var susunAnimals=[]

    for (h=0; h<animals.length; h++){
        //console.log(animals[h][0])
        // for (a=0; a<huruf.length;a++){
        // //setiap masuk huruf baru, diperiksa adakah kata yang sama
        //     if (huruf[a]!=animals[h][0]){
        huruf.push(animals[h][0])
        // }
        //}

    } //console.log(huruf)
    //sort huruf
    huruf.sort()
    // pilih huruf yang sendiri masukkan ke hurufDiCek
    for (a=0;a<animals.length;a++) {
        if (huruf[a]!= huruf[a+1]){
            hurufDiCek.push(huruf[a])
        }
    }
    //console.log(hurufDiCek)
    
    //console.log(susunAnimals)
    for (c=0; c<hurufDiCek.length; c++){
        //buat array baru untuk menampung setiap kategori, dalam hal ini pernama animals
        susunAnimals.push([])
        for (a=0;a<animals.length; a++){
            //console.log(animals[a][0])
            if (hurufDiCek[c]===animals[a][0]){
              susunAnimals[c].push(animals[a])
            //   console.log('niali a ->'+a)
            //   console.log('niali c ->'+c)
            }
        }
    }
    return (susunAnimals)
}
  
//   // TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
//   // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
//   // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]