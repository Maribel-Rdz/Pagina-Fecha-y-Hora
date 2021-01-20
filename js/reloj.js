(function(){
	var actualizarHora=function(){
		var fecha=new Date(),
			horas=fecha.getHours(),
			ampm,
			minutos=fecha.getMinutes(),
			segundos=fecha.getSeconds(),
			dia=fecha.getDate(),
			mes=fecha.getMonth(),
			year=fecha.getFullYear();

			var pHoras=document.getElementById('horas'),
			pAMPM=document.getElementById('ampm'),
			pMinutos=document.getElementById('minutos'),
			pSegundos=document.getElementById('segundos'),
			pDia=document.getElementById('dia'),
			pMes=document.getElementById('mes'),
			pYear=document.getElementById('year');

			if(dia<10){
				dia="0" + dia
			};
			pDia.textContent=dia;

			var meses=['01','02','03','04','05','06','07','08','09','10','11','12'];
			pMes.textContent=meses[mes];

			pYear.textContent=year;

			//se tiene que ejecutar cada segundo para que se actualice por lo que se hace lo siguiente:
			//por defecto el formato de reloj es de 24, asi que se usan condicionales

			if(horas>=12){
				horas= horas-12;
				ampm='PM';
			} else {
				ampm='AM';
			}

			if(horas==0){
				horas=12;
			};

			pHoras.textContent=horas;
			pAMPM.textContent=ampm;

			if(minutos<10){
				minutos="0" + minutos
			};
			if(segundos<10){
				segundos="0" + segundos
			};
			pMinutos.textContent=minutos;
			pSegundos.textContent=segundos;
	};

	actualizarHora();
	var intervalo =setInterval(actualizarHora,1000); 
}())