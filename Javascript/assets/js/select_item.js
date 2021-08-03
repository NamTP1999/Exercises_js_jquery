function selectItem(){	
	/* get id of id of items*/
	var select = document.getElementById('id_items');
	var option = select.options[select.selectedIndex].value;

	/* get id of province*/
	var province = document.getElementById('province');

	/* get length option of province*/
	var countProvince = province.options.length;
	/* set highlight */
	for(let i = 0; i < countProvince; i++){
		/* select item*/
		if(option == i+1){
			province.options[i].style.color = "white";
			province.options[i].style.background = "gray";
		}else{
			province.options[i].style.color = "black";
			province.options[i].style.background = "none";
		}

		/* select even number*/
		if(option == 7){
			if((i+1) % 2 == 0){
				province.options[i].style.color = "white";
				province.options[i].style.background = "gray";
			}
		}
		/* select odd*/
		if(option == 8){
			if((i+1) % 2 != 0){
				province.options[i].style.color = "white";
				province.options[i].style.background = "gray";
			}
		}

		/* reset*/
		if(option == 9){
			province.options[i].style.color = "black";
			province.options[i].style.background = "none";
		}

	}



}