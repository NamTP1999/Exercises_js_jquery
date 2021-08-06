function selectItem() {	
	/* get id of id of items*/
	const select = document.getElementById('id_items');
	var option = select.options[select.selectedIndex].value;

	/* get id of province*/
	const province = document.getElementById('province');

	/* get length option of province*/
	const countProvince = province.options.length;
	
	/* set highlight */
	for (let i = 0; i < countProvince; i++) {
		/* select item*/
		if (option == i + 1) {
			province.options[i].style.color = "white";
			province.options[i].style.background = "gray";
		} else {
			province.options[i].style.color = "black";
			province.options[i].style.background = "none";
		}

		/* select even number*/
		if (option == countProvince + 1 ) {
			if ((i + 1) % 2 == 0) {
				province.options[i].style.color = "white";
				province.options[i].style.background = "gray";
			}
		}

		/* select odd*/
		if (option == countProvince + 2) {
			if ((i + 1) % 2 != 0) {
				province.options[i].style.color = "white";
				province.options[i].style.background = "gray";
			}
		}

		/* reset*/
		if (option == 3) {
			province.options[i].style.color = "black";
			province.options[i].style.background = "none";
		}

	}

}
