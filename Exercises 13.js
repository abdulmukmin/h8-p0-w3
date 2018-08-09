function targetTerdekat(arr) {
//1.cek apakah ada x atau tidak, 
    if (arr.indexOf('x')>=0) {
        
        //1.Buat looping untuk mengetahui posisi o & x
        //2.Bila tidak ada 'x' maka langsung tampilkan nilai 0
        //2.Simpan hasil, push ke array
        var xArr=[]
        var oArr=[]
        for (a=0;a<arr.length;a++){
            if (arr[a]==='x'){
                xArr.push(a)
            } else if (arr[a]==='o'){
                oArr.push(a)
            }  
        } 
        
        
        //3.Buat looping pengurangan jarak o ke x, hasilnya push ke 'hasil kurang'
        var hasilKurang=[]
        for (x=0;x<xArr.length;x++){
            for (y=0;y<oArr.length;y++){
                hasilKurang.push(Math.abs(xArr[x] - oArr[y]))
            }
        } 
        //4.Sort dari yang paling kecil
        var terkecil=0
        for (a=0;a<hasilKurang.length;a++){
            
            if (terkecil === 0){
                terkecil = hasilKurang[a]
            } else if (terkecil > hasilKurang [a]){
                terkecil = hasilKurang[a]
            }
        }
        return (terkecil)

    } else {
        return (0)
        
    }

}
  
// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2