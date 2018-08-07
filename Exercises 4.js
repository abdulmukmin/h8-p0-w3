function dataHandling2(dataAwal){
    var dataDiSplice = dataAwal.splice(2,3,"Provinsi Bandar Lampung","21/05/1989", "Pria","SMA Internasional Metro")
    console.log(dataAwal)
    var TTL=dataAwal[3]
    var splitTTL=TTL.split('/')
    var bulan=splitTTL[1]
    var sebutBulan=''
        switch (05) {
            case 01 :
                sebutBulan='Januari'
                break
            case 02 :
                sebutBulan='Februari'
                break
            case 03 :
                sebutBulan='Maret'
                break
            case 04 :
                sebutBulan='April'
                break
            case 05 :
                sebutBulan='Mei'
                break
            case 06 :
                sebutBulan='Juni'
                break
            case 07 :
                sebutBulan='Juli'
                break
            case 08 :
                sebutBulan='Agustus'
                break
            case 09 :
                sebutBulan='September'
                break
            case 10 :
                sebutBulan='Oktober'
                break
            case 11 :
                sebutBulan='November'
                break
            case 12 :
                sebutBulan='Desember'
                break
        }
        console.log(sebutBulan)
    var sortTTL= splitTTL.sort(function(a,b){return b - a})
    console.log(sortTTL)
    var joinTTL = TTL.split('/').join('-')
    console.log(joinTTL)
    var nama=dataAwal[1]
    var namaDiSlice= nama.slice(0,15)
    console.log(namaDiSlice)
}

dataHandling2([
    "0001", 
    "Roman Alamsyah", 
    "Bandar Lampung", 
    "21/05/1989", 
    "Membaca"
])