// ini js luas segitiga

const alas = document.getElementById('alas')
const tinggi = document.getElementById('tinggi')
const hitung = document.getElementById('hitung-btn')
const output = document.getElementById('output')
hitung.addEventListener('click',function(){
    let a = alas.value
    let t = tinggi.value
    let l = 0.5*a*t
    output.innerHTML = `Luas Segitiga dari alas ${a} cm dan tinggi ${t}cm adalah ${l} cm2`
})

// ini js keliling segitiga


