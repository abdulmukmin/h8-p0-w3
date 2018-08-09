function groupAnimals(animals) {

    var huruf=[]
    var hurufDiCek=[]
    var susunAnimals=[]

    for (h=0; h<animals.length; h++){
        huruf.push(animals[h][0])
    }
    huruf.sort()
    
    for (a=0;a<animals.length;a++) {
        if (huruf[a]!= huruf[a+1]){
            hurufDiCek.push(huruf[a])
        }
    }
    
    for (c=0; c<hurufDiCek.length; c++){
        //buat array baru untuk menampung setiap kategori, dalam hal ini pernama animals
        susunAnimals.push([])
        for (a=0;a<animals.length; a++){
            //console.log(animals[a][0])
            if (hurufDiCek[c]===animals[a][0]){
              susunAnimals[c].push(animals[a])
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