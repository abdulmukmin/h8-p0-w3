function dataHandling(input){

    var pertanyaan = ["Nomor ID","Nama Lengkap","TTL","Hobi"]

    for (b=0;b<input.length;b++){

        for (k=0;k<pertanyaan.length;k++){

            if (k===2){
                console.log(pertanyaan[k]+': '+input[b][k]+" "+input[b][k+1]) //k ditambahkan 1 agar ditampilkan bersamaan dengan jawaban berikutnya
            } else if (k>=3){
                console.log(pertanyaan[k]+': '+input[b][k+1])
            } else {
                console.log(pertanyaan[k]+': '+input[b][k])
            }
        } console.log('')
        
    }
}

dataHandling(
    [
        ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
        ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
        ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
        ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"],
        ["0005", "Abdul", "Lamping", "6/4/1978", "Hiking"],
        ["0006", "Ujang", "Reog", "3/9/1937", "Tidur"]
    ]
)