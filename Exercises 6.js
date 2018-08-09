function angkaPalindrome(num) {
    var hasil= num
    
    if (num <= 10){
        return (hasil + 1)
    } else {
        for (var x=num;x<3000;x++){
            hasil = hasil + 1
            var tampungNumber=''
            //ubah number ke string
            stringHasil = hasil.toString()
            //console.log('ini hasil string ->'+stringHasil)
            //lakukan pembalikan string
            for (i=stringHasil.length;i>0-1;i--){
                tampungNumber = tampungNumber + stringHasil.charAt(i)    
            }
            //console.log('ini hasil pembalikan nomor ->'+tampungNumber)
            //bandingkan string yang dibalik dengan number dites
            if (tampungNumber == hasil){
                return hasil
                break
               } else {
            }
        }
    }
}
  
// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001 */