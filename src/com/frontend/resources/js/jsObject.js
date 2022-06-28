
function objectLiteral() {    
    var developer = {
        name : 'robert',
        level : 'senior',
        skill : 'java'
    }
    
    for (const key in developer) {
        console.log(developer[key]);
    }
    console.log(developer.name);
}

function objectFunctionDeclaration(product, terjual, harga){
    var toko = {}
    toko.product = product;
    toko.terjual = terjual;
    toko.harga = harga;
    return toko;     
}

var pembeli1 = objectFunctionDeclaration('Yakult', 5, 2500)
var pembeli2 = objectFunctionDeclaration('Yakult', 10, 2500)
console.log(pembeli2);