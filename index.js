const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()

// const, let, var = tipe data
// express dkk = variabel
// const = nilainya tetap
// let hanya bisa digunakan di 1 function
// var bisa digunakan antar end-point (bersifat global)

app.use(bodyParser.json()) //dipanggil melalui variabel karena sudah terinstall dan tersimpan di dalamnya
app.use(bodyParser.urlencoded({extended:true})) //inputan user akan dikirimkan ke url
app.use(cors()) //

// ----------------- penggunaan method dalam endpoint ----------------- //

// penggunaan method get 
app.get("/murid", (req,res) => {
    let response = {
        message: "hai saya mengantuk"
    }
    res.json(response)
})

app.get("/biodata/:nama/:kelas/:absen/:hobi", (req,res) => {
    let nama = req.params.nama
    let kelas = req.params.kelas
    let absen = req.params.absen
    let hobi = req.params.hobi
    
    let response = {
        nama: nama,
        kelas: kelas,
        absen: absen,
        hobi: hobi,
        message: "skian trims"
    }
    res.json(response)
})

// ------------------------- contoh modul ------------------------- //

app.post("/bujur_sangkar",(req,res)=>{
    // menampung data yang dikirim dan mengkonversi
    let panjang = Number(req.body.panjang) //mengambil nilai panjang dari body
    let lebar = Number(req.body.lebar) //mengambil nilai lebar dari body
    let luas = panjang * lebar
    let keliling = 2 * (panjang + lebar)

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        panjang: panjang,
        lebar: lebar,
        luas: luas,
        keliling: keliling
    }
    res.json(response)
})

// ----------------------- studi kasus ----------------------- //
app.post("/registrasi_ekskul", (req,res) => {
    let nama = req.body.nama
    let alamat = req.body.alamat
    let kelas = req.body.kelas
    let umur = Number(req.body.umur)
    let sekolah = req.body.sekolah
    let ekskul = req.body.ekskul

    let response = {
        message : "berikut data registrasi anda",
        nama : nama,
        alamat : alamat,
        kelas : kelas,
        umur : umur,
        sekolah : sekolah,
        ekskul : "mengikuti ekskul " + ekskul
    }
    res.json(response)
})


// ------------------------- nomor 1 ------------------------- //

app.post("/balok", (req,res)=>{
    let panjang = Number(req.body.panjang) 
    let tinggi = Number(req.body.tinggi)
    let lebar = Number(req.body.lebar)
    let volume = panjang * lebar * tinggi
    let luas = 2 * ((panjang * lebar)+(panjang * tinggi)+(lebar * tinggi))

    let response = {
        panjang: panjang,
        lebar: lebar,
        tinggi: tinggi,
        volume: volume,
        luas: luas,
    }
    res.json(response)
})

app.post("/kerucut", (req,res)=>{
    const phi = 3.14
    let radius = Number(req.body.radius)
    let tinggi = Number(req.body.tinggi)
    let volume = 1/3 * phi * radius * radius * tinggi
    let luas = phi * radius * (radius + tinggi)

    let response = {
        phi: phi,
        radius: radius,
        tinggi: tinggi,
        volume: volume,
        luas: luas
    }   
    res.json(response)
})

app.post("/bola", (req,res)=>{
    const phi = 22/7
    let radius = Number(req.body.radius)
    let luas_permukaan = 4 * phi * radius * radius
    let luas_bola_setengah = 2 * phi * radius * radius
    let luas_bola_padat = 3 * phi * radius * radius

    let response = {
        phi: phi,
        radius: radius,
        luas_permukaan: luas_permukaan,
        luas_bola_setengah: luas_bola_setengah,
        luas_bola_padat: luas_bola_padat
    }
    res.json(response)
})

app.post("/tabung", (req,res)=>{
    let phi = 3.14
    let tinggi = Number(req.body.tinggi) 
    let radius = Number(req.body.radius)
    let volume = phi * radius * radius * tinggi

    let response = {
        phi: phi,
        tinggi: tinggi,
        radius: radius,
        volume: volume + "cm3"
    }
    res.json(response)
})

// ------------------------- nomor 2 ------------------------- //

app.post("/convert/celcius", (req,res)=>{
    let celcius = Number(req.body.celcius)
    let fahrenheit = (celcius * 9/5) + 32
    let kelvin = celcius + 273
    let reamur = 4/5 * celcius

    let response = {
        celcius: celcius,   
        result : {
            reamur: reamur,
            fahrenheit: fahrenheit,
            kelvin: kelvin
        }
    }
    res.json(response)
})

app.post("/convert/reamur", (req,res)=>{
    let reamur = Number(req.body.reamur)
    let celcius = 5/4 * reamur
    let fahrenheit = 9/4 * reamur + 32
    let kelvin = 5/4 * reamur + 273

    let response = {
        reamur: reamur,
        result : {
            celcius: celcius,
            fahrenheit: fahrenheit,
            kelvin: kelvin,
        }
    }
    res.json(response)
})

app.post("/convert/kelvin", (req,res)=>{
    let kelvin = Number(req.body.kelvin)
    let fahrenheit = (kelvin - 9/5) - 459
    let celcius = kelvin - 273
    let reamur  = 4/5 * (kelvin - 273)

    let response = {
        kelvin: kelvin,
        result : {
            fahrenheit: fahrenheit,
            reamur: reamur,
            celcius: celcius,
        }
    }
    res.json(response)
})

app.post("/convert/fahrenheit", (req,res)=>{
    let fahrenheit = Number(req.body.fahrenheit)
    let kelvin = (fahrenheit + 459.67) * 5/9
    let celcius = (fahrenheit - 32) * 5/9
    let reamur = 4/9 * (fahrenheit - 32)

    let response = {
        fahrenheit: fahrenheit,
        result : {
            kelvin: kelvin,
            reamur: reamur,
            celcius: celcius
        }
    }
    res.json(response)
})

// ------------------------- nomor 3 ------------------------- //

app.post("/bilangan_desimal", (req,res) => {
    let angka = Number(req.body.angka)
    let biner = angka.toString(2)
    let octal = angka.toString(8)
    let hexadecimal = angka.toString(16)
    let response = {
        decimal: angka,
        result:{
            biner: biner,
            octal: octal,
            hexadecimal: hexadecimal
        }
    }
    res.json(response)
})

app.post("/bilangan_biner", (req,res) => {
    let angka = Number(req.body.angka)
    let decimal = parseInt(angka, 2)
    let octal = decimal.toString(8)
    let hexadecimal = decimal.toString(16)
    let response = {
        biner: angka,
        result:{
            decimal: decimal,
            octal: octal,
            hexadecimal: hexadecimal
        }
    }
    res.json(response)
})

app.post("/bilangan_octal", (req,res) => {
    let angka = req.body.angka
    let decimal= parseInt(angka, 8)
    let biner = decimal.toString(2)
    let hexadecimal = decimal.toString(16)
    let response = {
        octal: angka,
        result:{
            decimal: decimal,
            biner: biner,
            hexadecimal: hexadecimal
        }
    }
    res.json(response)
})

app.post("/bilangan_hexadesimal", (req,res) => {
    let angka = req.body.angka
    let decimal= parseInt(angka, 16)
    let biner = decimal.toString(2)
    let octal = decimal.toString(8)
    let response = {
        hexadecimal: angka,
        result:{
            decimal: decimal,
            octal: octal,
            biner: biner
        }
    }
    res.json(response)
})

// ------------------------- nomor 4 ------------------------- //

app.post("/bmi", (req,res) => {
    let berat = Number(req.body.berat)
    let tinggi = Number(req.body.tinggi)
    let BMI = berat / (tinggi * tinggi)
    let status

    if (BMI < 18.5) {
        status = "kekurangan berat badan"
    } else if (BMI >= 18.5 && BMI <= 24.9) {
        status = "Normal (ideal)"
    } else if (BMI >= 25.0 && BMI <= 29.9) {
        status = "kelebihan berat badan"
    } else {
        status = "kegemukan (obesitas)"
    }
    let response = {
       berat: berat,
       tinggi: tinggi,
       BMI: BMI,
       status: status
    }
    res.json(response)
})

app.listen(8000, ()=>{
    console.log("puji tuhan")
})



// const = tipe data
// express = variabel