function balikString(kata){
    
    var kataTebalik =''
    for (k=kata.length;k>0-1;k--){
      kataTebalik = kataTebalik + kata.charAt(k)
        
    } return kataTebalik
}

console.log(balikString('hello world!'))

/*
//input "hello world!"
//output
"!dlrow olleh"
*/