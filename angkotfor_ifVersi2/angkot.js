var angkotBeroprasi = 6;
var nomorAngkot = 1;
var jumlahAngkot = 10;

for(nomorAngkot;nomorAngkot<=jumlahAngkot;nomorAngkot++){
	if(nomorAngkot<=angkotBeroprasi && nomorAngkot!==5){
		console.log(`angkot nomor ${nomorAngkot} sedang beroprasi`);
	}else if(nomorAngkot === 8 || nomorAngkot===10 || nomorAngkot=== 5){
		console.log(`angkot nomor ${nomorAngkot} sedang lembur`);
	}else{
		console.log(`angkot nomor ${nomorAngkot} tidak beroprasi`);
	}
}
