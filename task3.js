let barang = [
    {"Beras",10000,5},
    {"Gula",14000,5},
    {"Telur",20000,2},
    {"Minyak Goreng",9000,10},
];
let hitung = 0

for (let index = 0; index < barang.length; index++) {
    hitung += barang[i][1]*barang[i][2];
    
}
console.log(`Total Rp ${hitung}`);