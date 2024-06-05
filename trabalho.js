function noma (){
	var idade1 = document.getElementById("").value;
    var idade2 = document.getElementById("").value;
    var semana1 = document.getElementById("").value;
	var anostri = document.getElementById("").value;
	var semana2 = document.getElementById("").value;
	var anostri1 = document.getElementById("").value;
	if(anostri !="" && anostri1 !=""){
		if(semana1 !="" && semana1 >= 6){
			idade1++;
		}
		if(semana1 !="" && semana1>=6){
            idade2++;
		}
		if(anostri !="" && anostri >=6){
        anostri++;
		}
	}
	var pesoua1 = pode(idade1,idade2,anostri, 1);
	var pesoua2 = pode(idade1,idade2,anostri, 1);
	var pesoua3 = pode(idade1,idade2,anostri, 1);

    if((pesoua1=true)&&(pesoua2=true)&&(pesoua3=true)){
		alert("casau formado!!!🥳");
	}else{
		alert("seu safado😡🚓");
	}
}
function pode (num,elememto,numper){
	var mine=(num/2)+7;
	var maxr=()
}