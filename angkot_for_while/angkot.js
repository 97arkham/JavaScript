var jumlahAngkot = 10;
var angkotBeroprasi = 6;
var nomorAngkot = 1;

while(nomorAngkot<=angkotBeroprasi){
	console.log(`Angkot nomor ${nomorAngkot} beroprasi dengan baik`);
	nomorAngkot++;
}

for(nomorAngkot = angkotBeroprasi + 1; nomorAngkot<=jumlahAngkot;nomorAngkot++){
	console.log(`angkot nomor ${nomorAngkot} sedang tidak beroprasi`);
}