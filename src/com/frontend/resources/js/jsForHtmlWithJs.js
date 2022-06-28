var data = 9
        var dataString = "kodehive"
        dataString = 900
        console.log(dataString +" "+ data + dataString);

        dataString += " academy";
        console.log(dataString);

        const angka = 15;
        //angka = 10;
        console.log(angka);

        let dataLet = 80000;
        dataLet = 90
        console.log('data let '+dataLet);

        function contohFunc() {
            for (let index = 0; index < 5; index++) {
                console.log(index);
            }
        }
        
        contohFunc()

        function notifikasi(){
            alert("Belajar Javascript")
        }

        function toko(belanjaan, totalHarga){
            console.log("Belanjaan : "+belanjaan);
            console.log("Total Harga : "+totalHarga);
        }

        function toko2(belanjaan, totalHarga){
            // DOM -> memanipulasi synthax html melalui javascript
            document.write("Belanjaan : "+belanjaan+"<br />")
            document.write("Total Harga : "+totalHarga)
        }

        // return func
        function tambah(a, b){
            hasil = a + b
            return hasil
        }

        function rumus1() {
            data = 100
            data += tambah(10, 5)
            //console.log('result rumus 1 : '+data);
            document.write('result rumus 1 : '+data)
        }

        /*
            Buatlah Supaya Header 'HELLO WORLD!' secara otomatis berubah menjadi 'USING DOM'
            ketika di klik button tertentu.

        */

        function changeDataUsingDOM(){
            var elemen = document.getElementById('testDiv')
            elemen.getElementsByTagName('p')[0].innerHTML = '<p style="color:red;">Using DOM</p>'
        }

        function changeDataUsingDOM2(){
            document.getElementById('inner').innerHTML = '<table align="center" style="width: 50%; padding-top: 40; LINE-HEIGHT:50px" class="table table-striped"><thead> <tr> <th scope="col">#</th> <th scope="col">First</th> <th scope="col">Last</th> <th scope="col">Handle</th> </tr></thead> <tbody> <tr> <th scope="row">1</th> <td>Mark</td><td>Otto</td><td>@mdo</td></tr><tr> <th scope="row">2</th> <td>Jacob</td><td>Thornton</td><td>@fat</td></tr><tr> <th scope="row">3</th> <td colspan="2">Larry the Bird</td><td>@twitter</td></tr></tbody> </table>'
        }

        const dataGlobal = "Data Global"
        function globalLocalVar(){
            const dataLocal = "Data Local"
            console.log(dataLocal);
        }

        function checkGlobalVar(){
            console.log(dataGlobal);
        }

        function operator(a, b){
            var data
            data = a == b
            console.log('a == b : '+data);
            data = a === b
            console.log('a === b : '+ data);
        }

        function arrayJs(){
            data = [1, 3, 5]
            console.log(data);

            data2d = [
                [1, 2, 3],
                [4, 5, 6]
            ]
            for (const key in data) {
                console.log(key);
            }

            for(i = 0; i<data.length;i++){
                for (j=0;j < i; j++) {
                    
                    document.write(data[i][j]);
                    
                }
            }
            
        }

        function indexOf()
        {
            var str = "welcome broo"

            var startIndex = 5
            var karakter = 'o'
            var indexChar = str.indexOf(karakter, startIndex)
            console.log('data : '+ str);
            console.log('index dari karakter '+karakter+' adalah '+indexChar+' saat pencarian dimulai dari index ke - '+startIndex);
        }

        function sliceArr(){
            var game = ['stumble guy', 'mobile legend', 'pubg', 'marvel duel']

            console.log('slice with startIndex : '+game.slice(1));
            console.log('slice with startIndex and endIndex-1 : '+game.slice(0, 3));
        }

        function spliceArr(){
            var game = ['stumble guy', 'mobile legend', 'pubg', 'marvel duel']

            console.log(game.splice(0, 1, 'pes2022','marvel future','marvel part 2'));
            console.log(game);
            game.push('auto chess')
            console.log('after push data array : '+ game);
            console.log(game);
        }

        function filterDataArray(){

            // test filter 1
            data=['a', 'test', true, false, 5, 'la', 0].filter(Boolean);

            console.log(data);

            // test filter 2
            var data2 = ['hai', 'hello', 0, false, 1, true, 900, 'ok', 'hello', 900, 'hello'];
            var dataFilter = [900]
            console.log(data2);

            var res = data2.filter(item => dataFilter.includes(item));        
            console.log(res.length);
        }

        function forEachExample(){
            var data = [10, 20, 10]
            var result = []

            data.forEach(function(){
                console.log('test')
            })
            console.log(result);
        }

            

        