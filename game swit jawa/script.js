var tanya = true
while(tanya){
	//menangkap pilihan player
	var p = prompt('silahkan pilih: gajah, semut, orang');
	//menangkap pilihan komputer
	//meningkatkan bilangan random
	var comp = Math.random();

	if(comp < 0.34){
		comp = 'gajah';
	}else if(comp >= 0.34 && comp < 0.67){
		comp = 'orang';
	}else{
		comp = 'semut';
	}

	var hasil=''
	//menentukan rules
	if(p == comp){
		hasil = 'seri';
	}else if(p=='gajah'){
		// if(comp = 'orang'){
		// 	hasil = 'menang';
		// }else{
		// 	hasil = 'kalah'
		// }
		hasil = (comp == 'orang')? 'menang':'kalah';
		
	}else if(p=='orang'){
		hasil = (comp == 'gajah')? 'kalah':'menang';
	}else if(p == 'semut'){
		hasil = (comp == 'gajah')? 'menang':'kalah';
	}else{
		hasil = 'memasukan pilihan salah';
	}


	
	//tampilkan hasil
	alert(`kamu memilih: ${p} \nkomputer memilih: ${comp} \nmaka kamu: ${hasil}`);
	tanya = confirm('lagi?');
}
alert('terimakasih,sudah bermain');

