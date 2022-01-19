let tinggi = 1.7, bb = 90;

let hitung = bb / (tinggi*tinggi);

console.log(`BMI = ${hitung}`);

if (hitung < 18.5) {
    console.log("Kurang Berat Badan");
} else if(hitung >= 18.5 && hitung <= 24.9){
    console.log("Normal");
} else if(hitung >= 25 && hitung <= 29.9){
    console.log("Kelebihan Berat Badan");
} else if(hitung > 30){
    console.log("Kegemukan");
}