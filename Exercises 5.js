function palindrome(kata) {
    var kataDibalik=''
    for (b=kata.length;b>0-1;b--){
        kataDibalik = kataDibalik + kata.charAt(b)
    } 
    
    if (kata === kataDibalik){
        return (true)
    } else {
        return (false)
    }
}
  
// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false 