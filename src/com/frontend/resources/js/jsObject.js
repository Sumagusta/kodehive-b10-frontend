
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

// function declaration obj
function objectFunctionDeclaration(product, terjual, harga){
    var toko = {}
    toko.barang = product;
    toko.terjual = terjual;
    toko.harga = harga;
    return toko;     
}

var pembeli1 = objectFunctionDeclaration('Yakult', 5, 2500)
var pembeli2 = objectFunctionDeclaration('Yakult', 10, 2500)

console.log(pembeli2);

function diskon(presentage){
    this.presentage = presentage;
}

// Js Object Constructor
function pembeli(product, jumlahBeli, hargaProduct){
    this.barang = product,
    this.jumlah = jumlahBeli,
    this.harga = hargaProduct,
    this.presentage = new diskon(0.5)
    this.discount = function(){
        var discount = (this.jumlah * this.harga) * 0.5
        var hutang = 0.3

        result = discount * hutang
        return result
    }
}

var pembeli3 = new pembeli('Kaos', 5, 100000)
console.log(pembeli1.barang);

// Object Prototype
function toko (product, harga, terjual){
    this.product = product,
    this.harga = harga,
    this.terjual = terjual
}

laporan1 = new toko('Jacket Kulit', 250000, 20)

toko.prototype.detil = function(stok){
    var productTerpublish = 'product dengan nama '+this.product+' terjual sebanyak '+this.terjual+'('+this.harga*this.terjual+')';
    var stokProduct = 'Sisa stok product : '+stok+' ('+this.harga*stok+')'
    return productTerpublish +' '+ stokProduct
}
laporan2 = new toko('Jacket Kulit', 250000, 20, 7)
