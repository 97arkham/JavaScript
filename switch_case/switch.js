var item = prompt('masukan nama makanan/minuman: \n(cth: nasi, daging, susu, hamburger, softdrink)');
switch(item){
	case 'nasi':
	case 'daging':
	case 'susu':
		alert('makanan / minuman SEHAT!');
		break;
	case 'hamburger':
	case 'softdrink':
		alert('makanan / minuman TIDAK SEHAT!');
		break;
	default:
		alert('anda tidak memasukan nama makanan dan minuman pada cth');
		break;
}